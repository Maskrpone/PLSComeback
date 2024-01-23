let express = require("express");
let router = express.Router();
let Supplies = require("../models/supplies");

router.get("/", async (req, res) => {
  try {
    const supplies = await Supplies.find();
    res.json(supplies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:name", async (req, res) => {
  try {
    const supply = await Supplies.findOne({ name: req.params["name"] });
    //res.json(supply);
    (supply == null) ? res.status(404).send() : res.json(supply);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Créer un nouveau consommable
router.post("/", async (req, res) => {
  try {
    const newSupply = new Supplies(req.body);
    const savedSupply = await newSupply.save();
    res
      .status(200)
      .json({ message: "Supply added successfully", supply: savedSupply });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Internal server error, your data is structured as : {'name': ?(String), 'quantity': ?(Number)}",
      );
  }
});

// ajouter une quantité au

module.exports = router;
