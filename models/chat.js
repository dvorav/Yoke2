// Creates a "Chat" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  let Chat = sequelize.define("Chat", {
    username: DataTypes.STRING,
    topic: DataTypes.STRING
  });
  return Chat;
};