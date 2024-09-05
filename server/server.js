const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const bookingRoutes = require("./routes/bookings");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_STRING)
  .then(() => { console.log("Connected successfully.") })
  .catch((err) => { console.error("Error: ", err) });

app.use("/api/bookings", bookingRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on PORT: ", process.env.PORT);
});
