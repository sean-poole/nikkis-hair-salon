const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookings");

// Booking Routes
router.get("/getBooking", bookingsController.getBooking);
router.post("/createBooking", bookingsController.createBooking);
router.delete("/deleteBooking", bookingsController.deleteBooking);

module.exports = router;
