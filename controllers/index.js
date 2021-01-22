let express = require("express");
let router = express.Router();

//Renders main page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Yoke!", layout: "main", condition: false });
});

//Renders chatroom page
router.get("/chatroom", function (req, res, next) {
  res.render("chatroom", { title: "Yoke Chatroom", layout: "chat", condition: false });
});

module.exports = router;
