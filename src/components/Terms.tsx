import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white text-black py-20 px-6 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="mb-4">These terms and conditions outline the rules and regulations for the use of GetChill AC Services's Website, located at https://getchilll.in.</p>
          <p className="mb-4">By accessing this website we assume you accept these terms and conditions. Do not continue to use GetChill if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
          <p className="mb-4">We employ the use of cookies. By accessing GetChill, you agreed to use cookies in agreement with the GetChill AC Services's Privacy Policy.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">License</h2>
          <p className="mb-4">Unless otherwise stated, GetChill AC Services and/or its licensors own the intellectual property rights for all material on GetChill. All intellectual property rights are reserved. You may access this from GetChill for your own personal use subjected to restrictions set in these terms and conditions.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
          <p className="mb-4">Our services are subject to availability. Prices for our services are subject to change without notice. We reserve the right at any time to modify or discontinue the Service without notice at any time.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
          <p className="mb-4">For any questions regarding our Terms and Conditions, please contact us at: info@getchill.com.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
