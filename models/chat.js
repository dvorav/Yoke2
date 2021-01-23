// Creates a "Chat" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  let Chat = sequelize.define("Chat", {
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1,25]
      }
    },
  });

  Chat.associate = function(models) {
    Chat.hasMany(models.Username, {
      onDelete: "CASCADE"
    });
  };
  return Chat;
};