const express = require("express");
const {
  getTrafficData,
  storeTrafficData,
} = require("../controllers/trafficController");

const router = express.Router();
router.get("/data", getTrafficData);
router.post("/data", storeTrafficData);

module.exports = router;
