import {
  Phone,
  MessageCircle,
  Award,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';
import mainGif from '../assets/main.gif';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      {/* Background Shapes/Animations */}
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
          {/* Image Section - first on mobile */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white max-w-md mx-auto lg:max-w-none">
              <img
                src={mainGif}
                alt="AC Technician Professionally Working"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-20 pointer-events-none"></div>
            </div>
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

          {/* Text Content - second on mobile */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 order-last lg:order-first"
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
                href="tel:01169312402"
                className="flex items-center justify-center space-x-3 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg font-semibold whitespace-nowrap"
              >
                <Phone size={22} />
                <span>Call: 01169312402</span>
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
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                  <Award className="text-purple-600" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-1">5+ Years</h3>
                <p className="text-gray-600 text-sm lg:text-base">Trusted Experience</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-4">
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
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4">
                  <Clock className="text-pink-600" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg lg:text-xl mb-1">Same-Day</h3>
                <p className="text-gray-600 text-sm lg:text-base">Service Available</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
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