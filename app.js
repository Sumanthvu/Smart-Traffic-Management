require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { spawn } = require("child_process");
const trafficRoutes = require("./routes/trafficRoutes");

const app = express();
const PORT=5000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/traffic", trafficRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
