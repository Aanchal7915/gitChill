import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/WhatsApp Image 2025-06-14 at 6.48.37 AM (1).jpeg" 
                alt="GetChill Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold">GetChill</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for professional AC services. We keep your space cool and comfortable with expert installation, repair, and maintenance services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>AC Installation</li>
              <li>AC Repair & Maintenance</li>
              <li>AC Cleaning & Servicing</li>
              <li>Gas Filling & Leak Repair</li>
              <li>Emergency AC Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={20} />
                <a href="tel:01169312402" className="text-gray-300 hover:text-white transition-colors">
                  01169312402
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-green-400" size={20} />
                <a href="https://wa.me/918295151180" className="text-gray-300 hover:text-white transition-colors">
                  +91 8295151180
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-purple-400" size={20} />
                <a href="mailto:info@getchill.com" className="text-gray-300 hover:text-white transition-colors">
                  info@getchill.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-400 mt-1" size={20} />
                <span className="text-gray-300">
                  Professional AC Services<br />
                  Available Citywide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 GetChill AC Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;