// import React from 'react';
// import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
// import "../assets/main.gif"
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-3">
//               <img 
//                 src="/WhatsApp Image 2025-06-14 at 6.48.37 AM (1).jpeg" 
//                 alt="GetChill Logo" 
//                 className="h-12 w-auto"
//               />
//               <span className="text-2xl font-bold">GetChill</span>
//             </div>
//             <p className="text-gray-300 leading-relaxed">
//               Your trusted partner for professional AC services. We keep your space cool and comfortable with expert installation, repair, and maintenance services.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
//                 <Twitter size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
//               <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
//               <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
//               <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Our Services</h3>
//             <ul className="space-y-3 text-gray-300">
//               <li>AC Installation</li>
//               <li>AC Repair & Maintenance</li>
//               <li>AC Cleaning & Servicing</li>
//               <li>Gas Filling & Leak Repair</li>
//               <li>Emergency AC Services</li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <Phone className="text-blue-400" size={20} />
//                 <a href="tel:01169312402" className="text-gray-300 hover:text-white transition-colors">
//                   01169312402
//                 </a>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MessageCircle className="text-green-400" size={20} />
//                 <a href="https://wa.me/918295151180" className="text-gray-300 hover:text-white transition-colors">
//                   +91 8295151180
//                 </a>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="text-purple-400" size={20} />
//                 <a href="mailto:info@getchill.com" className="text-gray-300 hover:text-white transition-colors">
//                   info@getchill.com
//                 </a>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <MapPin className="text-red-400 mt-1" size={20} />
//                 <span className="text-gray-300">
//                   Professional AC Services<br />
//                   Available Citywide
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-center md:text-left">
//               © 2024 GetChill AC Services. All rights reserved.
//             </p>
//             <div className="flex space-x-6 text-gray-400">
//               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react'; // Added ChevronRight for list items

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-950 to-gray-800 text-gray-200 py-16 lg:py-20">
      <div className="container mx-auto px-6"> {/* Increased horizontal padding */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"> {/* Increased gap */}
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4"> {/* Increased space */}
              <img
               src="/WhatsApp Image 2025-06-14 at 6.48.37 AM (1).jpeg" // Updated logo path
                alt="GetChill Logo"
                className="h-14 w-auto rounded-lg shadow-md" // Slightly larger, rounded, and with shadow
              />
              <span className="text-3xl font-extrabold text-white">GetChill</span> {/* Bolder and larger text */}
            </div>
            <p className="text-gray-300 leading-relaxed max-w-xs"> {/* Added max-w for better line length */}
              Your trusted partner for professional AC services in Rohtak, Haryana. We keep your space cool and comfortable with expert installation, repair, and maintenance services.
            </p>
            <div className="flex space-x-4 pt-2"> {/* Added top padding */}
              <a
                href="#" // Replace with actual Facebook link
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook size={24} /> {/* Larger icon */}
              </a>
              <a
                href="#" // Replace with actual Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram size={24} /> {/* Larger icon */}
              </a>
              <a
                href="#" // Replace with actual Twitter link
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-teal-500 transition-all duration-300 transform hover:scale-105"
                aria-label="Twitter"
              >
                <Twitter size={24} /> {/* Larger icon */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-7 text-white">Quick Links</h3> {/* Bolder heading, increased margin */}
            <ul className="space-y-4"> {/* Increased space */}
              <li>
                <a href="#home" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                  <ChevronRight size={18} className="text-purple-400" /> {/* Icon with brand color */}
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
            <h3 className="text-2xl font-bold mb-7 text-white">Our Services</h3> {/* Bolder heading, increased margin */}
            <ul className="space-y-4 text-gray-300"> {/* Increased space */}
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" /> {/* Icon with theme color */}
                <span>AC Installation</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" />
                <span>AC Repair & Maintenance</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" />
                <span>AC Cleaning & Servicing</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" />
                <span>Gas Filling & Leak Repair</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight size={18} className="text-green-400" />
                <span>Emergency AC Services</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-7 text-white">Contact Info</h3> {/* Bolder heading, increased margin */}
            <div className="space-y-5"> {/* Increased space */}
              <div className="flex items-center space-x-4"> {/* Increased space */}
                <Phone className="text-purple-400 flex-shrink-0" size={24} /> {/* Larger icon, brand color */}
                <a href="tel:01169312402" className="text-gray-300 hover:text-white transition-colors text-lg"> {/* Larger text */}
                  01169312402
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MessageCircle className="text-green-400 flex-shrink-0" size={24} /> {/* Larger icon, theme color */}
                <a href="https://wa.me/918295151180" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-lg">
                  +91 8295151180
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400 flex-shrink-0" size={24} /> {/* Larger icon, theme color */}
                <a href="mailto:info@getchill.com" className="text-gray-300 hover:text-white transition-colors text-lg">
                  info@getchill.com
                </a>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-red-400 flex-shrink-0 mt-1" size={24} /> {/* Larger icon, theme color */}
                <span className="text-gray-300 text-lg"> {/* Larger text */}
                  Rohtak, Haryana, India.
                  <br /> 
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Policy Links */}
        <div className="border-t border-gray-700 mt-16 pt-8"> {/* Thicker border, increased margins */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left text-base">
              © {new Date().getFullYear()} GetChill AC Services. All rights reserved.
            </p>
            <div className="flex space-x-8 text-gray-400 text-base"> {/* Increased space */}
              <a href="#" className="hover:text-white transition-colors font-medium">Privacy Policy</a> {/* Bolder on hover */}
              <a href="#" className="hover:text-white transition-colors font-medium">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;