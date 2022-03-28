const express = require('express');
const router = express.Router();
const signUp_Controller = require('../controllers/userControllers');
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

router.post('/register', signUp_Controller.registerUser);



module.exports = router;