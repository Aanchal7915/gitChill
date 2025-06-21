
// // import { Wrench, Settings, Thermometer, Wind, Zap, CheckCircle } from 'lucide-react';
// // import { useState } from 'react';
// // import { initiatePayment } from '../utils/paymentService';
// // import PaymentSuccessModal from './PaymentSuccessModal';
// // import UserInfoModal from "./UserInfoModal";


// // const Services = () => {
// //   const [curService, setCurService] = useState<any | null>(null);
 
// //   const [paymentDetail, setPayementDetails] = useState<any | null>(null);
// //   const [showPaymentModal, setPaymentModal] = useState(false);
// //   const [showUserInfoModal, setUserInfoModal] = useState(false);
  
// //   const bookBtnClickHanlder=(service: any)=>{
// //     setCurService(service)
// //     setUserInfoModal(true);
// //   }

// //   const handleUserSubmitUserInfoModal=(name:string, phoneNu:string, address:string)=>{
// //     // console.log(name, phoneNu, address)
// //     handlePayment(curService, name, phoneNu, address)
// //   }

// //   const handlePayment = async (service: any, name:string, phoneNu:string, address:string) => {
// //     try {
// //       const amount = parseInt(service.price.replace('₹', ''));

// //       // You can replace these with actual customer details from a form or user profile
// //       const customerDetails = {
// //         name: name,
// //         phoneNu: phoneNu,
// //         address:address
// //       };
// //       // console.log(amount, service.name, customerDetails);
// //       await initiatePayment(amount, service.name, customerDetails, setPayementDetails, setPaymentModal);
// //     } catch (error) {
// //       // console.error('Payment failed:', error);
// //       alert('Payment failed. Please try again.');
// //     } finally {
// //       setCurService(null);
// //     }
// //   };

// //   const services = [
// //     {
// //       id: 1,
// //       name: "Window AC with Jet Spray",
// //       price: "₹299",
// //       icon: <Wind className="text-blue-600" size={32} />,
// //       image: "/ac-cooling-effect.jpg",
// //       features: ["Deep cleaning", "Jet spray technology", "Filter cleaning", "Performance check"]
// //     },
// //     {
// //       id: 2,
// //       name: "Split AC Servicing with Spray",
// //       price: "₹299",
// //       icon: <Settings className="text-green-600" size={32} />,
// //       image: "/ac-repair-service.jpg",
// //       features: ["Indoor & outdoor unit", "Chemical spray", "Coil cleaning", "Gas pressure check"]
// //     },
// //     {
// //       id: 3,
// //       name: "Window AC Service with Foam",
// //       price: "₹399",
// //       icon: <Thermometer className="text-purple-600" size={32} />,
// //       image: "/ac-maintenance.jpg",
// //       features: ["Foam cleaning", "Deep sanitization", "Filter replacement", "Cooling efficiency boost"]
// //     },
// //     {
// //       id: 4,
// //       name: "Split AC Servicing with Foam",
// //       price: "₹399",
// //       icon: <Wrench className="text-orange-600" size={32} />,
// //       image: "/ac-repair-team.jpg",
// //       features: ["Premium foam wash", "Complete sanitization", "Drain cleaning", "Performance optimization"]
// //     },
// //     {
// //       id: 5,
// //       name: "AC Installation Split AC",
// //       price: "₹999",
// //       icon: <Zap className="text-red-600" size={32} />,
// //       image: "/ac-technician.jpg",
// //       features: ["Professional installation", "Copper piping", "Wall mounting", "Testing & commissioning"]
// //     },
// //     {
// //       id: 6,
// //       name: "AC Installation Window AC",
// //       price: "₹499",
// //       icon: <Settings className="text-cyan-600" size={32} />,
// //       image: "/ac-maintenance.jpg",
// //       features: ["Window mounting", "Electrical connection", "Proper sealing", "Performance testing"]
// //     },
// //     {
// //       id: 7,
// //       name: "AC Repairing and Gas Filling",
// //       price: "₹2399",
// //       icon: <Wrench className="text-indigo-600" size={32} />,
// //       image: "/ac-repair-service.jpg",
// //       features: ["Leak detection", "Gas refilling", "Component repair", "Warranty included"]
// //     },
// //     {
// //       id: 8,
// //       name: "Visit and Checking Charges",
// //       price: "₹199",
// //       icon: <CheckCircle className="text-teal-600" size={32} />,
// //       image: "/ac-repair-team.jpg",
// //       features: ["Diagnostic check", "Problem identification", "Cost estimation", "Expert consultation"]
// //     },
// //     {
// //       id: 9,
// //       name: "AC Deinstallation (Windows & Split)",
// //       price: "₹499",
// //       icon: <Settings className="text-gray-600" size={32} />,
// //       image: "/ac-technician.jpg",
// //       features: ["Safe removal", "Proper disconnection", "No damage guarantee", "Clean workspace"]
// //     }
// //   ];

