const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    fName: {

        type: String,
        required: [true, 'First Name  Field is Required '],
        unique: true,


    },
    lName: {
        type: String,
        required: [true, 'Last Name Field is Required '],
        unique: true,

    },
    Phone: {

        type: String,
        required: [true, 'Phone Field is Required '],
        unique: true,


    },
    email: {
        type: String,
        required: [true, 'Email Field is Required '],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid  address']

    },
    password: {
        type: String,
        required: [true, 'Password is required '],
        minLength: [6, 'Password should be atleast 6 characters']

    },
    ProfilepicUrl: {
        type: String,
        //required: [true, 'Password is required '],
    },
    weight: String,
    height: String,
    age: String,
    countyOfResidence: String,
    city: String,
    Street: String

});



const user = mongoose.model('user', UserSchema);





module.exports = user;