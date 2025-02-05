const { PythonShell } = require("python-shell");
const TrafficData = require("../models/TrafficData");
const getTrafficData = async (req, res) => {
  try {
    PythonShell.run("./MlModule/Traffic.py", null, (err, results) => {
      if (err) {
        console.error(`Error executing ML script: ${err.message}`);
        return res.status(500).json({ error: "Failed to fetch traffic data" });
      }
      const trafficData = JSON.parse(results[0]);
      res.status(200).json(trafficData);
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const storeTrafficData = async (req, res) => {
  try {
    const { lane_1, lane_2, lane_3, lane_4 } = req.body;
    const trafficData = new TrafficData({
      lane_1,
      lane_2,
      lane_3,
      lane_4,
      timestamp: new Date(),
    });
    await trafficData.save();
    res.status(201).json({ message: "Traffic data stored successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to store traffic data" });
  }
};

module.exports = { getTrafficData, storeTrafficData };

