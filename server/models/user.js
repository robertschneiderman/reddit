'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false 
    }    
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Stars, {
          foreignKey: 'userId',
          as: 'stars'
        });
        // associations can be defined here
      }
    }
  });
  return User;
};