const express = require("express");
const router = express.Router();

const Supplies = require("../models/supplies");
const Tools = require("../models/tools");
const Machines = require("../models/machines");
const History = require("../models/history");
const Users = require("../models/users");

router.post("/", async (req, res) => {
	try {
		let collection = "";
		let stocks = 0;
		// Check si l'username existe
		let query = await Users.findOne({ username: req.body.username });
		if (!query) res.status(404).send("User not found");

		// Check si l'item existe (dans machines, tools, supplies)
		query = await Supplies.findOne({ name: req.body.name });
		if (query) {
			collection = "Supplies";
			stocks = query.quantity;
		}

		if (!query) {
			query = await Tools.findOne({ name: req.body.name });

			if (query) {
				collection = "Tools";
				stocks = query.InStock;
			}
		}

		if (!query) {
			query = await Machines.findOne({ name: req.body.name });

			if (query) {
				collection = "Machines";
				stocks = query.InStock;
			}
		}

		if (!query) res.status(404).send("Item not found");
		if (stocks < req.body.quantity)
			res.status(403).send("Not enough items in stock");

		const newStock = stocks - req.body.quantity;

		switch (collection) {
			case "Supplies":
				await Supplies.findOneAndUpdate(
					{ name: req.body.name },
					{ quantity: newStock },
				);
				break;

			case "Machines":
				await Machines.findOneAndUpdate(
					{ name: req.body.name },
					{ InStock: newStock },
				);
				break;

			case "Tools":
				await Tools.findOneAndUpdate(
					{ name: req.body.name },
					{ InStock: newStock },
				);
				break;
			default:
				break;
		}

		const userHistory = await History.findOne({ username: req.body.username });

		// Données à ajouter
		const newItem = {
			[req.body.name]: {
				quantity: req.body.quantity,
				date: new Date(),
				plannedReturnDate: new Date(req.body.plannedReturnDate),
				realReturnDate: null,
				isLate: false,
			},
		};

		// Utiliser findOneAndUpdate avec upsert: true
		try {
			// Utiliser findOneAndUpdate avec upsert: true et sans callback
			const result = await History.findOneAndUpdate(
				{ username: req.body.username },
				{
					$set: {
						[`history.items.${Object.keys(newItem)[0]}`]:
							newItem[Object.keys(newItem)[0]],
					},
				},
				{ upsert: true }, // Cette option crée le document s'il n'est pas trouvé
			);

			console.log("Document mis à jour avec succès !");
		} catch (err) {
			console.error(err);
		}

		res.send("DB updated");
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
