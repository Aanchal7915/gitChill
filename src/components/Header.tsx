import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = () => {
    const isAdmin = localStorage.getItem("isAdmin");
    const token = localStorage.getItem("token");
    return isAdmin === "true" && !!token;
  }

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img
              src="/WhatsApp Image 2025-06-14 at 6.48.37 AM (1).jpeg"
              alt="GetChill Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-200 hover:text-blue-400 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-200 hover:text-blue-400 transition-colors font-medium">Services</a>
            <a href="#about" className="text-gray-200 hover:text-blue-400 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-200 hover:text-blue-400 transition-colors font-medium">Contact</a>
            <Link to={`${isLoggedIn() ? "/admin" : "/login"}`} className="text-gray-200 hover:text-blue-400 transition-colors font-medium">{`${isLoggedIn() ? "Dashboard" : "Login"}`}</Link>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <a
              href="tel:01169312402"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/918295151180"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex-shrink-0 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-200 hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="text-gray-200 hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="text-gray-200 hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-200 hover:text-blue-400 transition-colors">Contact</a>
              <Link to={`${isLoggedIn() ? "/admin" : "/login"}`} className="text-gray-200 hover:text-blue-400 transition-colors">{`${isLoggedIn() ? "Dashboard" : "Login"}`}</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="tel:01169312402"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone size={18} />
                  <span>Call: 01169312402</span>
                </a>
                <a
                  href="https://wa.me/918295151180"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp: +91 8295151180</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;