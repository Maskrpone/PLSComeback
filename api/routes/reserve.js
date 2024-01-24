const express = require("express");
const router = express.Router();

const Supplies = require("../models/supplies");
const Tools = require("../models/tools");
const Machines = require("../models/machines");
const History = require("../models/history");
const Users = require("../models/users");

router.post("/", async (req, res) => {
	try {
		// Check si l'username existe
		const user = await Users.findOne({ username: req.body.username });
		if (!user) return res.status(404).send("User not found");

		// Check si l'item existe (dans machines, tools, supplies)
		let query = await Supplies.findOne({ name: req.body.name });
		let collection = "Supplies";
		let stocks = query ? query.quantity : 0;

		if (!query) {
			query = await Tools.findOne({ name: req.body.name });
			collection = "Tools";
			stocks = query ? query.InStock : 0;
		}

		if (!query) {
			query = await Machines.findOne({ name: req.body.name });
			collection = "Machines";
			stocks = query ? query.InStock : 0;
		}

		if (!query) return res.status(404).send("Item not found");
		if (stocks < req.body.quantity)
			return res.status(403).send("Not enough items in stock");

		const newStock = stocks - req.body.quantity;

		// Update stock based on collection
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

		// Update or insert history item
		const newItem = {
			[req.body.name]: {
				quantity: req.body.quantity,
				date: new Date(),
				plannedReturnDate: req.body.plannedReturnDate ? new Date(req.body.plannedReturnDate) : null,
				realReturnDate: null,
				isLate: false,
			},
		};

		await History.findOneAndUpdate(
			{ username: req.body.username },
			{
				$set: {
					[`history.items.${Object.keys(newItem)[0]}`]:
						newItem[Object.keys(newItem)[0]],
				},
			},
			{ upsert: true },
		);

		res.send("DB updated");
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;
