// Import necessary components from React Router
import { NavLink, Outlet } from "react-router-dom";

// Root layout component that wraps all pages
export default function Root() {
  return (
    <div className="container">
      
      {/* Navigation Bar */}
      <nav role="navigation">
        <ul className="nav mb-3 mt-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">shop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link">shopping bag</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ingredients" className="nav-link">ingredients</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/quiz" className="nav-link">what's my skin type?</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">about us</NavLink>
          </li>
        </ul>
      </nav>

      {/* Renders the current page's content */}
      <Outlet />

      {/* Site Footer */}
      <footer
        className="text-center py-3 mt-5"
        style={{
          backgroundColor: "#fffaf5",
          borderTop: "1px solid #e4dcd2"
        }}
      >
        <div className="fw-semibold text-brown">terraglow</div>
        <small className="text-brown">crafted for your skin & the planet</small><br />
        <small className="text-brown">hello@terraglowbeauty.com</small>
      </footer>
    </div>
  );
}
