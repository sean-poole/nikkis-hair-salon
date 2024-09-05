import { Link, Outlet } from "react-router-dom";
import Footer from "./partials/Footer";

export default function App() {

  return (
    <div className="root--container">
      <header>
        <h1 className="header--title">Nikki&#39;s Hair Salon</h1>
        <nav>
          <Link to="/">Home</Link>&nbsp;|&nbsp; 
          <Link to="/services">Services</Link>&nbsp;|&nbsp; 
          <Link to="/staff">Staff</Link>&nbsp;|&nbsp; 
          <Link to="/booking">Booking</Link>
        </nav>
      </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
