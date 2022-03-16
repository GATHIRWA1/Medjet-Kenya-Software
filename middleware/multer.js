const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

require('dotenv').config();
const { s3_Access_key_id ,s3_Secret_access_key ,s3_Bucket_region } = process.env;

//Amazon s3 configaration settings

const s3 = aws.s3({
    accesskeyid:s3_Access_key_id ,
    secretaccesskey:s3_Secret_access_key,
    region:s3_Bucket_region
});

const uploadPhoto = ()=> {
    multer({
        storage : multerS3({
            s3:s3,
            bucketName:"blog-photos-medjet" ,
            metadata:function(req , res , cb ){
                cb (null,{fieldName:file.fieldname});
            },
            key :function(req , file, cb){
                cb (null,`BlogImage_${Date.now()}`)
            }
        })
    });
}