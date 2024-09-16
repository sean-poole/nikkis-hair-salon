import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const url = import.meta.env.VITE_API_URL;

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

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

  async function handleConfirm(id, name) {
    const isConfirmed = confirm(`Are you sure you want to mark the appointment for ${name} as completed?`);

    if (isConfirmed && !loading) {
      setLoading(true);
      try {
        const response = await fetch(`${url}/api/bookings/deleteBooking`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id })
        });

        if (!response.ok) {
          throw new Error("Network response failed.");
        }

        alert(`The appointment for ${name} has successfully been removed.`);

        setBookings((prevBookings) => 
          prevBookings.filter((booking) => booking._id !== id)
        );
        setLoading(false);
      } catch(err) {
        alert(`An error occurred while removing the appointment for ${name}. Please try again.`);
        console.error("Error deleting completed appointment: ", err);
        setLoading(false);
      }
    }
  }

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
                <td>{ booking.stylist ? booking.stylist : "Not specified" }</td>
                <td className="text-center">
                  <button 
                    className="delete-btn"
                    onClick={() => handleConfirm(booking._id, booking.name)}
                    disabled={loading}
                  >
                    { loading ? "Processing..." : "Confirm" }
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
