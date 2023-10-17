const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema ({
    name : {
        type : String,
        required: true
    },
    adresse : {
        type: String ,
        required: true
    },
    phone_num : {
        type: String ,
        required: true
    },
    email : {
        type: String,
        required : true
    },
    bus_num : {
        type: int ,
        required: true
    }
});

module.exports = mongoose.model('School', schoolSchema);