// //   return (<>
// //     <section id="services" className="py-16 lg:py-20 bg-gray-50">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-12 lg:mb-16">
// //           <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
// //             Our <span className="text-blue-600">AC Services</span>
// //           </h2>
// //           <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
// //             Professional AC services with transparent pricing. From installation to maintenance, we've got you covered.
// //           </p>
// //         </div>

// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
// //           {services.map((service) => (
// //             <div
// //               key={service.id}
// //               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
// //             >
// //               <div className="relative overflow-hidden">
// //                 <img
// //                   src={service.image}
// //                   alt={service.name}
// //                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
// //                 />
// //                 <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
// //                   {service.icon}
// //                 </div>
// //                 <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg">
// //                   {service.price}
// //                 </div>
// //               </div>


// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">{service.name}</h3>

// //                 <ul className="space-y-2 mb-6">
// //                   {service.features.map((feature, index) => (
// //                     <li key={index} className="flex items-center space-x-2 text-gray-600">
// //                       <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
// //                       <span className="text-sm">{feature}</span>
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 <div className="flex space-x-3">
// //                   <button
// //                     onClick={() => bookBtnClickHanlder(service)}
// //                     disabled={curService && curService.id === service.id}
// //                     className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
// //                   >
// //                     {curService && curService.id === service.id ? 'Processing...' : 'Book'}
// //                   </button>
// //                   <a
// //                     href="https://wa.me/918295151180"
// //                     className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
// //                   >
// //                     WhatsApp
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>

// //     <PaymentSuccessModal
// //       open={showPaymentModal}
// //       onClose={() => setPaymentModal(false)}
// //       payment={paymentDetail}
// //       amount={paymentDetail?.amount ?? 0}
// //       date={`${new Date()}`}
// //     />

// //     <UserInfoModal
// //       open={showUserInfoModal}
// //       setUserInfoModal={(curState:boolean)=>setUserInfoModal(curState)}
// //       setCurService={(curState:boolean)=>setCurService(curState)}
// //       onSubmit={handleUserSubmitUserInfoModal}
// //     />

// //   </>
// //   );
// // };

// // export default Services;

// import {
//   Wrench,
//   Settings,
//   Thermometer,
//   Wind,
//   Zap,
//   CheckCircle,
// } from 'lucide-react';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { initiatePayment } from '../utils/paymentService';
// import PaymentSuccessModal from './PaymentSuccessModal';
// import UserInfoModal from './UserInfoModal';

// const Services = () => {
//   const [curService, setCurService] = useState<any | null>(null);
//   const [paymentDetail, setPayementDetails] = useState<any | null>(null);
//   const [showPaymentModal, setPaymentModal] = useState(false);
//   const [showUserInfoModal, setUserInfoModal] = useState(false);

//   const bookBtnClickHanlder = (service: any) => {
//     setCurService(service);
//     setUserInfoModal(true);
//   };

//   const handleUserSubmitUserInfoModal = (
//     name: string,
//     phoneNu: string,
//     address: string
//   ) => {
//     handlePayment(curService, name, phoneNu, address);
//   };

