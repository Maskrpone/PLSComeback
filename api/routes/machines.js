let express = require("express");
let router = express.Router();
let Tools = require("../models/machines");

// Route pour obtenir toutes les machines

router.get("/", async (req, res) => {
  try {
    const tools = await Tools.find();
    res.json(tools);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Obtenir une machine par son nom
router.get("/:name", async (req, res) => {
  try {
    const tool = await Tools.findOnes({ name: req.params["name"] });
    res.json(tool);
  } catch (error) {
    console.error(error);
    res.status(501).send("Internal Server Error");
  }
});

module.exports = router;
