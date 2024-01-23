let express = require("express");
let router = express.Router();
let History = require("../models/history");
let Machines = require("../models/machines");
let Supplies = require("../models/supplies");
let Tools = require("../models/tools");

var ObjectId = require('mongoose').Types.ObjectId; 

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

// Obtenir le nom des objets empruntés par un membre (et la quantité)
/*router.get("/objects/:name", async (req, res) => {
  try {
    const history = await History.findOne({username : req.params["name"]});
    
    // Récupère les ids des elements empruntés
    const ids = history.toJSON()["history"];
    let names = [];
    for (let i = 0; i < ids.length; i++) {
      let result = await Machines.findOne({_id: new ObjectId(ids[i])});
      if (result == null) {
        result = await Tools.findOne({_id: new ObjectId(ids[i])});
      }

      names.push(result.toJSON()['name']);
    }
    res.json(names);

  } catch (error) {
    console.error(error);
    res.status(501).send("Internal Server Error");
  }
})*/

router.get("/objects/:name", async (req, res) => {
  try {
    const history = await History.findOne({ username: req.params["name"] });

    // Récupère les ids des éléments empruntés
    const ids = history.toJSON()["history"];

    let names = [];

    for (let i = 0; i < ids.length; i++) {
      let result;

      // Recherche dans la collection Machines
      result = await Machines.findOne({ _id: new ObjectId(ids[i]) });

      // Si l'ID n'est pas trouvé dans Machines, recherche dans la collection Tools
      if (result == null) {
        result = await Tools.findOne({ _id: new ObjectId(ids[i]) });
      }

      // Si l'ID n'est pas trouvé dans Tools, recherche dans la collection Supplies
      if (result == null) {
        result = await Supplies.findOne({ _id: new ObjectId(ids[i]) });
      }

      // Si l'ID est trouvé dans l'une des collections, ajoute le nom à la liste
      if (result != null) {
        names.push(result.toJSON()['name']);
      }
    }

    res.json(names);
  } catch (error) {
    console.error(error);
    res.status(501).send("Internal Server Error");
  }
});


module.exports = router;
