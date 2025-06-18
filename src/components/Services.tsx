import { Wrench, Settings, Thermometer, Wind, Zap, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { initiatePayment } from '../utils/paymentService';
import PaymentSuccessModal from './PaymentSuccessModal';
import UserInfoModal from "./UserInfoModal";


const Services = () => {
  const [curService, setCurService] = useState<any | null>(null);
 
  const [paymentDetail, setPayementDetails] = useState<any | null>(null);
  const [showPaymentModal, setPaymentModal] = useState(false);
  const [showUserInfoModal, setUserInfoModal] = useState(false);
  
  const bookBtnClickHanlder=(service: any)=>{
    setCurService(service)
    setUserInfoModal(true);
  }

  const handleUserSubmitUserInfoModal=(name:string, phoneNu:string, address:string)=>{
    console.log(name, phoneNu, address)
    handlePayment(curService, name, phoneNu, address)
  }

  const handlePayment = async (service: any, name:string, phoneNu:string, address:string) => {
    try {
      const amount = parseInt(service.price.replace('₹', ''));

      // You can replace these with actual customer details from a form or user profile
      const customerDetails = {
        name: name,
        phoneNu: phoneNu,
        address:address
      };
      console.log(amount, service.name, customerDetails);
      await initiatePayment(amount, service.name, customerDetails, setPayementDetails, setPaymentModal);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setCurService(null);
    }
  };

  const services = [
    {
      id: 1,
      name: "Window AC with Jet Spray",
      price: "₹299",
      icon: <Wind className="text-blue-600" size={32} />,
      image: "/ac-cooling-effect.jpg",
      features: ["Deep cleaning", "Jet spray technology", "Filter cleaning", "Performance check"]
    },
    {
      id: 2,
      name: "Split AC Servicing with Spray",
      price: "₹299",
      icon: <Settings className="text-green-600" size={32} />,
      image: "/ac-repair-service.jpg",
      features: ["Indoor & outdoor unit", "Chemical spray", "Coil cleaning", "Gas pressure check"]
    },
    {
      id: 3,
      name: "Window AC Service with Foam",
      price: "₹399",
      icon: <Thermometer className="text-purple-600" size={32} />,
      image: "/ac-maintenance.jpg",
      features: ["Foam cleaning", "Deep sanitization", "Filter replacement", "Cooling efficiency boost"]
    },
    {
      id: 4,
      name: "Split AC Servicing with Foam",
      price: "₹399",
      icon: <Wrench className="text-orange-600" size={32} />,
      image: "/ac-repair-team.jpg",
      features: ["Premium foam wash", "Complete sanitization", "Drain cleaning", "Performance optimization"]
    },
    {
      id: 5,
      name: "AC Installation Split AC",
      price: "₹999",
      icon: <Zap className="text-red-600" size={32} />,
      image: "/ac-technician.jpg",
      features: ["Professional installation", "Copper piping", "Wall mounting", "Testing & commissioning"]
    },
    {
      id: 6,
      name: "AC Installation Window AC",
      price: "₹499",
      icon: <Settings className="text-cyan-600" size={32} />,
      image: "/ac-maintenance.jpg",
      features: ["Window mounting", "Electrical connection", "Proper sealing", "Performance testing"]
    },
    {
      id: 7,
      name: "AC Repairing and Gas Filling",
      price: "₹2399",
      icon: <Wrench className="text-indigo-600" size={32} />,
      image: "/ac-repair-service.jpg",
      features: ["Leak detection", "Gas refilling", "Component repair", "Warranty included"]
    },
    {
      id: 8,
      name: "Visit and Checking Charges",
      price: "₹199",
      icon: <CheckCircle className="text-teal-600" size={32} />,
      image: "/ac-repair-team.jpg",
      features: ["Diagnostic check", "Problem identification", "Cost estimation", "Expert consultation"]
    },
    {
      id: 9,
      name: "AC Deinstallation (Windows & Split)",
      price: "₹499",
      icon: <Settings className="text-gray-600" size={32} />,
      image: "/ac-technician.jpg",
      features: ["Safe removal", "Proper disconnection", "No damage guarantee", "Clean workspace"]
    }
  ];

  return (<>
    <section id="services" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
            Our <span className="text-blue-600">AC Services</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Professional AC services with transparent pricing. From installation to maintenance, we've got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  {service.icon}
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                  {service.price}
                </div>
              </div>


              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.name}</h3>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-3">
                  <button
                    onClick={() => bookBtnClickHanlder(service)}
                    disabled={curService && curService.id === service.id}
                    className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {curService && curService.id === service.id ? 'Processing...' : 'Book'}
                  </button>
                  <a
                    href="https://wa.me/918295151180"
                    className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <PaymentSuccessModal
      open={showPaymentModal}
      onClose={() => setPaymentModal(false)}
      payment={paymentDetail}
      amount={paymentDetail?.amount ?? 0}
      date={`${new Date()}`}
    />

    <UserInfoModal
      open={showUserInfoModal}
      onClose={() => setUserInfoModal(false)}
      onSubmit={handleUserSubmitUserInfoModal}
    />

  </>
  );
};

export default Services;