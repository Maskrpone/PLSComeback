let express = require("express");
let router = express.Router();
let Users = require("../models/users");

// Route pour obtenir tous les utilisateurs
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Obtenir un utilisateur par son username
router.get("/:name", async (req, res) => {
  try {
    const user = await Users.findOne({ name: req.params["name"] });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
