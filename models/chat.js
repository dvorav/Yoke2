// Dependencies
// =============================================================
let Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
let sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
let Chat = sequelize.define("chat", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE,
});

// Syncs with DB
Chat.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chat;
