const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Add a new route for GET requests to /another
app.get("/another", (req, res) => {
  res.send("This is another route!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
