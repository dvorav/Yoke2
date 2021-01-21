let express = require("express");
let router = express.Router();
let Chat = require("../models/chat.js");

//Renders main page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Yoke!", layout: "main", condition: false });
});

//Renders chatroom page
router.get("/chatroom", function (req, res, next) {
  res.render("chatroom", { title: "Yoke Chatroom", layout: "chat", condition: false });
});

// Get all users
router.get("/api/all", function (req, res) {
  // Finding all users, and then returning them to the user as JSON.
  Chat.findAll({}).then(function (results) {
    // results are available to us inside the .then
    res.json(results);
  });
});

// Add a user
router.post("/api/new", function (req, res) {
  
  console.log(req.body);

  Chat.create({
    username: req.body.username,
    topic: req.body.topic,
  }).then(function (results) {
    res.json(results);
  });
});

module.exports = router;
