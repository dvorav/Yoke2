// Dependencies
// =============================================================

// Sequelize (capital) references the standard library.
let Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
let sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
let Chat = sequelize.define("Chat", {
  username: Sequelize.STRING,
  topic: Sequelize.STRING
});

// Syncs with DB
Chat.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chat;
