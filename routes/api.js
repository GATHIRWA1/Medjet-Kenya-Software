const express = require('express');
const router = express.Router();
const User = require('../models/usermodel');
const blogController = require('../controllers/blogcontroller');

//blog routes

//create blogs 
router.post('/blogpost', blogController.createblog_post);
/*//get  a blog 
router.get('/blogpost', getblog_post);
//update / edit a blog 
router.delete('/blogpost', deleteblog_post);
//delete a blog 
router.put('/blogpost', putblog_post);
*/

//LOGIN & SIGNUP SYSTEM

router.post('/register', function(req, res, next) {
    var query = req.body.email;
    User.findOne({ query }, function(err, user) {
        if (err) console.log(err.message);
        if (user) {
            res.send('This is email is already in use');
            console.log('User exists');
        } else {
            User.create(req.body).then(function(user) {
                res.status(200).send(user);
            });
        }
    });

})



module.exports = router;