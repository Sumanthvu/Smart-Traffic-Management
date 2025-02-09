const express = require("express");
const trafficRoutes = require("./routes/trafficRoutes");
const suspiciousActivityRoutes = require("./routes/suspiciousActivityRoutes"); 
const connectDB = require("./database/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/traffic", trafficRoutes);

app.use("/suspicious-activity", suspiciousActivityRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
