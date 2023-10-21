const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationSchema = new Schema ({
    latitude  : {
        type: Number,
        required: true
    },
    longitude : {
        type: Number,
        required: true
    },
    // Champ de référence à la collection "Bus"
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus'
    },
});

module.exports = mongoose.model('Station', stationSchema);
