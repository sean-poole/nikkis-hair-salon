const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// require("dotenv").config({ path: "./config/.env" });
require("dotenv").config();

const bookingRoutes = require("./routes/bookings");

const app = express();
app.use(cors({
  origin: ["https://nikkis-hair-salon.vercel.app", `http://localhost:${process.env.CLIENT_PORT}`],
  methods: "GET,POST,DELETE",
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.DB_STRING)
  .then(() => { console.log("Connected successfully.") })
  .catch((err) => { console.error("Error: ", err) });

app.get("/", (req, res) => {
  res.json("Salon API is running.");
});

app.use("/api/bookings", bookingRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on PORT: ", process.env.PORT);
});
