import { useState, useEffect } from "react";

const url = import.meta.env.VITE_API_URL;

export default function Admin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${url}/api/bookings/getBooking`);

        if (!response.ok) {
          throw new Error("Network response failed.");
        }

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    }

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        { bookings.map((booking) => (
          <li key={booking._id}>
            { booking.name } - { booking.email } - { new Date(booking.date).toLocaleDateString() } - { booking.service } - { booking.stylist }
          </li>
        )) }
      </ul>
    </div>
  );
}
