
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Car, Shield, Leaf, Building, Users } from "lucide-react";

const categories = [
  {
    icon: Wind,
    title: "Air Pollution",
    description: "Monitor air quality, report pollution sources, and advocate for cleaner air in your neighborhood.",
    color: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-300",
    iconColor: "text-blue-600"
  },
  {
    icon: Car,
    title: "Traffic Issues",
    description: "Report traffic congestion, unsafe intersections, and transportation problems affecting your daily commute.",
    color: "bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 hover:border-indigo-300",
    iconColor: "text-indigo-600"
  },
  {
    icon: Shield,
    title: "Women Safety",
    description: "Create safer spaces by reporting unsafe areas and collaborating on community safety initiatives.",
    color: "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-300",
    iconColor: "text-purple-600"
  },
  {
    icon: Leaf,
    title: "Environmental Issues",
    description: "Address waste management, green space preservation, and environmental sustainability challenges.",
    color: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-300",
    iconColor: "text-emerald-600"
  },
  {
    icon: Building,
    title: "Infrastructure",
    description: "Report damaged roads, broken streetlights, and infrastructure issues that need municipal attention.",
    color: "bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 hover:border-slate-300",
    iconColor: "text-slate-600"
  },
  {
    icon: Users,
    title: "Community Services",
    description: "Improve access to healthcare, education, and other essential community services in your area.",
    color: "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 hover:border-cyan-300",
    iconColor: "text-cyan-600"
  }
];

const ProblemCategories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Tackle Urban <span className="text-blue-600">Challenges</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From environmental concerns to safety issues, our platform connects you with solutions that matter most to your community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`${category.color} hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group border-2`}
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-10 h-10 ${category.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemCategories;
