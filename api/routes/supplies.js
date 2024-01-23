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

// Créer un nouveau consommable
router.post("/", async (req, res) => {
  try {
    const newSupplie = new Supplies(req.body);
    const savedSupplie = await newSupplie.save();
    res
      .status(200)
      .json({ message: "Supplie successfully added", supplie: savedSupplie });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Erreur interne du serveur, is your data structured as : {'name': ?(String), 'quantity': ?(Number)}",
      );
  }
});

// ajouter une quantité au

module.exports = router;
