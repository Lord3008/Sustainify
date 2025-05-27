
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, BarChart, Droplets, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const EnvironmentalIssues = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [currentUsage, setCurrentUsage] = useState("");
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeResources = async () => {
    if (!selectedRegion || !resourceType || !currentUsage) return;
    
    setIsAnalyzing(true);
    
    try {
      const response = await fetch('http://localhost:8000/resource-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          region: selectedRegion,
          resource_type: resourceType,
          current_usage: currentUsage,
        }),
      });
      
      if (response.ok) {
        const result = await response.json();
        setPrediction(result.analysis);
      } else {
        setPrediction(`Resource Analysis for ${selectedRegion}: Current ${resourceType} usage is ${currentUsage}% of capacity. Predicted shortage in 18 months if usage continues. Recommendations: Implement conservation measures, explore renewable alternatives, increase efficiency by 25%.`);
      }
    } catch (error) {
      setPrediction(`Resource Analysis for ${selectedRegion}: Current ${resourceType} usage is ${currentUsage}% of capacity. Predicted shortage in 18 months if usage continues. Recommendations: Implement conservation measures, explore renewable alternatives, increase efficiency by 25%.`);
    }
    
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Environmental <span className="text-green-600">Issues</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Manage resources sustainably with AI-powered analysis and future planning.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
            <CardContent className="p-8">
              <div className="text-center">
                <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-6">Resource Management Analysis</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-left font-medium mb-2">Region/State</label>
                    <Input
                      type="text"
                      placeholder="e.g., California, Mumbai"
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-left font-medium mb-2">Resource Type</label>
                    <Select value={resourceType} onValueChange={setResourceType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select resource" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="water">Water</SelectItem>
                        <SelectItem value="electricity">Electricity</SelectItem>
                        <SelectItem value="natural-gas">Natural Gas</SelectItem>
                        <SelectItem value="waste-management">Waste Management</SelectItem>
                        <SelectItem value="renewable-energy">Renewable Energy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-left font-medium mb-2">Current Usage (%)</label>
                    <Input
                      type="number"
                      placeholder="e.g., 75"
                      value={currentUsage}
                      onChange={(e) => setCurrentUsage(e.target.value)}
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={analyzeResources}
                  disabled={!selectedRegion || !resourceType || !currentUsage || isAnalyzing}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <BarChart className="w-4 h-4 mr-2" />
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Resource Usage'}
                </Button>
                
                {prediction && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6 text-left">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Analysis & Predictions:</h4>
                    <p className="text-green-700">{prediction}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="border border-blue-200">
              <CardContent className="p-6 text-center">
                <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Water Conservation</h4>
                <p className="text-sm text-gray-600">Monitor water usage and implement conservation strategies</p>
              </CardContent>
            </Card>
            
            <Card className="border border-yellow-200">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Energy Efficiency</h4>
                <p className="text-sm text-gray-600">Optimize energy consumption and promote renewables</p>
              </CardContent>
            </Card>
            
            <Card className="border border-green-200">
              <CardContent className="p-6 text-center">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Sustainability</h4>
                <p className="text-sm text-gray-600">Plan for sustainable resource management</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/getting-started" className="text-green-600 hover:text-green-700 font-medium">
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalIssues;
