
import React from 'react';
import { ArrowRight } from "lucide-react";

const StepCard = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sustainify-green text-white flex items-center justify-center font-bold text-xl">
          {number}
        </div>
        <ArrowRight className="h-8 w-8 mx-4 text-sustainify-green hidden md:block" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-24">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Sign up and specify whether you're a farmer or a city dweller to customize your experience.",
    },
    {
      number: 2,
      title: "Define Your Needs",
      description: "Share the challenges you're facing or the resources you can offer to the community.",
    },
    {
      number: 3,
      title: "Connect with Others",
      description: "Browse through potential matches and connect with those who can help address your needs.",
    },
    {
      number: 4,
      title: "Collaborate for Success",
      description: "Work together to implement sustainable solutions that benefit both parties.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Sustainify Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our simple four-step process makes it easy to find solutions to your agricultural and urban sustainability challenges.
          </p>
        </div>
        
        <div className="grid gap-12 md:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
