import React from 'react';
import { Users, Award, Clock, Shield, Wrench, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: <Users className="text-purple-600" size={36} />, number: "500+", label: "Happy Customers" },
    { icon: <Award className="text-blue-600" size={36} />, number: "5+", label: "Years Experience" },
    { icon: <Clock className="text-teal-600" size={36} />, number: "24/7", label: "Support Available" },
    { icon: <Shield className="text-green-600" size={36} />, number: "100%", label: "Satisfaction Guarantee" }
  ];

  const features = [
    {
      icon: <Wrench className="text-blue-500" size={28} />,
      title: "Expert Technicians",
      description: "Our certified technicians have years of experience in AC installation, repair, and maintenance, ensuring top-tier service every time."
    },
    {
      icon: <Star className="text-yellow-500" size={28} />,
      title: "Quality Service & Parts",
      description: "We are committed to excellence, using only genuine parts and adhering to strict industry standards for lasting performance."
    },
    {
      icon: <Clock className="text-green-500" size={28} />,
      title: "Quick & Reliable Response",
      description: "Facing an AC issue? We offer same-day service to get your comfort back, because we value your time and comfort."
    },
    {
      icon: <Shield className="text-purple-500" size={28} />,
      title: "Comprehensive Warranty",
      description: "Enjoy complete peace of mind with our included warranty coverage on all services, guaranteeing our commitment to you."
    }
  ];

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
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-spin-slow-reverse"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-3000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: About Text & Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6 lg:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-4 lg:mb-6">
                About <span className="text-purple-600">GetChill</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 lg:mb-6">
                GetChill is your trusted partner for all AC-related services in Rohtak, Haryana. With over 5 years of dedicated experience in the industry, we have built a reputation for delivering exceptional service quality and unmatched customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of highly certified and experienced technicians is equipped with the latest tools and in-depth knowledge to handle all types of AC systems and brands. From routine maintenance and deep cleaning to complex repairs and new installations, we are committed to ensuring your comfort is never compromised.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 lg:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' }}
                  className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-md transition-all"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium text-base lg:text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Features */}
          <div className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="grid gap-6 lg:gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.08)' }}
                  className="flex items-start space-x-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:bg-gray-50 transition-all"
                >
                  <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full shadow-sm flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-700 text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;