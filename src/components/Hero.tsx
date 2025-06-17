
import { Phone, MessageCircle, Star, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Professional <span className="text-blue-600">AC Services</span> You Can Trust
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Expert AC installation, repair, and maintenance services. Keep your space cool and comfortable with GetChill's professional technicians.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:01169312402" 
                className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-base lg:text-lg font-semibold"
              >
                <Phone size={20} />
                <span>Call: 01169312402</span>
              </a>
              <a 
                href="https://wa.me/918295151180" 
                className="flex items-center justify-center space-x-3 bg-green-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-base lg:text-lg font-semibold"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-full mx-auto mb-2 lg:mb-3">
                  <Star className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm lg:text-base">5+ Years</h3>
                <p className="text-gray-600 text-xs lg:text-sm">Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full mx-auto mb-2 lg:mb-3">
                  <Shield className="text-green-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Licensed</h3>
                <p className="text-gray-600 text-xs lg:text-sm">Technicians</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-orange-100 rounded-full mx-auto mb-2 lg:mb-3">
                  <Clock className="text-orange-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm lg:text-base">24/7</h3>
                <p className="text-gray-600 text-xs lg:text-sm">Support</p>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative z-10">
              <img 
                src="/ac-technician.jpg" 
                alt="Professional AC Technician" 
                className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto lg:max-w-full"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;