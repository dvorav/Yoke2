// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the users info
  app.get("/api/all", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Chat.findAll({}).then(function(dbChat) {
      // We have access to the users info as an argument inside of the callback function
      res.json(dbChat);
    });

  });

  // POST route for saving a new user
  app.post("/api/new", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Chat.create({
      username: req.body.username,
      topic: req.body.topic
    }).then(function(dbChat) {
      // We have access to the new user as an argument inside of the callback function
      res.json(dbChat);
    });

  });
};