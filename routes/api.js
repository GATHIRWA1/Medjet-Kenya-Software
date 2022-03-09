const express = require('express');
const router = express.Router();
const Blog = require('../models/blog.js');

//blog routes

//create blogs 
router.post('/blogpost', function(req, res, next) {
    var query = req.body.title;
    Blog.findOne({ query }, function(err, blog) {
        if (err) console.log(err);
        if (blog) {
            res.send('That record already exists');
            console.log("This has already been saved");
        } else {
            Blog.create(req.body).then(function(blog) {
                res.send(blog);
            }).catch(next);
        }



    });
});
//get  a blog 
router.get('/blogpost', function(req, res, next) {

    res.send('This are the blogs post ');
});
//update / edit a blog 
router.put('/blogpost', function(req, res, next) {
    res.send('This are the blogs post ');
});
//delete a blog 
router.delete('/blogpost', function(req, res, next) {
    res.send('This are the blogs post ');
});




module.exports = router;