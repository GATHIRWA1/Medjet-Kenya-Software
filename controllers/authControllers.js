const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//set MaxAge 

const maxAge = 3 * 24 * 60 * 60;

// A function to create a Token 

const createToken = (id) => {
    return jwt.sign({ id }, 'medjetkenya_sytem', maxAge);
}



//register new user logic 
module.exports.registerUser = (req, res, next) => {

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
    }).catch(next);

}

module.exports.loginUser = (req, res, next) => {


}