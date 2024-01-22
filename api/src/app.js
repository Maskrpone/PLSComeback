const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a simple mongoose model and schema
const Todo = mongoose.model("Todo", { text: String });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Add a new route for GET requests to /another
app.get("/another", (req, res) => {
  res.send("This is another route!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
