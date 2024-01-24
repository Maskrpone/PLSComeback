const express = require("express");
const router = express.Router();

const Supplies = require("../models/supplies");
const Tools = require("../models/tools");
const Machines = require("../models/machines");
const History = require("../models/history");
const Users = require("../models/users");

router.post("/", async (req, res) => {
  try {
    // Check si l'username existe
    const user = await Users.findOne({ username: req.body.username });
    if (!user) return res.status(404).send("User not found");

    // Check si l'item existe (dans machines, tools, supplies)
    let query = await Supplies.findOne({ name: req.body.name });
    let collection = "Supplies";
    let stocks = query ? query.quantity : 0;

    if (!query) {
      query = await Tools.findOne({ name: req.body.name });
      collection = "Tools";
      stocks = query ? query.InStock : 0;
    }

    if (!query) {
      query = await Machines.findOne({ name: req.body.name });
      collection = "Machines";
      stocks = query ? query.InStock : 0;
    }

    if (!query) return res.status(404).send("Item not found");
    let newStock = await History.findOne({ username: req.body.username });

    // Check si l'historique à une clée correspondand à req.body.name
    if (!newStock.toJSON().history.items[req.body.name])
      return res.status(404).send("Item not found in history");

    newStock = newStock.toJSON().history.items[req.body.name].quantity + stocks;

    // Update stock based on collection
    switch (collection) {
      case "Supplies":
        await Supplies.findOneAndUpdate(
          { name: req.body.name },
          { quantity: newStock },
        );
        break;

      case "Machines":
        await Machines.findOneAndUpdate(
          { name: req.body.name },
          { InStock: newStock },
        );
        break;

      case "Tools":
        await Tools.findOneAndUpdate(
          { name: req.body.name },
          { InStock: newStock },
        );
        break;

      default:
        break;
    }

    let historyItem = await History.findOne({ username: req.body.username });
    historyItem = historyItem.toJSON().history.items[req.body.name];

    await History.findOneAndUpdate(
      { username: req.body.username },
      {
        $set: {
          [`history.items.${req.body.name}.realReturnDate`]: new Date(),
          [`history.items.${req.body.name}.isLate`]:
            new Date() > new Date(historyItem.plannedReturnDate),
        },
      },
    );

    res.send("DB updated");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
