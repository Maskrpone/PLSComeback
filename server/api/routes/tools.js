const express = require("express");
const router = express.Router();
const Tools = require("../models/tools");

// Route pour obtenir tous les utilisateurs
router.get("/", async (req, res) => {
  try {
    const tools = await Tools.find();
    res.json(tools);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Obtenir un utilisateur par son username
router.get("/:name", async (req, res) => {
  try {
    const tool = await Tools.findOne({ name: req.params["name"] });
    //res.json(tool);
    (tool == null) ? res.status(404).send() : res.json(tool);
  } catch (error) {
    console.error(error);
    res.status(501).send("Internal Server Error");
  }
});

// Ajouter un outil
router.post("/", async (req, res) => {
  try {
    const nouvelOutil = new Tools(req.body);
    const outilEnregistre = await nouvelOutil.save();
    res.status(201).json(outilEnregistre);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Modifier le calendrier d'un outil
router.put("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const { calendar } = req.body;

    // recherche de l'élément à l'aide de son nom
    const updateTool = await Tools.findOneAndUpdate(
      { name: name },
      { $set: { calendar: calendar } },
      { new: true },
    );

    (!updateTool) ? res.status(403).send("Element not found") : res.status(201).json(updateTool);
  } catch (error) {
    console.error(error);
    res.status(501).send("Internal Server Error");
  }
});

module.exports = router;
