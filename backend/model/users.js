const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
    },

    secondName:{
        type: String,
    },

    MobileNumber:{
        type: Number,
    },

    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
    },

    token: {
        type: String,
    },

    image:{
        type: String,
    }
},)

module.exports =mongoose.model('User',userSchema);