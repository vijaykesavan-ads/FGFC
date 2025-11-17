import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/fgfclogo.png";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "RESIDENTIAL", path: "/residential" },
    { name: "GRASSROOTS", path: "/grassroots" },
    { name: "PROGRAM", path: "/program" },
    { name: "ABOUT", path: "/about" },
    { name: "TEAM", path: "/team" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="bg-[#10487B] shadow-md py-5 px-8 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        <h1 className="text-2xl font-bold text-white">First Goal FC</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition ${
                isActive
                  ? "text-yellow-300 pb-1"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            // Close icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m0 6H4"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#10487B] flex flex-col items-center py-4 md:hidden shadow-md z-10">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)} // close menu when clicked
                className={`block w-full text-center py-2 font-medium transition ${
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
