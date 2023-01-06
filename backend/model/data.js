const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    author:{
        type: String,
    },
    description:{
        type: String,
    },
    seasons:{
        type: String,
    },
    ongoing: {
        type: String,
    },
    chapters: {
        type: Number,
    },
    tags:{
        type: Array,
    },
    image:{
        type: String,
    },
    file:{
        type: String,
    }
});

module.exports = mongoose.model('Data', dataSchema);