let express = require("express");
let router = express.Router();
let Tools = require("../models/tools");

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

module.exports = router;
