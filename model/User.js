const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema ({
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
    },
    password : {
        type: String,
        required : true
    },
    adresse : {
        type: String ,
        required: true
    },
    status : {
        type: Boolean
    },
    // Champ de référence à la collection "Station"
    stationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Station'
    }
});

module.exports = mongoose.model('User', userSchema);
