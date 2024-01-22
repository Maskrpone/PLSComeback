let express = require("express");
let router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // Connect to the MongoDB server
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://localhost:27017"; // replace with your MongoDB connection string
  const dbName = "your_database_name"; // replace with your database name

  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) throw err;

      const db = client.db(dbName);

      // Perform a basic query
      const collection = db.collection("users"); // replace with your collection name
      collection.find({ key: "value" }).toArray((err, docs) => {
        if (err) throw err;

        console.log("Query result:", docs);

        // Close the connection
        client.close();
      });
    },
  );
});

module.exports = router;
