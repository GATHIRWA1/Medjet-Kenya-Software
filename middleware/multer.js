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
const uploadPhoto = (bucketName) => {
    multer({
        storage: multerS3({
            s3: s3,
            bucket: bucketName,
            metadata: function(req, res, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function(req, file, cb) {
                cb(null, `BlogImage_${Date.now()}`)
            }
        })
    });
}



module.exports = uploadPhoto;