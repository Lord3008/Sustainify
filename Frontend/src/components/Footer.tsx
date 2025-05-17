
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-sustainify-green mb-4">
              Sustainify<span className="text-sustainify-brown">:</span> <span className="text-sustainify-light-green">Krushi</span> & <span className="text-sustainify-light-brown">City</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Bridging rural and urban communities for a sustainable future.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-sustainify-green">Home</Link></li>
              <li><Link to="/#features" className="text-gray-600 hover:text-sustainify-green">Features</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-600 hover:text-sustainify-green">How It Works</Link></li>
              <li><Link to="/#testimonials" className="text-gray-600 hover:text-sustainify-green">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-sustainify-green">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-sustainify-green">Resource Center</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-sustainify-green">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-sustainify-green">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <address className="not-italic text-gray-600 space-y-2">
              <p>Email: info@sustainify.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Tech Park, Bengaluru</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sustainify: Krushi & City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
