
import { Card, CardContent } from "@/components/ui/card";
import { Wind, BarChart, MapPin, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const tools = [
  {
    icon: BarChart,
    title: "AQI Predictor",
    description: "Predict air quality index for the next 24-48 hours",
    color: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-300",
    iconColor: "text-blue-600"
  },
  {
    icon: Wind,
    title: "Air Quality Analyzer",
    description: "Analyze current air quality data and trends",
    color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-300",
    iconColor: "text-green-600"
  },
  {
    icon: MapPin,
    title: "Pollution Mapper",
    description: "Interactive map showing pollution hotspots",
    color: "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-300",
    iconColor: "text-purple-600"
  },
  {
    icon: AlertTriangle,
    title: "Health Alerts",
    description: "Get notifications about air quality health risks",
    color: "bg-gradient-to-br from-red-50 to-pink-50 border-red-200 hover:border-red-300",
    iconColor: "text-red-600"
  }
];

const AirPollution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Air Pollution <span className="text-blue-600">Tools</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Monitor, analyze, and predict air quality in your area with our comprehensive suite of tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <Card 
              key={index}
              className={`${tool.color} hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group border-2`}
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className={`w-10 h-10 ${tool.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tool.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/getting-started" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AirPollution;
