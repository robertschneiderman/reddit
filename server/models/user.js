const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const config = require('../environment');

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
        User.hasMany(models.Star, {
          foreignKey: 'userId',
          as: 'stars'
        });
      },
      findByToken: function(token) {
        var User = this;
        var decoded;

        console.log("config.secret", config.secret);
        decoded = jwt.decode(token, config.secret);
        try {
          decoded = jwt.decode(token, config.secret);
        } catch (e) {
          return Promise.reject();
        }

        return User.findOne({
          id: decoded.sub,
        }); 
      }     
    },
    instanceMethods: {
      comparePasswords: (candidatePassword, password, callback) => {
        if (bcrypt.compareSync(candidatePassword, password)) {
          callback(null, true);
        } else {
          callback(null, false);
        }
      }
    }
  });
  return User;
};