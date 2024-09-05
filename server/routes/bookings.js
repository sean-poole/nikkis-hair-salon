const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookings");

// Booking Routes
router.get("/getBooking", bookingsController.getBooking);
router.post("/createBooking", bookingsController.createBooking);

module.exports = router;
