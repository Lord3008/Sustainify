
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Building Sustainable Cities Together
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              Empowering citizens to create meaningful change in their communities. Report issues, collaborate on solutions, and build the sustainable cities of tomorrow.
            </p>
            
            <Link to="/getting-started">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-full">
                Get Started
              </Button>
            </Link>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12K+</div>
                <div className="text-gray-600">Issues Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
                <div className="text-gray-600">Active Cities</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Smart city infrastructure" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-blue-600/60" />
      </div>
    </section>
  );
};

export default Hero;
