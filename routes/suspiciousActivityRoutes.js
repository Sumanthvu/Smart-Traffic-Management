const express = require("express");
const {
    getSuspiciousActivityData,
    storeSuspiciousActivityData,
} = require("../controllers/suspiciousActivityController");

const router = express.Router();
router.get("/data", getSuspiciousActivityData);
router.post("/data", storeSuspiciousActivityData);

module.exports = router;