//   const handlePayment = async (
//     service: any,
//     name: string,
//     phoneNu: string,
//     address: string
//   ) => {
//     try {
//       const amount = parseInt(service.price.replace('₹', ''));
//       const customerDetails = { name, phoneNu, address };
//       await initiatePayment(
//         amount,
//         service.name,
//         customerDetails,
//         setPayementDetails,
//         setPaymentModal
//       );
//     } catch (error) {
//       alert('Payment failed. Please try again.');
//     } finally {
//       setCurService(null);
//     }
//   };

//   const services = [
//     {
//       id: 1,
//       name: 'Window AC with Jet Spray',
//       price: '₹299',
//       icon: <Wind className="text-blue-600" size={32} />,
//       image: '/a1.png',
//       features: ['Deep cleaning', 'Jet spray technology', 'Filter cleaning', 'Performance check'],
//     },
//     {
//       id: 2,
//       name: 'Split AC Servicing with Spray',
//       price: '₹299',
//       icon: <Settings className="text-green-600" size={32} />,
//       image: '/a2.png',
//       features: ['Indoor & outdoor unit', 'Chemical spray', 'Coil cleaning', 'Gas pressure check'],
//     },
//     {
//       id: 3,
//       name: 'Window AC Service with Foam',
//       price: '₹399',
//       icon: <Thermometer className="text-purple-600" size={32} />,
//       image: '/a3.png',
//       features: ['Foam cleaning', 'Deep sanitization', 'Filter replacement', 'Cooling efficiency boost'],
//     },
//     {
//       id: 4,
//       name: 'Split AC Servicing with Foam',
//       price: '₹399',
//       icon: <Wrench className="text-orange-600" size={32} />,
//       image: '/a4.png',
//       features: ['Premium foam wash', 'Complete sanitization', 'Drain cleaning', 'Performance optimization'],
//     },
//     {
//       id: 5,
//       name: 'AC Installation Split AC',
//       price: '₹999',
//       icon: <Zap className="text-red-600" size={32} />,
//       image: '/a5.png',
//       features: ['Professional installation', 'Copper piping', 'Wall mounting', 'Testing & commissioning'],
//     },
//     {
//       id: 6,
//       name: 'AC Installation Window AC',
//       price: '₹499',
//       icon: <Settings className="text-cyan-600" size={32} />,
//       image: '/a6.png',
//       features: ['Window mounting', 'Electrical connection', 'Proper sealing', 'Performance testing'],
//     },
//     {
//       id: 7,
//       name: 'AC Repairing and Gas Filling',
//       price: '₹2399',
//       icon: <Wrench className="text-indigo-600" size={32} />,
//       image: '/a7.png',
//       features: ['Leak detection', 'Gas refilling', 'Component repair', 'Warranty included'],
//     },
//     {
//       id: 8,
//       name: 'Visit and Checking Charges',
//       price: '₹199',
//       icon: <CheckCircle className="text-teal-600" size={32} />,
//       image: '/a8.png',
//       features: ['Diagnostic check', 'Problem identification', 'Cost estimation', 'Expert consultation'],
//     },
//     {
//       id: 9,
//       name: 'AC Deinstallation (Windows & Split)',
//       price: '₹499',
//       icon: <Settings className="text-gray-600" size={32} />,
//       image: '/a9.png',
//       features: ['Safe removal', 'Proper disconnection', 'No damage guarantee', 'Clean workspace'],
//     },
//   ];

