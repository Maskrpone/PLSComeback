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
    supply == null ? res.status(404).send() : res.json(supply);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Créer un nouveau consommable
router.post("/", async (req, res) => {
  try {
    const nouvelleFourniture = new Supplies(req.body);
    const fournitureEnregistree = await nouvelleFourniture.save();
    res.status(201).json(fournitureEnregistree);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur Serveur" });
  }
});

// modifier la quantité d'un consommable

router.put("/:name/modify", async (req, res) => {
  try {
    const { name } = req.params;
    const { quantity } = req.body;

    // recherche de l'élément à l'aide de son nom
    const updateSupply = await Supplies.findOneAndUpdate(
      { name: name },
      { $set: { quantity: quantity } },
      { new: true },
    );

    if (!updateSupply) return res.status(403).send("Élément non trouvé");
    res.status(201).json(updateSupply);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
