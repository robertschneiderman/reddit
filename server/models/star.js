'use strict';
module.exports = function(sequelize, DataTypes) {
  var Star = sequelize.define('Star', {
    userId: DataTypes.INTEGER,
    allowNull: false
  }, {
    classMethods: {
      associate: function(models) {
        Star.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        });
        // associations can be defined here
      }
    }
  });
  return Star;
};