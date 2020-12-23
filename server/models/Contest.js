const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contestSchema = mongoose.Schema({
    name: {
        type:String,
    },
    MbNumber: {
        type:String,
        maxlength:12,
    },
    category: {
        type: String,
    },
    WANumber: {
        type: Number,
        maxlength:12,
    },
    Email:{
        type: String,
    }
}, { timestamps: true })


const Contest = mongoose.model('Contest', contestSchema);

module.exports = { Contest }