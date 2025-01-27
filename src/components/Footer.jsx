import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SportShop</h3>
            <p className="text-gray-400">
              Your one-stop destination for premium sports gear and equipment.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/clothing" className="text-gray-400 hover:text-white">Clothing</Link></li>
              <li><Link to="/category/footwear" className="text-gray-400 hover:text-white">Footwear</Link></li>
              <li><Link to="/category/equipment" className="text-gray-400 hover:text-white">Equipment</Link></li>
              <li><Link to="/category/accessories" className="text-gray-400 hover:text-white">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="text-gray-400 space-y-2">
              <p>Email: info@sportshop.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Sport Street, Athletic City, SP 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SportShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
