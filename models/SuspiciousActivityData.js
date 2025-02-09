const mongoose = require('mongoose');

const suspiciousActivitySchema = new mongoose.Schema({
    detected: {
        type: Boolean,
        required: true,
    },
    activity_type: {
        type: String,
        enum: ["Person", "Fire", "Weapon", "Accident", null],
        default: null,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('SuspiciousActivity', suspiciousActivitySchema);