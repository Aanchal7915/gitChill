import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  const isLoggedIn = () => {
    const isAdmin = localStorage.getItem("isAdmin");
    const token = localStorage.getItem("token");
    return isAdmin === "true" && !!token;
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -50, scaleY: 0.8, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.3, staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -50, scaleY: 0.8, transition: { duration: 0.2 } }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headerShadowClass = isScrolled ? 'shadow-xl' : 'shadow-lg';

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${headerShadowClass}`}
      ref={headerRef}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src="/WhatsApp Image 2025-06-14 at 6.48.37 AM (1).jpeg"
              alt="GetChill Logo"
              className="h-16 w-auto"
            />
            <span className="text-3xl font-extrabold text-gray-900 whitespace-nowrap">GetChill</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" onClick={handleNavLinkClick} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold text-lg relative group">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#services" onClick={handleNavLinkClick} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold text-lg relative group">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#about" onClick={handleNavLinkClick} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold text-lg relative group">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#contact" onClick={handleNavLinkClick} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold text-lg relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <Link to={`${isLoggedIn() ? "/admin" : "/login"}`} onClick={handleNavLinkClick} className="text-gray-700 hover:text-purple-600 transition-colors font-semibold text-lg relative group">
              {`${isLoggedIn() ? "Admin Panel" : "Login"}`}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <a
              href="tel:01169312402"
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full hover:opacity-95 transition-opacity text-base font-medium shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/918295151180"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-5 py-2.5 rounded-full hover:opacity-95 transition-opacity text-base font-medium shadow-md hover:shadow-lg"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={28} className="text-gray-800" /> : <Menu size={28} className="text-gray-800" />}
          </button>
        </div>

        {/* Mobile Menu (with Framer Motion) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="lg:hidden py-6 border-t border-gray-100 bg-white absolute w-full left-0 shadow-lg"
            >
              <nav className="flex flex-col space-y-4 px-6">
                <motion.a variants={menuItemVariants} href="#home" onClick={handleNavLinkClick} className="text-gray-800 hover:text-purple-600 transition-colors text-lg font-medium py-2">Home</motion.a>
                <motion.a variants={menuItemVariants} href="#services" onClick={handleNavLinkClick} className="text-gray-800 hover:text-purple-600 transition-colors text-lg font-medium py-2">Services</motion.a>
                <motion.a variants={menuItemVariants} href="#about" onClick={handleNavLinkClick} className="text-gray-800 hover:text-purple-600 transition-colors text-lg font-medium py-2">About</motion.a>
                <motion.a variants={menuItemVariants} href="#contact" onClick={handleNavLinkClick} className="text-gray-800 hover:text-purple-600 transition-colors text-lg font-medium py-2">Contact</motion.a>
                <motion.div variants={menuItemVariants}>
                  <Link to={`${isLoggedIn() ? "/admin" : "/login"}`} onClick={handleNavLinkClick} className="text-gray-800 hover:text-purple-600 transition-colors text-lg font-medium py-2 block">
                    {`${isLoggedIn() ? "Admin Panel" : "Login"}`}
                  </Link>
                </motion.div>

                <div className="flex flex-col space-y-3 pt-6 border-t border-gray-100 mt-4">
                  <motion.a
                    variants={menuItemVariants}
                    href="tel:01169312402"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl hover:opacity-95 transition-opacity text-base font-semibold shadow-md"
                  >
                    <Phone size={18} />
                    <span>Call: 01169312402</span>
                  </motion.a>
                  <motion.a
                    variants={menuItemVariants}
                    href="https://wa.me/918295151180"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-3 rounded-xl hover:opacity-95 transition-opacity text-base font-semibold shadow-md"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp: +91 8295151180</span>
                  </motion.a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;