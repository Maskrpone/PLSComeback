let express = require("express");
let router = express.Router();
let Machines = require("../models/machines");

// Route pour obtenir toutes les machines

router.get("/", async (req, res) => {
  try {
    const machines = await Machines.find();
    res.json(machines);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Obtenir une machine par son nom
router.get("/:name", async (req, res) => {
  try {
    const machine = await Machines.findOne({ name: req.params.name });
    (machine == null) ? res.status(404).send() : res.json(machine);
  } catch (error) {
    console.error(error);
    res.status(501).send("Internal Server Error");
  }
});

module.exports = router;
