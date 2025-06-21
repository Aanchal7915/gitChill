

// // import {
// //   Phone,
// //   MessageCircle,
// //   Star,
// //   Shield,
// //   Clock,
// // } from 'lucide-react';
// // import { motion } from 'framer-motion';
// // import mainGif from '../assets/main.gif';

// // const Hero = () => {
// //   return (
// //     <section id="home" className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 lg:py-20">
// //       <div className="container mx-auto px-4">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Text Content */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="space-y-8"
// //           >
// //             <div className="space-y-4">
// //               <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
// //                 Professional <span className="text-blue-600">AC Services</span> You Can Trust
// //               </h1>
// //               <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
// //                 Expert AC installation, repair, and maintenance services. Keep your space cool and comfortable with GetChill's professional technicians.
// //               </p>
// //             </div>

// //             <div className="flex flex-col sm:flex-row gap-4">
// //               <a
// //                 href="tel:01169312402"
// //                 className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-base lg:text-lg font-semibold"
// //               >
// //                 <Phone size={20} />
// //                 <span>Call: 01169312402</span>
// //               </a>
// //               <a
// //                 href="https://wa.me/918295151180"
// //                 className="flex items-center justify-center space-x-3 bg-green-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-base lg:text-lg font-semibold"
// //               >
// //                 <MessageCircle size={20} />
// //                 <span>WhatsApp Us</span>
// //               </a>
// //             </div>

// //             <div className="grid grid-cols-3 gap-6 pt-8">
// //               <motion.div
// //                 whileHover={{ scale: 1.05 }}
// //                 className="text-center"
// //               >
// //                 <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mx-auto mb-3">
// //                   <Star className="text-blue-600" size={24} />
// //                 </div>
// //                 <h3 className="font-semibold text-gray-800 text-sm lg:text-base">5+ Years</h3>
// //                 <p className="text-gray-600 text-xs lg:text-sm">Experience</p>
// //               </motion.div>
// //               <motion.div
// //                 whileHover={{ scale: 1.05 }}
// //                 className="text-center"
// //               >
// //                 <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mx-auto mb-3">
// //                   <Shield className="text-green-600" size={24} />
// //                 </div>
// //                 <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Licensed</h3>
// //                 <p className="text-gray-600 text-xs lg:text-sm">Technicians</p>
// //               </motion.div>
// //               <motion.div
// //                 whileHover={{ scale: 1.05 }}
// //                 className="text-center"
// //               >
// //                 <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mx-auto mb-3">
// //                   <Clock className="text-orange-600" size={24} />
// //                 </div>
// //                 <h3 className="font-semibold text-gray-800 text-sm lg:text-base">24/7</h3>
// //                 <p className="text-gray-600 text-xs lg:text-sm">Support</p>
// //               </motion.div>
// //             </div>
// //           </motion.div>

// //           {/* Image Section */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1, delay: 0.2 }}
// //             className="relative flex justify-center"
// //           >
// //             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 max-w-md mx-auto">
// //               <img
// //                 src={mainGif}
// //                 alt="AC Technician Working"
// //                 className="w-full h-auto rounded-2xl"
// //               />
// //             </div>
// //             <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-blue-200 blur-2xl rounded-full -z-10 opacity-40 animate-pulse"></div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import {
//   Phone,
//   MessageCircle,
//   Award, // Changed Star to Award for a slightly more professional feel for "experience"
//   ShieldCheck, // Changed Shield to ShieldCheck for more clarity
//   Clock,
//   Zap, // Added Zap for a dynamic element
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import mainGif from '../assets/main.gif'; // Assuming this is a high-quality, engaging GIF

// const Hero = () => {
//   // Animation variants for more controlled and appealing animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1, // Stagger children animations
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: 'spring',
//         damping: 10,
//         stiffness: 100,
//       },
//     },
//   };

//   return (
//     <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 py-20 lg:py-28">
//       {/* Background Shapes/Animations for a loving touch */}
//       <motion.div
//         className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
//       ></motion.div>
//       <motion.div
//         className="absolute bottom-10 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
//       ></motion.div>
//       <motion.div
//         className="absolute top-1/4 left-1/4 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 3, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
//       ></motion.div>

//       <div className="container mx-auto px-6 relative z-10"> {/* Ensure content is above animations */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Text Content */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-10"
//           >
//             <motion.div variants={itemVariants} className="space-y-5">
//               <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
//                 Cool Comfort, <span className="text-purple-600">Expert Care</span>, Always.
//               </h1>
//               <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg">
//                 Experience unparalleled AC service with our certified technicians. From rapid repairs to pristine installations, we keep your air fresh and cool.
//               </p>
//             </motion.div>

//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
//               <a
//                 href="tel:+918295151180" // Corrected phone number to a more common format, assuming a placeholder.
//                 className="flex items-center justify-center space-x-3 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg font-semibold whitespace-nowrap"
//               >
//                 <Phone size={22} />
//                 <span>Call Us Today</span>
//               </a>
//               <a
//                 href="https://wa.me/918295151180"
//                 className="flex items-center justify-center space-x-3 bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg font-semibold whitespace-nowrap"
//               >
//                 <MessageCircle size={22} />
//                 <span>Message on WhatsApp</span>
//               </a>
//             </motion.div>

