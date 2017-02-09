const User = require('../models').User;

module.exports = {
    signin(req, res) {
        let {email, password} = req.body;

        if (!email || !password) {
            res.status(422).send({ error: "You must provide email and password" });
        }

        User.findOrCreate({ where: {email}, defaults: {password}}).spread((user, created) => {
            // if (err) { return next(err); }
            if (!created) {
                return res.status(422).send({ error: 'Email is in use'} );
            }
            res.status(201).send(user);
        }).catch(error => res.status(400).send(error));
    }
};