var request = require('request');
var User = require('../models').User;
var Star = require('../models').Star;

module.exports = {
    create(req, res) {
        var token = req.header('x-auth');
        User.findByToken(token).then((user) => {        
            req.body.redditId;
            Star.create({userId: user.id, redditId: req.body.redditId}).then((star) => {
                res.status(201).send({star});                
            });
        });
    }
};