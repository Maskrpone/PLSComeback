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
    const supplie = await Supplies.findOne({ name: req.params["name"] });
    res.json(supplie);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
