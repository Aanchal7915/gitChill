import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-950 to-gray-800 text-gray-200 py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="/WhatsApp Image 2025-06-14 at 6.48.37 AM (1).jpeg"
                alt="GetChill Logo"
                className="h-14 w-auto rounded-lg shadow-md"
              />
              <span className="text-3xl font-extrabold text-white">GetChill</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              Your trusted partner for professional AC services in Rohtak, Haryana. We keep your space cool and comfortable with expert installation, repair, and maintenance services.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-teal-500 transition-all duration-300 transform hover:scale-105"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-7 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                  <ChevronRight size={18} className="text-purple-400" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                  <ChevronRight size={18} className="text-purple-400" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                  <ChevronRight size={18} className="text-purple-400" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                  <ChevronRight size={18} className="text-purple-400" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-7 text-white">Our Services</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" />
                <span>AC Installation</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" />
                <span>AC Repair &amp; Maintenance</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" />
                <span>AC Cleaning &amp; Servicing</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" />
                <span>Gas Filling &amp; Leak Repair</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" />
                <span>Emergency AC Services</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-7 text-white">Contact Info</h3>
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <Phone className="text-purple-400 flex-shrink-0" size={24} />
                <a href="tel:01169312402" className="text-gray-300 hover:text-white transition-colors text-lg">
                  01169312402
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MessageCircle className="text-green-400 flex-shrink-0" size={24} />
                <a href="https://wa.me/918295151180" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-lg">
                  +91 8295151180
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400 flex-shrink-0" size={24} />
                <a href="mailto:info@getchill.com" className="text-gray-300 hover:text-white transition-colors text-lg">
                  info@getchill.com
                </a>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-red-400 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-300 text-lg">
                  Rohtak, Haryana, India.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Policy Links */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left text-base">
              © {new Date().getFullYear()} GetChill AC Services. All rights reserved.
            </p>
            <div className="flex space-x-8 text-gray-400 text-base">
              <Link to="/privacy-policy" className="hover:text-white transition-colors font-medium">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-white transition-colors font-medium">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;