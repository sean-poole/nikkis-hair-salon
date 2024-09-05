import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--col">
        <Link to="/Admin" className="footer--link opacity-75 text-decoration-none">Admin (Login required)</Link>
      </div>
      <div className="footer--col">
        <p className="mb-0 opacity-75">© Sean Poole. All rights reserved.</p>
      </div>
      <div className="footer--col">
        <a href="#" className="footer--link">Instagram</a>
        <a href="#" className="footer--link">Email</a>
      </div>
    </div>
  )
}
