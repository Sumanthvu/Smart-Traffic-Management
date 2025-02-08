const mongoose = require('mongoose');

const trafficDataSchema = new mongoose.Schema({
    lane_1: {
        traffic_density: Number,
        vehicle_count: Number,
        green_light: Boolean,
        vehicle_counts: {
            bicycle: Number,
            car: Number,
            motorcycle: Number,
            bus: Number,
            truck: Number,
        },
    },
    lane_2: {
        traffic_density: Number,
        vehicle_count: Number,
        green_light: Boolean,
        vehicle_counts: {
            bicycle: Number,
            car: Number,
            motorcycle: Number,
            bus: Number,
            truck: Number,
        },
    },
    lane_3: {
        traffic_density: Number,
        vehicle_count: Number,
        green_light: Boolean,
        vehicle_counts: {
            bicycle: Number,
            car: Number,
            motorcycle: Number,
            bus: Number,
            truck: Number,
        },
    },
    lane_4: {
        traffic_density: Number,
        vehicle_count: Number,
        green_light: Boolean,
        vehicle_counts: {
            bicycle: Number,
            car: Number,
            motorcycle: Number,
            bus: Number,
            truck: Number,
        },
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('TrafficData', trafficDataSchema);
