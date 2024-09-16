import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const url = import.meta.env.VITE_API_URL;

export default function Admin() {
  const [bookings, setBookings] = useState([]);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${url}/api/bookings/getBooking`);

        if (!response.ok) {
          throw new Error("Network response failed.");
        }

        const data = await response.json();
        console.log(data);
        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    }

    fetchBookings();
  }, []);

  return (
    <div className="main--container admin--container">
      <h2>Admin Dashboard</h2>
      <div className="admin--bookings">
        <table>
          <thead>
            <tr className="table-headings">
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Service</th>
              <th>Stylist</th>
              <th>Completed</th>
            </tr>
          </thead>

          <tbody>
            { bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{ booking.name }</td>
                <td>{ booking.email }</td>
                <td>{ new Date(booking.date).toLocaleDateString() }</td>
                <td>{ booking.service }</td>
                <td>{ booking.stylist }</td>
                <td><button>Confirm</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
