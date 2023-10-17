const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema ({
    first_name : {
        type : String,
        required: true
    },
    last_name : {
        type: String ,
        required: true
    },
    phone_num : {
        type: String ,
        required: true
    }
});

module.exports = mongoose.model('Driver', driverSchema);
