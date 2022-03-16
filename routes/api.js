const express = require('express');
const router = express.Router();

const blogController = require('./controllers/blogcontroller');

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



module.exports = router;