//   return (
//     <>
//       <section id="services" className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//               Our <span className="text-blue-600">AC Services</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Reliable & affordable AC care—from installations to gas refills—at your fingertips.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 whileHover={{ scale: 1.03 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.name}
//                     loading="lazy"
//                     className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
//                     {service.icon}
//                   </div>
//                   <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 rounded-full font-bold text-sm shadow-lg">
//                     {service.price}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.name}</h3>
//                   <ul className="space-y-2 text-gray-600 text-sm mb-5">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2">
//                         <CheckCircle size={16} className="text-green-500" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => bookBtnClickHanlder(service)}
//                       disabled={curService && curService.id === service.id}
//                       className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 rounded-lg hover:opacity-90 font-medium text-sm disabled:opacity-50"
//                     >
//                       {curService && curService.id === service.id ? 'Processing...' : 'Book'}
//                     </button>
//                     <a
//                       href="https://wa.me/918295151180"
//                       target="_blank"
//                       className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-2.5 rounded-lg hover:opacity-90 font-medium text-sm text-center"
//                     >
//                       WhatsApp
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <PaymentSuccessModal
//         open={showPaymentModal}
//         onClose={() => setPaymentModal(false)}
//         payment={paymentDetail}
//         amount={paymentDetail?.amount ?? 0}
//         date={`${new Date()}`}
//       />

//       <UserInfoModal
//         open={showUserInfoModal}
//         setUserInfoModal={(curState: boolean) => setUserInfoModal(curState)}
//         setCurService={(curState: boolean) => setCurService(curState)}
//         onSubmit={handleUserSubmitUserInfoModal}
//       />
//     </>
//   );
// };

// export default Services;

import {
  Wrench,
  Settings,
  Thermometer,
  Wind,
  Zap,
  CheckCircle,
  Sun,
  Fan,
  MessageCircle // Import MessageCircle as well for the WhatsApp button
} from 'lucide-react';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion'; // <-- Import Variants here
import { initiatePayment } from '../utils/paymentService';
import PaymentSuccessModal from './PaymentSuccessModal';
import UserInfoModal from './UserInfoModal';

