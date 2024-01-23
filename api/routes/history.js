let express = require("express");
let router = express.Router();
let History = require("../models/history");
/*
let Machines = require("../models/machines");
let Supplies = require("../models/supplies");
let Tools = require("../models/tools");
let ObjectId = require('mongoose').Types.ObjectId; 
*/
// Route pour obtenir toutes les machines

router.get("/", async (req, res) => {
  try {
    const history = await History.find();
    res.json(history);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


// Obtenir une l'historique d'un membre par son nom
router.get("/:name", async (req, res) => {
  try {
    const history = await History.findOne({ username: req.params["name"] });
    (history == null) ? res.status(404).send() : res.json(history);
  } catch (error) {
    console.error(error);
    res.status(501).send("Internal Server Error");
  }
});

// Obtenir les objets empruntés par un membre
router.get("/objects/:name", async (req, res) => {
  try {
    const history = await History.findOne({ username: req.params["name"] });

    // Récupère les ids des éléments empruntés
    const items = history.toJSON()['history']['items'];

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(501).send("Internal Server Error");
  }
});


module.exports = router;
