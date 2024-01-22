let express = require('express')
let router = express.Router()
let Users = require("../models/users")


router.get("/", (req, res, next) => {
  res.send("requete test")
})


// Route pour obtenir tous les utilisateurs
router.get('/users', async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
