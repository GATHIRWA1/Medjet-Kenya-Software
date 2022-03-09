const mongoose = require('mongoose');
const Schema = mongoose.Schema;





BlogSchema = new Schema({
    author: {
        type: String,
        required: [true, 'Please Fill in the author'],
        maxlength: [15, 'name Too long '],
    },
    blogTitle: {
        type: String,
        required: [true, 'Please enter the title of your blog '],
        maxlength: [60, 'Title  Too long '],
    },
    category: {
        type: String,
        required: [true, 'Enter category of you post'],
        maxlength: 10,

    },
    blogbody: {
        type: String,
        required: [true, 'This part cannot  be empty '],

    },
    image: {
        type: Buffer,


    },
    videoLink: {
        type: String,

    },
});

const blog = mongoose.model('blog', BlogSchema);



module.exports = blog;