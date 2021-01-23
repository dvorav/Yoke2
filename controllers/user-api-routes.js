// Requiring our models
let db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the users info
  app.get("/api/user", function(req, res) {
    let query = {};
    if (req.query.chat_id) {
        query.ChatId = req.query.chat_id;
    }
    // findAll returns all entries for a table when used with no options
    db.Username.findAll({
        where: query
    }).then(function(dbUser) {
      // We have access to the users info as an argument inside of the callback function
      res.json(dbUser);
    });

  });

  // POST route for saving a new user
  app.post("/api/user", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table.
    db.Username.create(req.body).then(function(dbUser) {
      // We have access to the new user as an argument inside of the callback function
      res.json(dbUser);
    });

  });
};