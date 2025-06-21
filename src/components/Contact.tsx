// import React, { useState } from 'react';
// import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     service: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const whatsappMessage = `Hi GetChill! I'm interested in ${formData.service}. 
// Name: ${formData.name}
// Phone: ${formData.phone}
// Email: ${formData.email}
// Message: ${formData.message}`;
    
//     const whatsappUrl = `https://wa.me/918295151180?text=${encodeURIComponent(whatsappMessage)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
//             Get In <span className="text-blue-600">Touch</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to experience professional AC services? Contact us today for a free consultation and quote.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
//                     <Phone className="text-blue-600" size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Phone</h4>
//                     <a href="tel:01169312402" className="text-blue-600 hover:underline">01169312402</a>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
//                     <MessageCircle className="text-green-600" size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">WhatsApp</h4>
//                     <a href="https://wa.me/918295151180" className="text-green-600 hover:underline">+91 8295151180</a>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
//                     <Mail className="text-purple-600" size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Email</h4>
//                     <a href="mailto:info@getchill.com" className="text-purple-600 hover:underline">info@getchill.com</a>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full">
//                     <Clock className="text-orange-600" size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Working Hours</h4>
//                     <p className="text-gray-600">24/7 Emergency Service Available</p>
//                     <p className="text-gray-600">Mon-Sun: 8:00 AM - 8:00 PM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose GetChill?</h3>
//               <ul className="space-y-3 text-gray-600">
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                   <span>Licensed and insured technicians</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                   <span>Transparent pricing with no hidden costs</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                   <span>Same-day service available</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                   <span>Warranty on all services</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                   <span>100% customer satisfaction guarantee</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Request a Service</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                     placeholder="Your phone number"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
//                   Service Required *
//                 </label>
//                 <select
//                   id="service"
//                   name="service"
//                   required
//                   value={formData.service}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                 >
//                   <option value="">Select a service</option>
//                   <option value="Window AC with Jet Spray">Window AC with Jet Spray</option>
//                   <option value="Split AC Servicing with Spray">Split AC Servicing with Spray</option>
//                   <option value="Window AC Service with Foam">Window AC Service with Foam</option>
//                   <option value="Split AC Servicing with Foam">Split AC Servicing with Foam</option>
//                   <option value="AC Installation Split AC">AC Installation Split AC</option>
//                   <option value="AC Installation Window AC">AC Installation Window AC</option>
//                   <option value="AC Repairing and Gas Filling">AC Repairing and Gas Filling</option>
//                   <option value="Visit and Checking">Visit and Checking</option>
//                   <option value="AC Deinstallation">AC Deinstallation</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Additional Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
//                   placeholder="Tell us more about your requirements..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
//               >
//                 <Send size={20} />
//                 <span>Send via WhatsApp</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'; // MapPin is no longer strictly needed but kept for other uses if any
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello GetChill Team! I'm interested in ${formData.service || 'a service'}.
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Message: ${formData.message || 'No additional message.'}
    
Please get in touch with me.`;
    
    const whatsappUrl = `https://wa.me/918295151180?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Optionally clear form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Subtle background shapes/gradients for visual interest */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-spin-slow-reverse"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-3000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Get In <span className="text-purple-600">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to experience professional AC services? Contact us today for a free consultation and quote. We're here to help!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Contact Information */}
          <div className="space-y-8"> {/* Adjusted space-y to account for removed map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100"
            >
              <motion.h3 variants={itemVariants} className="text-3xl font-extrabold text-gray-900 mb-6">Contact Information</motion.h3>
              
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-center space-x-5">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full shadow-sm flex-shrink-0">
                    <Phone className="text-purple-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Phone</h4>
                    <a href="tel:01169312402" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors font-medium text-base">01169312402</a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center space-x-5">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full shadow-sm flex-shrink-0">
                    <MessageCircle className="text-green-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">WhatsApp</h4>
                    <a href="https://wa.me/918295151180" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 hover:underline transition-colors font-medium text-base">+91 8295151180</a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center space-x-5">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full shadow-sm flex-shrink-0">
                    <Mail className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Email</h4>
                    <a href="mailto:info@getchill.com" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors font-medium text-base">info@getchill.com</a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center space-x-5">
                  <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full shadow-sm flex-shrink-0">
                    <Clock className="text-orange-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Working Hours</h4>
                    <p className="text-gray-700 text-base">24/7 Emergency Service Available</p>
                    <p className="text-gray-700 text-base">Mon-Sun: 8:00 AM - 8:00 PM</p>
                  </div>
                </motion.div>

                {/* Keeping MapPin here for the general location text */}
                <motion.div variants={itemVariants} className="flex items-start space-x-5">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full shadow-sm flex-shrink-0">
                    <MapPin className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Our Location</h4>
                    <p className="text-gray-700 text-base max-w-xs">
                      Rohtak, Haryana, India
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (Detailed address provided upon service booking)
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* "Why Choose GetChill?" Section - Now fills the remaining space */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100"
            >
              <motion.h3 variants={itemVariants} className="text-3xl font-extrabold text-gray-900 mb-6">Why Choose GetChill?</motion.h3>
              <motion.ul variants={containerVariants} className="space-y-4 text-gray-700">
                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                  <CheckCircle size={22} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>**Licensed and Insured Technicians:** Our team comprises highly trained and verified professionals.</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                  <CheckCircle size={22} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>**Transparent Pricing:** No hidden fees, no surprises. You'll know the cost upfront.</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                  <CheckCircle size={22} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>**Same-Day Service Availability:** We prioritize your comfort and aim for quick resolutions.</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                  <CheckCircle size={22} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>**Warranty on All Services:** We stand by our work with comprehensive warranty coverage.</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start space-x-3">
                  <CheckCircle size={22} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>**100% Customer Satisfaction:** Your complete satisfaction is our ultimate goal and promise.</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="space-y-8"> {/* No change needed here */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 flex flex-col h-full"
            >
              <motion.h3 variants={itemVariants} className="text-3xl font-extrabold text-gray-900 mb-6">Request a Service</motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-3">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700 placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-base font-semibold text-gray-700 mb-3">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700 placeholder-gray-400"
                      placeholder="Your 10-digit phone number"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700 placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="service" className="block text-base font-semibold text-gray-700 mb-3">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700 bg-white appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Window AC Jet Spray Clean">Window AC Jet Spray Clean</option>
                    <option value="Split AC Deep Clean & Spray">Split AC Deep Clean & Spray</option>
                    <option value="Window AC Foam Sanitization">Window AC Foam Sanitization</option>
                    <option value="Split AC Premium Foam Wash">Split AC Premium Foam Wash</option>
                    <option value="New Split AC Installation">New Split AC Installation</option>
                    <option value="New Window AC Installation">New Window AC Installation</option>
                    <option value="AC Repair & Gas Refilling">AC Repair & Gas Refilling</option>
                    <option value="Diagnostic Visit & Estimate">Diagnostic Visit & Estimate</option>
                    <option value="AC Deinstallation (All Types)">AC Deinstallation (All Types)</option>
                    <option value="Other / General Inquiry">Other / General Inquiry</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-3">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700 placeholder-gray-400 resize-y"
                    placeholder="Tell us more about your requirements or specific issues you're facing..."
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:opacity-95 font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-3 mt-auto"
                >
                  <Send size={24} />
                  <span>Send Request via WhatsApp</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;