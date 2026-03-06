import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send booking to backend
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phoneNu: formData.phone,
          address: '',
          email: formData.email || '',
          service_name: formData.service,
          amount: 0,
        }),
      });
    } catch (_err) {
      // Backend save fail hone pe bhi WhatsApp message jayega
    }

    // WhatsApp pe message bhejna
    const whatsappMessage = `Hi GetChill! New Service Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918295151180?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

          {/* Info Side */}
          <div className="lg:w-1/3 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Professional AC services at your doorstep. Fast, reliable, and affordable.
            </p>

            <div className="grid gap-3 pt-4">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Call Us</p>
                  <a href="tel:01169312402" className="text-sm font-semibold text-gray-800">01169312402</a>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                <div className="bg-green-600 p-2 rounded-lg text-white">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">WhatsApp</p>
                  <a href="https://wa.me/918295151180" className="text-sm font-semibold text-gray-800">+91 8295151180</a>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl">
                <div className="bg-purple-600 p-2 rounded-lg text-white">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Working Hours</p>
                  <p className="text-sm font-semibold text-gray-800">24/7 Support Available</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mt-4">
              <h4 className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">Our Promise</h4>
              <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full"></div> Licensed Technicians</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full"></div> Transparent Pricing</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full"></div> 100% Satisfaction</li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Service</label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm appearance-none"
                    >
                      <option value="">Select Service</option>
                      <option value="Split AC Service">Split AC Service</option>
                      <option value="Window AC Service">Window AC Service</option>
                      <option value="Installation">Installation</option>
                      <option value="Repair / Gas Leak">Repair / Gas Leak</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Additional Message</label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific instructions..."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3.5 rounded-xl hover:bg-blue-700 transition-all font-bold flex items-center justify-center space-x-2 shadow-lg shadow-blue-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send size={18} />
                  <span>Request Booking Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
