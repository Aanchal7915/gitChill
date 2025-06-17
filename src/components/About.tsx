import React from 'react';
import { Users, Award, Clock, Shield, Wrench, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="text-blue-600" size={32} />, number: "500+", label: "Happy Customers" },
    { icon: <Award className="text-green-600" size={32} />, number: "5+", label: "Years Experience" },
    { icon: <Clock className="text-orange-600" size={32} />, number: "24/7", label: "Support Available" },
    { icon: <Shield className="text-purple-600" size={32} />, number: "100%", label: "Satisfaction Guarantee" }
  ];

  const features = [
    {
      icon: <Wrench className="text-blue-600" size={24} />,
      title: "Expert Technicians",
      description: "Our certified technicians have years of experience in AC installation, repair, and maintenance."
    },
    {
      icon: <Star className="text-yellow-500" size={24} />,
      title: "Quality Service",
      description: "We use only genuine parts and follow industry best practices to ensure long-lasting results."
    },
    {
      icon: <Clock className="text-green-600" size={24} />,
      title: "Quick Response",
      description: "Same-day service available. We understand the importance of a comfortable environment."
    },
    {
      icon: <Shield className="text-purple-600" size={24} />,
      title: "Warranty Included",
      description: "All our services come with warranty coverage for your peace of mind."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
                About <span className="text-blue-600">GetChill</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6">
                GetChill is your trusted partner for all AC-related services. With over 5 years of experience in the industry, we have built a reputation for delivering exceptional service quality and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified technicians is equipped with the latest tools and knowledge to handle all types of AC systems. From routine maintenance to complex repairs and new installations, we ensure your comfort is never compromised.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 lg:p-6 bg-gray-50 rounded-xl">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="/ac-repair-team.jpg" 
              alt="Professional AC Service Team" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;