import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const url = import.meta.env.VITE_API_URL;

const services = [
  "Haircut",
  "Hair Coloring",
  "Deep Conditioning",
  "Bridal Styling",
  "Event Styling"
];

const stylists = [
  "Nikki Williams",
  "Michelle Brown",
  "Devin Adams",
  "Denise Lewis"
];

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [service, setService] = useState("");
  const [stylist, setStylist] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit= async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/api/bookings/createBooking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, date, service, stylist })
      });
  
      if (response.ok) {
        alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful.`);
        navigate("/");
      } else {
        alert(`Booking failed. Please try again.`);
      }
    } catch (err) {
      console.error("Failed to create booking: ", err);
    }

  }

  return (
    <div className="main--container booking--container">
      <div className="booking--contact--container">
        <div className="container left--container">
          <p className="text-center">Please fill out the form to schedule an appointment.</p>
          <div className="booking--contact-info">
            <h3 className="text-decoration-underline">Contact Information</h3>
            <p>(123) 456 - 7890</p>
            <a href="#">tester@example.com</a>
            <a href="#">instagram.com/salonexample</a>
          </div>
          <div className="booking--contact-info">
            <h3 className="text-decoration-underline">Location</h3>
            <p>4000 Avenue Rd, Suite A2</p>
            <p>Los Angeles, CA 92589</p>
          </div>
          <div className="booking--contact-info">
            <h3 className="text-decoration-underline">Store Hours</h3>
            <div className="text-end m-auto">
              <p>Sunday: 9am - 5pm</p>
              <p>Monday: 9am - 7pm</p>
              <p>Tuesday: 9am - 7pm</p>
              <p>Wednesday: 9am - 7pm</p>
              <p>Thursday: 9am - 7pm</p>
              <p>Friday: 9am - 7pm</p>
              <p>Saturday: 9am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="booking--contact--container">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email: </label>
            <input 
              type="text" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="date">Date: </label>
            <Calendar 
              id="date"
              className="w-100"
              calendarType="gregory"
              minDate={new Date()}
              onChange={setDate}
              value={date}
              required
            />
            <p>Selected Date: { date.toLocaleDateString() }</p>
          </div>

          <div className="form-field">
            <label htmlFor="service">Services: </label>
            <select 
              name="" 
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="" disabled>-- Select a service --</option>
              { services.map((service, i) => <option key={i} value={service}>{ service }</option>) }
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="stylist">Stylist: </label>
            <select 
              name="" 
              id="stylist"
              value={stylist}
              onChange={(e) => setStylist(e.target.value)}
            >
              <option value="">-- Select a stylist (optional) --</option>
              { stylists.map((stylist, i) => <option key={i} value={stylist}>{ stylist }</option>) }
            </select>
          </div>

          <button className="submit-btn" type="submit">Book</button>
        </form>
      </div>
    </div>
  );
}
