const Booking = require("../models/BookingSchema");

module.exports = {
  getBooking: async (req, res) => {
    try {
      const bookings = await Booking.find().sort({ date: 1 });
      res.json(bookings);
    } catch (err) {
      console.error("Error: ", err);
      res.status(500).json({ message: "Error fetching bookings." });
    }
  },

  createBooking: async (req, res) => {
    try {
      const { name, email, date, service, stylist } = req.body;

      const newBooking = new Booking({ name, email, date, service, stylist });
      await newBooking.save();

      res.status(200).json(newBooking);
    } catch (err) {
      console.error("Error saving booking: ", err);
      res.status(500).json({ message: "Error creating booking." });
    }
  }
}
