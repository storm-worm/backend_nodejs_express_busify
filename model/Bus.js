const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busSchema = new Schema ({
    workZone : {
        type: String ,
        required: true
    },
    registration_num : {
        type: String ,
        required: true
    },
    // Champ de référence à la collection "Bus"
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    },
    // Champ de référence à la collection "Bus"
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    },
    trajet: {
        type: [{}], // Un tableau d'objets JSON
        required: true
    },

});

module.exports = mongoose.model('Bus', busSchema);
