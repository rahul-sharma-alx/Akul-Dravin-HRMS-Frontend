import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/hrms.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "CA Partner", path: "/ca-partner" },
    { name: "Hire", path: "/hire" },
    // { name: "About", path: "/about" },
    // { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-light shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Akul Dravin HRMS" className="h-12 w-auto" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-secondary font-semibold"
                    : "text-gray-700 hover:text-secondary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Sign In Button */}
          <NavLink
            to="/welcome"
            className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
          >
            Sign In
          </NavLink>

          {/* Free Trial Button */}
          <NavLink
            to="/trial"
            className="bg-secondary text-dark px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
          >
            Free Trial
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-light shadow-lg px-4 py-4 space-y-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "text-secondary font-semibold"
                    : "text-gray-800 hover:text-secondary"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Buttons */}
          <NavLink
            to="/welcome"
            className="block border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Sign In
          </NavLink>

          <NavLink
            to="/trial"
            className="block bg-secondary text-dark px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Free Trial
          </NavLink>
        </div>
      )}
    </nav>
  );
}