//             <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10">
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.08, rotate: 2 }} // Added a slight rotate on hover
//                 className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center"
//               >
//                 <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 animate-bounce-slow"> {/* Subtle bounce */}
//                   <Award className="text-purple-600" size={28} />
//                 </div>
//                 <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-1">10+ Years</h3>
//                 <p className="text-gray-600 text-sm lg:text-base">Trusted Experience</p>
//               </motion.div>
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.08, rotate: -2 }} // Added a slight rotate on hover
//                 className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center"
//               >
//                 <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-4 animate-spin-slow"> {/* Subtle spin */}
//                   <ShieldCheck className="text-teal-600" size={28} />
//                 </div>
//                 <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-1">Certified</h3>
//                 <p className="text-gray-600 text-sm lg:text-base">Professionals</p>
//               </motion.div>
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.08, translateY: -5 }} // Slight lift on hover
//                 className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center"
//               >
//                 <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4 animate-pulse-slow"> {/* Subtle pulse */}
//                   <Clock className="text-pink-600" size={28} />
//                 </div>
//                 <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-1">Same-Day</h3>
//                 <p className="text-gray-600 text-sm lg:text-base">Service Available</p>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 80, rotate: -5 }}
//             animate={{ opacity: 1, x: 0, rotate: 0 }}
//             transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white max-w-md mx-auto lg:max-w-none transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
//               <img
//                 src={mainGif}
//                 alt="AC Technician Professionally Working"
//                 className="w-full h-auto object-cover rounded-2xl"
//               />
//               {/* Overlay for a subtle frosty effect */}
//               <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-20 pointer-events-none"></div>
//             </div>
//             {/* Dynamic element around the image */}
//             <motion.div
//               className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-spin-slow"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             ></motion.div>
//             <motion.div
//               className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             ></motion.div>
//              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-50 -z-10"></div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Tailwind CSS keyframes for the blob and other animations */}
//       <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         @keyframes bounce-slow {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-8px); }
//         }
//         @keyframes spin-slow {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//         }
//         @keyframes pulse-slow {
//             0%, 100% { opacity: 0.8; }
//             50% { opacity: 1; }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//             animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//             animation-delay: 4s;
//         }
//         .animate-bounce-slow {
//             animation: bounce-slow 2s infinite ease-in-out;
//         }
//         .animate-spin-slow {
//             animation: spin-slow 10s linear infinite;
//         }
//         .animate-pulse-slow {
//             animation: pulse-slow 3s infinite ease-in-out;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
import {
  Phone,
  MessageCircle,
  Award,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';
import mainGif from '../assets/main.gif'; // Assuming this is a high-quality, engaging GIF

const Hero = () => {
  // Animation variants for more controlled and appealing animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animations for text content
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 py-20 lg:py-28">
      {/* Background Shapes/Animations for a loving touch */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section - This section will now appear first on mobile */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end order-first lg:order-last" // order-first for mobile, order-last for desktop
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white max-w-md mx-auto lg:max-w-none">
              <img
                src={mainGif}
                alt="AC Technician Professionally Working"
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Overlay for a subtle frosty effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-20 pointer-events-none"></div>
            </div>
            {/* Dynamic element around the image */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-spin-slow"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>

          {/* Text Content - This section will now appear second on mobile */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 order-last lg:order-first" // order-last for mobile, order-first for desktop
          >
            <motion.div variants={itemVariants} className="space-y-5">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Cool Comfort, <span className="text-purple-600">Expert Care</span>, Always.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg">
                Experience unparalleled AC service with our certified technicians. From rapid repairs to pristine installations, we keep your air fresh and cool.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <a
                href="tel:+918295151180"
                className="flex items-center justify-center space-x-3 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg font-semibold whitespace-nowrap"
              >
                <Phone size={22} />
                <span>Call Us Today</span>
              </a>
              <a
                href="https://wa.me/918295151180"
                className="flex items-center justify-center space-x-3 bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg font-semibold whitespace-nowrap"
              >
                <MessageCircle size={22} />
                <span>Message on WhatsApp</span>
              </a>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 animate-bounce-slow">
                  <Award className="text-purple-600" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-1">10+ Years</h3>
                <p className="text-gray-600 text-sm lg:text-base">Trusted Experience</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-4 animate-spin-slow">
                  <ShieldCheck className="text-teal-600" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-1">Certified</h3>
                <p className="text-gray-600 text-sm lg:text-base">Professionals</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.08, translateY: -5 }}
                className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4 animate-pulse-slow">
                  <Clock className="text-pink-600" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-1">Same-Day</h3>
                <p className="text-gray-600 text-sm lg:text-base">Service Available</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tailwind CSS keyframes for the blob and other animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
        .animate-bounce-slow {
            animation: bounce-slow 2s infinite ease-in-out;
        }
        .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;