
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[calc(100vh-4rem)] px-4 py-16 md:py-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Connecting <span className="text-sustainify-green">Farmers</span> & <span className="text-sustainify-brown">Citizens</span> for a Sustainable Future
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            Sustainify bridges the gap between rural agriculture and urban communities, solving problems for both farmers and city dwellers through innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-sustainify-green hover:bg-sustainify-green/90 text-white text-lg px-6">
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-sustainify-green text-sustainify-green hover:bg-sustainify-green/10 text-lg px-6">
              <Link to="/#how-it-works" className="flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-sustainify-light-green/10 rounded-full"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-sustainify-brown/10 rounded-full"></div>
          
          <div className="relative bg-white p-3 rounded-lg shadow-xl transform rotate-2 z-10">
            <img 
              src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Farmers and city dwellers collaborating" 
              className="rounded-lg w-full h-auto"
            />
          </div>
          
          <div className="absolute bottom-12 -left-12 bg-white p-2 rounded-lg shadow-lg z-20 transform -rotate-3">
            <img 
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Urban farming initiative" 
              className="rounded-lg w-48 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
