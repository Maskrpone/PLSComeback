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

// Ajouter une machine
router.post("/", async (req, res) => {
  try {
    const newMachine = new Machines(req.body);
    const savedMachine = await newMachine.save();
    res.status(201).json(savedMachine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Modifier le calendrier d'un outil
router.put("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const { calendar } = req.body;

    // recherche de l'élément à l'aide de son nom
    const updateMachine = await Machines.findOneAndUpdate(
      { name: name },
      { $set: { calendar: calendar } },
      { new: true },
    );

    (!updateMachine) ? res.status(403).send("Element not found") : res.status(201).json(updateMachine);
  } catch (error) {
    console.error(error);
    res.status(501).send("Internal Server Error");
  }
});

module.exports = router;
