const express = require("express");
const router = express.Router();
const Users = require("../models/users");

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
<<<<<<< Updated upstream
  try {
    const user = await Users.findOne({ username: req.params.name });
    (user == null) ? res.status(404).send() : res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
=======
	try {
		const user = await Users.findOne({ username: req.params.name });
		user == null ? res.status(404).send() : res.json(user);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
>>>>>>> Stashed changes
});

// Créer un utilisateur
router.post("/", async (req, res) => {
	try {
		const newUser = new Users(req.body);
		const savedUser = await newUser.save();
		res
			.status(200)
			.json({ message: "Utilisateur ajouté avec succès", user: savedUser });
	} catch (error) {
		console.error(error);
		res.status(500).send("Erreur interne du serveur");
	}
});

module.exports = router;
