const mongoose = require('mongoose');

const trafficDataSchema = new mongoose.Schema({
    lane_1: {
        traffic_density: Number,
        vehicle_count: Number,
        green_light: Boolean,
    },
    lane_2: {
        traffic_density: Number,
        vehicle_count: Number,
        green_light: Boolean,
    },
    lane_3: {
        traffic_density: Number,
        vehicle_count: Number,
        green_light: Boolean,
    },
    lane_4: {
        traffic_density: Number,
        vehicle_count: Number,
        green_light: Boolean,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('TrafficData', trafficDataSchema);