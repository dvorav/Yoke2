// Creates a "Chat" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    let Username = sequelize.define("Username", {
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              len: [1,15]
          }
      }, 
    });
    Username.associate = function(models) {
        Username.belongsTo(models.Chat, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Username;
  };