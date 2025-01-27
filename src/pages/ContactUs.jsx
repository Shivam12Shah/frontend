import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">We would love to hear from you! Please reach out with any questions or feedback.</p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p>Email: <a href="mailto:info@sportshop.com" className="text-blue-600">info@sportshop.com</a></p>
        <p>Phone: <a href="tel:+15551234567" className="text-blue-600">(555) 123-4567</a></p>
        <p>Address: 123 Sport Street, Athletic City, SP 12345</p>
      </div>
    </div>
  );
};

export default ContactUs;
