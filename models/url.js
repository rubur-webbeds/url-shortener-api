const mongoose = require('mongoose');

var URLSchema = mongoose.Schema({
    shortURL: {
        type: String, 
        required: true
    },
    longURL: {
        type: String, 
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('URL', URLSchema);