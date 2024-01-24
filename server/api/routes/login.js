const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const { createHash } = require("crypto");
const bcrypt = require("bcrypt");

// Hash un string en sha256
function hash(string) {
  return createHash("sha256").update(string).digest("hex");
}

/* NOTE: le champ 'password' est wrappé par la fonction hash(), qu'il faudra retirer, une fois que le front implémentera la fonction */

// Renvoie l'utilisateur correspondant aux logins fournis
router.get("/:username/:password", async (req, res) => {
  try {
    const user = await Users.findOne({
      username: req.params.username,
      passwd: req.params.password,
    });

    (user == null) ? res.status(403).send('Invalid credentials or user does not exist') : res.json(user);
  
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Version post
router.post("/", async (req, res) => {
  try {
    const user = await Users.findOne({
      username: req.body.username,
      passwd: req.body.password,
    });
  
    (user == null) ? res.status(403).send('Invalid credentials or user does not exist') : res.json(user);
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
