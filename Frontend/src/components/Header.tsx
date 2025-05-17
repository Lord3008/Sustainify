
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-sustainify-green">
            Sustainify<span className="text-sustainify-brown">:</span> <span className="text-sustainify-light-green">Krushi</span> & <span className="text-sustainify-light-brown">City</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-sustainify-green font-medium transition-colors">Home</Link>
          <Link to="/#features" className="text-gray-700 hover:text-sustainify-green font-medium transition-colors">Features</Link>
          <Link to="/#how-it-works" className="text-gray-700 hover:text-sustainify-green font-medium transition-colors">How It Works</Link>
          <Link to="/#testimonials" className="text-gray-700 hover:text-sustainify-green font-medium transition-colors">Testimonials</Link>
          <Button asChild variant="default" className="bg-sustainify-green hover:bg-sustainify-green/90 text-white">
            <Link to="/get-started">Get Started</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-6 space-y-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-sustainify-green font-medium transition-colors py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/#features" className="text-gray-700 hover:text-sustainify-green font-medium transition-colors py-2" onClick={toggleMenu}>Features</Link>
            <Link to="/#how-it-works" className="text-gray-700 hover:text-sustainify-green font-medium transition-colors py-2" onClick={toggleMenu}>How It Works</Link>
            <Link to="/#testimonials" className="text-gray-700 hover:text-sustainify-green font-medium transition-colors py-2" onClick={toggleMenu}>Testimonials</Link>
            <Button asChild variant="default" className="bg-sustainify-green hover:bg-sustainify-green/90 text-white w-full mt-2">
              <Link to="/get-started" onClick={toggleMenu}>Get Started</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
