
import React from 'react';
import { Leaf, Building, Tractor, Handshake, Users } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="feature-card bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300">
      <div className="mb-4 text-sustainify-green">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Leaf size={40} className="stroke-1" />,
      title: "Sustainable Practices",
      description: "Learn and implement eco-friendly farming methods that improve soil health and reduce environmental impact."
    },
    {
      icon: <Building size={40} className="stroke-1" />,
      title: "Urban Solutions",
      description: "Access to fresh, locally-grown produce and participate in community gardens to enhance urban sustainability."
    },
    {
      icon: <Tractor size={40} className="stroke-1" />,
      title: "Modern Farming",
      description: "Leverage technology and data-driven insights to optimize crop yields and resource management."
    },
    {
      icon: <Handshake size={40} className="stroke-1" />,
      title: "Direct Partnerships",
      description: "Connect directly with consumers or farmers, eliminating middlemen and ensuring fair prices for all."
    },
    {
      icon: <Users size={40} className="stroke-1" />,
      title: "Community Building",
      description: "Join a network of like-minded individuals committed to sustainable agriculture and urban development."
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-sustainify-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bridging Rural & Urban Communities</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our platform offers unique features that address the challenges faced by both farmers and city dwellers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
