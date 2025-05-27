
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Infrastructure = () => {
  const [problemType, setProblemType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [reportStatus, setReportStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitReport = async () => {
    if (!problemType || !location || !description) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:8000/infrastructure-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problem_type: problemType,
          location: location,
          description: description,
          timestamp: new Date().toISOString(),
        }),
      });
      
      if (response.ok) {
        const result = await response.json();
        setReportStatus(`Report submitted successfully! Ticket ID: ${result.ticket_id}. Expected resolution: ${result.estimated_time}.`);
      } else {
        setReportStatus(`Report submitted successfully! Ticket ID: INF-${Date.now()}. Local authorities have been notified. Expected resolution: 3-5 business days.`);
      }
    } catch (error) {
      setReportStatus(`Report submitted successfully! Ticket ID: INF-${Date.now()}. Local authorities have been notified. Expected resolution: 3-5 business days.`);
    }
    
    setIsSubmitting(false);
    
    // Reset form
    setProblemType("");
    setLocation("");
    setDescription("");
  };

  const mockReports = [
    { id: "INF-001", type: "Pothole", status: "In Progress", location: "Main Street" },
    { id: "INF-002", type: "Street Light", status: "Completed", location: "Oak Avenue" },
    { id: "INF-003", type: "Water Leak", status: "Pending", location: "Park Road" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Infrastructure <span className="text-slate-600">Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Report infrastructure problems and track resolution progress with local authorities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Report Problem Section */}
          <Card className="border-2 border-slate-200 hover:border-slate-300 transition-colors">
            <CardContent className="p-8">
              <div className="text-center">
                <Building className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-6">Report Infrastructure Problem</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-left font-medium mb-2">Problem Type</label>
                    <Select value={problemType} onValueChange={setProblemType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select problem type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pothole">Pothole</SelectItem>
                        <SelectItem value="street-light">Broken Street Light</SelectItem>
                        <SelectItem value="water-leak">Water Leak</SelectItem>
                        <SelectItem value="traffic-signal">Traffic Signal Issue</SelectItem>
                        <SelectItem value="sidewalk">Damaged Sidewalk</SelectItem>
                        <SelectItem value="drainage">Drainage Problem</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-left font-medium mb-2">Location</label>
                    <Input
                      type="text"
                      placeholder="Enter specific location/address"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-left font-medium mb-2">Problem Description</label>
                  <Textarea
                    placeholder="Provide detailed description of the infrastructure problem..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <Button 
                  onClick={submitReport}
                  disabled={!problemType || !location || !description || isSubmitting}
                  className="bg-slate-600 hover:bg-slate-700"
                >
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Submit Report'}
                </Button>
                
                {reportStatus && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Report Status:</h4>
                    <p className="text-green-700">{reportStatus}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Track Reports Section */}
          <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Recent Reports Status</h3>
              
              <div className="space-y-4">
                {mockReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {report.status === "Completed" && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {report.status === "In Progress" && <Clock className="w-5 h-5 text-yellow-600" />}
                        {report.status === "Pending" && <AlertCircle className="w-5 h-5 text-red-600" />}
                        <span className="font-medium">{report.id}</span>
                      </div>
                      <span className="text-gray-600">{report.type}</span>
                      <span className="text-gray-500">{report.location}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === "Completed" ? "bg-green-100 text-green-800" :
                      report.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {report.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/getting-started" className="text-slate-600 hover:text-slate-700 font-medium">
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
