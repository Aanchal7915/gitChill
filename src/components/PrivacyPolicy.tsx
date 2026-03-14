import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white text-black py-20 px-6 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="mb-4">Welcome to GetChill AC Services. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Important information and who we are</h2>
          <p className="mb-4">GetChill is the controller and responsible for your personal data.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. The data we collect about you</h2>
          <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Identity Data includes first name, last name.</li>
            <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
            <li>Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. How we use your personal data</h2>
          <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact details</h2>
          <p className="mb-4">If you have any questions about this privacy policy or our privacy practices, please contact us at info@getchill.com or call us at 01169312402.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
