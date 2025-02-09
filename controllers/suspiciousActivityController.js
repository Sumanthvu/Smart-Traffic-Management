const { PythonShell } = require("python-shell");
const SuspiciousActivity = require("../models/SuspiciousActivityData");

const getSuspiciousActivityData = async (req, res) => {
    try {
        PythonShell.run("./SuspiciousActivity.py", null, (err, results) => {
            if (err) {
                console.error(`Error executing ML script: ${err.message}`);
                return res.status(500).json({ error: "Failed to fetch suspicious activity data" });
            }
            const suspiciousActivityData = JSON.parse(results[0]);
            res.status(200).json(suspiciousActivityData);
        });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const storeSuspiciousActivityData = async (req, res) => {
    try {
        const { detected, activity_type } = req.body;

        const suspiciousActivity = new SuspiciousActivity({
            detected,
            activity_type,
            timestamp: new Date(),
        });

        await suspiciousActivity.save();
        res.status(201).json({ message: "Suspicious activity data stored successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to store suspicious activity data" });
    }
};

module.exports = { getSuspiciousActivityData, storeSuspiciousActivityData };