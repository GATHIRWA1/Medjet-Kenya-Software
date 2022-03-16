const Blog = require('../../models/blog');


//create a blog 

module.exports.createblog_post = (req, res, next) => {

    var query = req.body.title;
    Blog.findOne({ query }, function(err, blog) {
        if (err) console.log(err);
        if (blog) {
            res.send('This Record Already Exists');
            console.log('This Record Already Exists');
        } else {
            Blog.create(req.body).then(function(blog) {
                res.send(blog);
            }).catch(next);
        }
    });

}