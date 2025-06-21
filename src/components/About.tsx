// import React from 'react';
// import { Users, Award, Clock, Shield, Wrench, Star } from 'lucide-react';

// const About = () => {
//   const stats = [
//     { icon: <Users className="text-blue-600" size={32} />, number: "500+", label: "Happy Customers" },
//     { icon: <Award className="text-green-600" size={32} />, number: "5+", label: "Years Experience" },
//     { icon: <Clock className="text-orange-600" size={32} />, number: "24/7", label: "Support Available" },
//     { icon: <Shield className="text-purple-600" size={32} />, number: "100%", label: "Satisfaction Guarantee" }
//   ];

//   const features = [
//     {
//       icon: <Wrench className="text-blue-600" size={24} />,
//       title: "Expert Technicians",
//       description: "Our certified technicians have years of experience in AC installation, repair, and maintenance."
//     },
//     {
//       icon: <Star className="text-yellow-500" size={24} />,
//       title: "Quality Service",
//       description: "We use only genuine parts and follow industry best practices to ensure long-lasting results."
//     },
//     {
//       icon: <Clock className="text-green-600" size={24} />,
//       title: "Quick Response",
//       description: "Same-day service available. We understand the importance of a comfortable environment."
//     },
//     {
//       icon: <Shield className="text-purple-600" size={24} />,
//       title: "Warranty Included",
//       description: "All our services come with warranty coverage for your peace of mind."
//     }
//   ];

//   return (
//     <section id="about" className="py-16 lg:py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           <div className="space-y-6 lg:space-y-8">
//             <div>
//               <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
//                 About <span className="text-blue-600">GetChill</span>
//               </h2>
//               <p className="text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6">
//                 GetChill is your trusted partner for all AC-related services. With over 5 years of experience in the industry, we have built a reputation for delivering exceptional service quality and customer satisfaction.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Our team of certified technicians is equipped with the latest tools and knowledge to handle all types of AC systems. From routine maintenance to complex repairs and new installations, we ensure your comfort is never compromised.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4 lg:gap-6">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center p-4 lg:p-6 bg-gray-50 rounded-xl">
//                   <div className="flex justify-center mb-3">
//                     {stat.icon}
//                   </div>
//                   <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
//                   <div className="text-gray-600 font-medium text-sm lg:text-base">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-6">
//             <img 
//               src="/ac-repair-team.jpg" 
//               alt="Professional AC Service Team" 
//               className="rounded-2xl shadow-xl w-full h-auto"
//             />
            
//             <div className="grid gap-4">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                   <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
//                     <p className="text-gray-600 text-sm">{feature.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { Users, Award, Clock, Shield, Wrench, Star, Thermometer, Zap } from 'lucide-react'; // Added Thermometer, Zap for more icon options if needed
import { motion } from 'framer-motion'; // Import motion for animations

const About = () => {
  const stats = [
    { icon: <Users className="text-purple-600" size={36} />, number: "500+", label: "Happy Customers" }, // Enhanced icon size and color
    { icon: <Award className="text-blue-600" size={36} />, number: "5+", label: "Years Experience" },     // Consistent blue
    { icon: <Clock className="text-teal-600" size={36} />, number: "24/7", label: "Support Available" },  // Fresh teal
    { icon: <Shield className="text-green-600" size={36} />, number: "100%", label: "Satisfaction Guarantee" } // Vibrant green
  ];

  const features = [
    {
      icon: <Wrench className="text-blue-500" size={28} />, // Slightly larger icon, adjusted color
      title: "Expert Technicians",
      description: "Our certified technicians have years of experience in AC installation, repair, and maintenance, ensuring top-tier service every time."
    },
    {
      icon: <Star className="text-yellow-500" size={28} />, // Keep yellow for star, larger
      title: "Quality Service & Parts",
      description: "We are committed to excellence, using only genuine parts and adhering to strict industry standards for lasting performance."
    },
    {
      icon: <Clock className="text-green-500" size={28} />, // Consistent green, larger
      title: "Quick & Reliable Response",
      description: "Facing an AC issue? We offer same-day service to get your comfort back, because we value your time and comfort."
    },
    {
      icon: <Shield className="text-purple-500" size={28} />, // Consistent purple, larger
      title: "Comprehensive Warranty",
      description: "Enjoy complete peace of mind with our included warranty coverage on all services, guaranteeing our commitment to you."
    }
  ];

  // Framer Motion Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger delay for children elements
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -20 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Subtle background shapes/gradients for visual interest */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-spin-slow-reverse"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-3000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: About Text & Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Animate when 30% in view
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
              className="grid grid-cols-2 gap-6 lg:gap-8" // Increased gap
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' }} // Hover effect
                  className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-md transition-all" // Enhanced card style
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">{stat.number}</div> {/* Stronger numbers */}
                  <div className="text-gray-700 font-medium text-base lg:text-lg">{stat.label}</div> {/* Larger label text */}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image & Features */}
          <div className="space-y-6">
            {/* <motion.img
              src="/" // Using the provided image file
              alt="Professional AC Service Team"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover transition-transform duration-500" // More rounded, deeper shadow
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants}
            /> */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="grid gap-6 lg:gap-8" // Increased gap
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.08)' }} // Hover effect
                  className="flex items-start space-x-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:bg-gray-50 transition-all" // Enhanced card style
                >
                  <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full shadow-sm flex items-center justify-center"> {/* Stylish icon background */}
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{feature.title}</h3> {/* Stronger title */}
                    <p className="text-gray-700 text-base">{feature.description}</p> {/* Clearer description */}
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