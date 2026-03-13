import {
  Wrench,
  Settings,
  Thermometer,
  Wind,
  Zap,
  CheckCircle,
  Sun,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
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

  const handleUserSubmitUserInfoModal = (name: string, phoneNu: string, address: string, date?: string, time?: string) => {
    handlePayment(curService, name, phoneNu, address, date, time);
  };

  const handlePayment = async (service: any, name: string, phoneNu: string, address: string, dateOfVisit?: string, preferredTiming?: string) => {
    try {
      const amount = parseInt(service.price.replace('₹', ''));
      const customerDetails = {
        name,
        phoneNu,
        address,
        service_name: service.name,
        amount,
        dateOfVisit,
        preferredTiming
      };

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerDetails),
      });

      const data = await response.json();
      if (data.success) {
        setPayementDetails({ bookingId: data.bookingId, amount, name, serviceName: service.name });
        setPaymentModal(true);
      } else {
        alert(data.message || 'Booking failed.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setCurService(null);
    }
  };

  // Service data with updated images from branch-2
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
      icon: <Settings className="text-cyan-500" size={32} />,
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
        {/* Subtle background shapes */}
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
                variants={cardVariants}
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
      />

      <UserInfoModal
        open={showUserInfoModal}
        setUserInfoModal={(curState: boolean) => setUserInfoModal(curState)}
        setCurService={(curState: boolean) => setCurService(curState)}
        onSubmit={handleUserSubmitUserInfoModal}
      />
    </>
  );
};

export default Services;