const express = require("express");
const app = express();
const port = 3000;

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
