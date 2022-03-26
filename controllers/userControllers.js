const User = require('../models/usermodel');

module.exports.registerUser = (req, res, next) => {

    var query = req.body.email;
    User.findOne({ query }, function(err, user) {
            if (err) console.log(err);
            if (user) {
                //res.send('This email is already in use by another user');
                console.log('This email is already in user by another user');
            } else {
                User.create(req.body).then(function(user) {
                    res.status(200).send(user);
                })
            }

        }) //catch(next);


}