const Services = () => {
  const [curService, setCurService] = useState<any | null>(null);
  const [paymentDetail, setPayementDetails] = useState<any | null>(null);
  const [showPaymentModal, setPaymentModal] = useState(false);
  const [showUserInfoModal, setUserInfoModal] = useState(false);

  const bookBtnClickHanlder = (service: any) => {
    setCurService(service);
    setUserInfoModal(true);
  };

  const handleUserSubmitUserInfoModal = (
    name: string,
    phoneNu: string,
    address: string
  ) => {
    handlePayment(curService, name, phoneNu, address);
  };

  const handlePayment = async (
    service: any,
    name: string,
    phoneNu: string,
    address: string
  ) => {
    try {
      const amount = parseInt(service.price.replace('₹', ''));
      const customerDetails = { name, phoneNu, address };
      await initiatePayment(
        amount,
        service.name,
        customerDetails,
        setPayementDetails,
        setPaymentModal
      );
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setCurService(null);
    }
  };

  // Define service data with updated icons and improved image paths if available
  const services = [
    {
      id: 1,
      name: 'Window AC Jet Spray Clean',
      price: '₹299',
      icon: <Wind className="text-blue-500" size={32} />,
      image: '/a1.png',
      features: ['Thorough deep cleaning', 'High-pressure jet wash', 'Dust filter cleaning', 'Comprehensive performance check'],
    },
    {
      id: 2,
      name: 'Split AC Deep Clean & Spray',
      price: '₹299',
      icon: <Settings className="text-teal-500" size={32} />,
      image: '/a2.png',
      features: ['Indoor & outdoor unit service', 'Anti-bacterial chemical spray', 'Coil & fin deep cleaning', 'Refrigerant gas pressure check'],
    },
    {
      id: 3,
      name: 'Window AC Foam Sanitization',
      price: '₹399',
      icon: <Thermometer className="text-purple-500" size={32} />,
      image: '/a3.png',
      features: ['Advanced foam wash technology', 'Complete odor & germ sanitization', 'Air filter replacement (if needed)', 'Enhanced cooling efficiency'],
    },
    {
      id: 4,
      name: 'Split AC Premium Foam Wash',
      price: '₹399',
      icon: <Wrench className="text-pink-500" size={32} />,
      image: '/a4.png',
      features: ['Luxurious foam internal wash', 'Total sterilization & disinfection', 'Drain pipe & tray cleaning', 'System performance optimization'],
    },
    {
      id: 5,
      name: 'New Split AC Installation',
      price: '₹999',
      icon: <Zap className="text-indigo-500" size={32} />,
      image: '/a5.png',
      features: ['Professional unit mounting', 'Vacuum pump copper piping', 'Secure electrical connections', 'Comprehensive testing & setup'],
    },
    {
      id: 6,
      name: 'New Window AC Installation',
      price: '₹499',
      icon: <Settings className="text-cyan-500" size={32} />, // Changed icon to Settings, Fan was good but Settings is also suitable for installation
      image: '/a6.png',
      features: ['Secure window mounting', 'Safe power supply connection', 'Weather-proof sealing & insulation', 'Operational performance verification'],
    },
    {
      id: 7,
      name: 'AC Repair & Gas Refilling',
      price: '₹2399',
      icon: <Wrench className="text-orange-500" size={32} />,
      image: '/a7.png',
      features: ['Precision leak detection', 'Eco-friendly gas top-up/refill', 'Faulty component repair/replacement', '30-day service warranty included'],
    },
    {
      id: 8,
      name: 'Diagnostic Visit & Estimate',
      price: '₹199',
      icon: <Sun className="text-green-500" size={32} />,
      image: '/a8.png',
      features: ['In-depth diagnostic check', 'Accurate problem identification', 'Transparent cost estimation', 'Expert consultation'],
    },
    {
      id: 9,
      name: 'AC Deinstallation (All Types)',
      price: '₹499',
      icon: <Settings className="text-gray-500" size={32} />,
      image: '/a9.png',
      features: ['Careful unit removal & packing', 'Proper disconnection of lines', 'Zero damage guarantee for property', 'Thorough cleanup post-service'],
    },
  ];

  // Animation variants for individual service cards
  // Explicitly type cardVariants as Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <section id="services" className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Subtle background shapes/gradients for visual interest, similar to Hero */}
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-spin-slow-reverse"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-3000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-purple-600">Premium Services</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Experience unparalleled AC care with our diverse range of services, designed for your ultimate comfort and peace of mind.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants} // No red line here after type fix
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.03, boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden group flex flex-col"
              >
                <div className="relative overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-5 right-5 bg-white rounded-full p-3 shadow-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-5 left-5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2 rounded-full font-bold text-lg shadow-xl animate-pulse-slowest">
                    {service.price}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.name}</h3>

                  <ul className="space-y-2 text-gray-700 text-base mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 pt-4 border-t border-gray-100 mt-auto">
                    <button
                      onClick={() => bookBtnClickHanlder(service)}
                      disabled={curService && curService.id === service.id}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl hover:opacity-95 font-semibold text-base shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {curService && curService.id === service.id ? 'Processing...' : 'Book Service'}
                    </button>
                    <a
                      href="https://wa.me/918295151180"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-teal-500 to-green-500 text-white py-3 rounded-xl hover:opacity-95 font-semibold text-base text-center shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                    >
                      WhatsApp <MessageCircle size={20} className="ml-2"/>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PaymentSuccessModal
        open={showPaymentModal}
        onClose={() => setPaymentModal(false)}
        payment={paymentDetail}
        amount={paymentDetail?.amount ?? 0}
        date={`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`}
      />

      <UserInfoModal
        open={showUserInfoModal}
        setUserInfoModal={(curState: boolean) => setUserInfoModal(curState)}
        setCurService={(curState: boolean) => setCurService(curState)}
        onSubmit={handleUserSubmitUserInfoModal}
      />

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
        @keyframes spin-slow-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }
        @keyframes pulse-slowest {
            0%, 100% { opacity: 0.9; }
            50% { opacity: 1; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-3000 {
            animation-delay: 3s;
        }
        .animate-spin-slow-reverse {
            animation: spin-slow-reverse 15s linear infinite;
        }
        .animate-pulse-slowest {
            animation: pulse-slowest 4s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Services;