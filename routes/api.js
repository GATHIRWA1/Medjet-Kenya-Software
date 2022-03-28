const express = require('express');
const router = express.Router();
const auth_Controller = require('../controllers/authControllers');
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

router.post('/register', auth_Controller.registerUser);
router.get('/login', auth_Controller.loginUser);



module.exports = router;