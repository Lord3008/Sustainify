
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Car, Shield, Leaf, Building, Users, MapPin, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: Wind,
    title: "Air Pollution",
    description: "Monitor air quality and track pollution sources in your area",
    color: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-300",
    iconColor: "text-blue-600",
    path: "/air-pollution"
  },
  {
    icon: Car,
    title: "Traffic Detection",
    description: "Real-time traffic monitoring and congestion alerts",
    color: "bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 hover:border-indigo-300",
    iconColor: "text-indigo-600",
    path: "/traffic-detection"
  },
  {
    icon: MapPin,
    title: "Fastest Route",
    description: "Find the most efficient routes through your city",
    color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-300",
    iconColor: "text-green-600",
    path: "/fastest-route"
  },
  {
    icon: Shield,
    title: "Women Safety",
    description: "Create safer spaces and report unsafe areas",
    color: "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-300",
    iconColor: "text-purple-600",
    path: "/women-safety"
  },
  {
    icon: Leaf,
    title: "Environmental Issues",
    description: "Address environmental sustainability challenges",
    color: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-300",
    iconColor: "text-emerald-600",
    path: "/environmental-issues"
  },
  {
    icon: Building,
    title: "Infrastructure",
    description: "Report and track infrastructure problems",
    color: "bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 hover:border-slate-300",
    iconColor: "text-slate-600",
    path: "/infrastructure"
  },
  {
    icon: Users,
    title: "Community Services",
    description: "Improve access to essential community services",
    color: "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 hover:border-cyan-300",
    iconColor: "text-cyan-600",
    path: "/community-services"
  }
];

const GettingStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-blue-600">Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the service that matters most to your community and start making a difference today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} to={service.path}>
              <Card 
                className={`${service.color} hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group border-2 h-full`}
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-10 h-10 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
