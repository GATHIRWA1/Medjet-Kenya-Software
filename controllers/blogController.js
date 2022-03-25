const Blog = require('../models/blog');
const UploadImage = require('../middleware/multer');


//##################################
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

require('dotenv').config();
const { s3_Access_key_id, s3_Secret_access_key, s3_Bucket_region } = process.env;

//Amazon s3 configaration settings

const s3 = new aws.S3({
    accesskeyid: s3_Access_key_id,
    secretaccesskey: s3_Secret_access_key,
    region: s3_Bucket_region
});
//The malter function is stored in side the fuction uploadphoto to diffrent bucketNames depending on the parameter values
// that then returns a function called single which then accepts a string that acts like a key .
const uploadPhoto = () => {
    multer({
        storage: multerS3({
            s3: s3,
            bucket: 'blog-photos-medjet',
            metadata: function(req, res, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function(req, file, cb) {
                cb(null, `BlogImage_${Date.now().toString()}`)
            }
        })
    });
}

//create a blog 

module.exports.createblog_post = (req, res, next) => {

    //var query = req.body.title;
    //Blog.findOne({ query }, function(err, blog) {
    //  if (err) console.log(err);
    //if (blog) {
    //  res.send('This Record Already Exists');
    //   console.log('This Record Already Exists');
    //  } else {
    //we call the uploadphoto function in our multer middleware then store its value inside a const
    const Imageupload = uploadPhoto().single('photos');

    Imageupload((req, res, err) => {
        if (err)
            return res.status(400).json({ success: false, error: err.massage });
        console.log({ data: req.file });
        res.status(200).json({ data: req.file });
        //    });


        //    Blog.create(req.body).then(function(blog) {
        //       res.send(blog);
        //  }).catch(next);
        //    }
    });

}