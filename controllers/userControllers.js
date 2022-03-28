const User = require('../models/usermodel');





//register new user logic 
module.exports.registerUser = (req, res) => {

    var query = req.body.email;
    User.findOne({ email: query }, function(err, user) {
        if (err) console.log(err);
        if (user) {
            res.send('This is email is already in use');
            console.log('User exists');
        } else {
            User.create(req.body).then(function(user) {
                res.status(200).send(user);
            });
        }
    });

}