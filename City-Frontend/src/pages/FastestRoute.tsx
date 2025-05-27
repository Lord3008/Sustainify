
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Navigation, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const FastestRoute = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [routeResult, setRouteResult] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateRoute = async () => {
    if (!source || !destination) return;
    
    setIsCalculating(true);
    
    try {
      // Replace with your actual FastAPI endpoint
      const response = await fetch('http://localhost:8000/calculate-route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: source,
          destination: destination,
        }),
      });
      
      if (response.ok) {
        const result = await response.json();
        setRouteResult(result.route_info);
      } else {
        // Fallback dummy response
        setRouteResult(`Fastest route from ${source} to ${destination}: Via Main Street → Highway 101 → Oak Avenue. Estimated time: 25 minutes. Traffic score: Moderate. AI Suggestion: Avoid rush hours (7-9 AM, 5-7 PM) for 15% faster travel.`);
      }
    } catch (error) {
      // Dummy response for demonstration
      setRouteResult(`Fastest route from ${source} to ${destination}: Via Main Street → Highway 101 → Oak Avenue. Estimated time: 25 minutes. Traffic score: Moderate. AI Suggestion: Avoid rush hours (7-9 AM, 5-7 PM) for 15% faster travel.`);
    }
    
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Fastest <span className="text-blue-600">Route</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find the most efficient routes with AI-powered traffic analysis and real-time suggestions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Navigation className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-6">Route Planning</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-left font-medium mb-2">Source Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter starting point"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-left font-medium mb-2">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={calculateRoute}
                  disabled={!source || !destination || isCalculating}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {isCalculating ? 'Calculating...' : 'Find Fastest Route'}
                </Button>
                
                {routeResult && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6 text-left">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Route Information:</h4>
                    <p className="text-blue-700">{routeResult}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
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

export default FastestRoute;
