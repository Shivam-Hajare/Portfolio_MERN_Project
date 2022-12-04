const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})


//Hashing the password

userSchema.pre('save',async function(next){
    if(this.isModified("password"))
    {
        const hash=await bcrypt.hash(this.password,12)
        const chash=await bcrypt.hash(this.cpassword,12)
        this.password=hash;
        this.cpassword=chash;
    }
    next();
})


const User = mongoose.model('usersDB', userSchema)
module.exports = User;

