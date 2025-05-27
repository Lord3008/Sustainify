
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Report Issues",
    description: "Identify and report problems in your community with photos, location, and detailed descriptions.",
    step: "01"
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Connect with neighbors and local organizations who share your concerns and want to make a difference.",
    step: "02"
  },
  {
    icon: Lightbulb,
    title: "Create Solutions",
    description: "Collaborate on actionable solutions and track progress as your community works together for change.",
    step: "03"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to create lasting change in your community. Join thousands of citizens making a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-green-300 transform -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-green-300 transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-6">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
