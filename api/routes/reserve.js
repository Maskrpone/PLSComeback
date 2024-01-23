let express = require('express');
let router = express.Router();

let Supplies = require("../models/supplies");
let Tools = require("../models/tools");
let Machines = require("../models/machines");
let History = require("../models/history");
let Users = require("../models/users");

router.post("/:username/:name/:quantity", async (res, req) => {
 try {
    // Check si l'username existe
    let query = await Users.findOne({username: req.body['username']});
    let userExists = (query != null);

    // Check si l'item existe (dans machines, tools, supplies)
    query = await Supplies.findOne({name: req.body['name']});
    let itemExists = (query != null);

    if (!itemExists) {
      query = await Tools.findOne({name: req.body['name']});
      itemExists = (query != null);
    }

    if (!itemExists) {
      query = await Machines.findOne({name: req.body['name']});
      itemExists = (query != null);
    }
    // Check si la quantité est suffisante
    



    // Met à jour l'history pour l'user
 } catch (error) {
    console.error(error);
    res.status(503).send()
 }
});

module.exports = router;
