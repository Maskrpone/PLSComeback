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

		res.json([req.body.username, collection, stocks]);
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
