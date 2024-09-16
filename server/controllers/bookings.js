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
  },

  deleteBooking: async (req, res) => {
    const { id } = req.body;
    
    try {
      const deletedBooking = await Booking.findByIdAndDelete(id);

      if (!deletedBooking) {
        return res.status(404).json({ message: "Booking not found." });
      }

      res.status(200).json({ message: "Booking successfully deleted." });
    } catch(err) {
      console.error("Error deleting booking: ", err);
      res.status(500).json({ message: "Error deleting booking." });
    }
  }
}
