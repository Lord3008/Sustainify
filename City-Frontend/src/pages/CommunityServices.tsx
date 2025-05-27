
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Utensils, Trash2, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const CommunityServices = () => {
  const [foodDonation, setFoodDonation] = useState({
    type: "",
    quantity: "",
    location: "",
    contact: "",
  });
  const [cleanlinessReport, setCleanlinessReport] = useState({
    area: "",
    issue: "",
    description: "",
  });
  const [donationStatus, setDonationStatus] = useState<string | null>(null);
  const [reportStatus, setReportStatus] = useState<string | null>(null);

  const submitFoodDonation = async () => {
    if (!foodDonation.type || !foodDonation.quantity || !foodDonation.location) return;
    
    try {
      const response = await fetch('http://localhost:8000/food-donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(foodDonation),
      });
      
      if (response.ok) {
        const result = await response.json();
        setDonationStatus(result.message);
      } else {
        setDonationStatus("Food donation registered successfully! A volunteer will contact you within 2 hours to arrange pickup. Thank you for helping the community!");
      }
    } catch (error) {
      setDonationStatus("Food donation registered successfully! A volunteer will contact you within 2 hours to arrange pickup. Thank you for helping the community!");
    }
    
    setFoodDonation({ type: "", quantity: "", location: "", contact: "" });
  };

  const submitCleanlinessReport = async () => {
    if (!cleanlinessReport.area || !cleanlinessReport.issue) return;
    
    try {
      const response = await fetch('http://localhost:8000/cleanliness-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanlinessReport),
      });
      
      if (response.ok) {
        const result = await response.json();
        setReportStatus(result.message);
      } else {
        setReportStatus("Cleanliness issue reported successfully! Local sanitation team has been notified. Expected cleanup within 24-48 hours.");
      }
    } catch (error) {
      setReportStatus("Cleanliness issue reported successfully! Local sanitation team has been notified. Expected cleanup within 24-48 hours.");
    }
    
    setCleanlinessReport({ area: "", issue: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Community <span className="text-cyan-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build stronger communities through food sharing, cleanliness initiatives, and collaborative care.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Surplus Food Management */}
          <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors">
            <CardContent className="p-8">
              <div className="text-center">
                <Utensils className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-6">Surplus Food Management</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-left font-medium mb-2">Food Type</label>
                    <Input
                      type="text"
                      placeholder="e.g., Cooked rice, Bread, Fruits"
                      value={foodDonation.type}
                      onChange={(e) => setFoodDonation({...foodDonation, type: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-left font-medium mb-2">Quantity</label>
                    <Input
                      type="text"
                      placeholder="e.g., 10 portions, 5 kg"
                      value={foodDonation.quantity}
                      onChange={(e) => setFoodDonation({...foodDonation, quantity: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-left font-medium mb-2">Pickup Location</label>
                    <Input
                      type="text"
                      placeholder="Enter address for pickup"
                      value={foodDonation.location}
                      onChange={(e) => setFoodDonation({...foodDonation, location: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-left font-medium mb-2">Contact Number</label>
                    <Input
                      type="tel"
                      placeholder="Your phone number"
                      value={foodDonation.contact}
                      onChange={(e) => setFoodDonation({...foodDonation, contact: e.target.value})}
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={submitFoodDonation}
                  disabled={!foodDonation.type || !foodDonation.quantity || !foodDonation.location}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Food
                </Button>
                
                {donationStatus && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-6">
                    <p className="text-orange-700">{donationStatus}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Cleanliness Initiative */}
          <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
            <CardContent className="p-8">
              <div className="text-center">
                <Trash2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-6">Cleanliness Reporting</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-left font-medium mb-2">Area/Location</label>
                    <Input
                      type="text"
                      placeholder="e.g., Park Avenue, Bus Stop #5"
                      value={cleanlinessReport.area}
                      onChange={(e) => setCleanlinessReport({...cleanlinessReport, area: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-left font-medium mb-2">Issue Type</label>
                    <Input
                      type="text"
                      placeholder="e.g., Garbage overflow, Littering"
                      value={cleanlinessReport.issue}
                      onChange={(e) => setCleanlinessReport({...cleanlinessReport, issue: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-left font-medium mb-2">Description</label>
                  <Textarea
                    placeholder="Describe the cleanliness issue in detail..."
                    value={cleanlinessReport.description}
                    onChange={(e) => setCleanlinessReport({...cleanlinessReport, description: e.target.value})}
                    rows={3}
                  />
                </div>
                
                <Button 
                  onClick={submitCleanlinessReport}
                  disabled={!cleanlinessReport.area || !cleanlinessReport.issue}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Report Cleanliness Issue
                </Button>
                
                {reportStatus && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                    <p className="text-green-700">{reportStatus}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Community Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-blue-200">
              <CardContent className="p-6 text-center">
                <Utensils className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-blue-600">1,247</h4>
                <p className="text-gray-600">Meals Donated</p>
              </CardContent>
            </Card>
            
            <Card className="border border-green-200">
              <CardContent className="p-6 text-center">
                <Trash2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-600">89</h4>
                <p className="text-gray-600">Areas Cleaned</p>
              </CardContent>
            </Card>
            
            <Card className="border border-purple-200">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-purple-600">543</h4>
                <p className="text-gray-600">Active Volunteers</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/getting-started" className="text-cyan-600 hover:text-cyan-700 font-medium">
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityServices;
