// Requiring our models
let db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the chat 
  app.get("/api/chat", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Chat.findAll({}).then(function(dbChat) {
      // We have access to the chat as an argument inside of the callback function
      res.json(dbChat);
    });

  });

  // POST route for saving a new user
  app.post("/api/chat", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table.
    db.Chat.create(req.body).then(function(dbChat) {
      // We have access to the new user as an argument inside of the callback function
      res.json(dbChat);
    });
  });
};