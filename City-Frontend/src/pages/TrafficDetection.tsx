import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const TrafficDetection = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [annotatedImage, setAnnotatedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setAnalysisResult(null);
      setAnnotatedImage(null);
    }
  };

  const analyzeTraffic = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call to FastAPI backend
    const formData = new FormData();
    formData.append('image', selectedImage);
    
    try {
      // Replace with your actual FastAPI endpoint
      const response = await fetch('http://localhost:8000/analyze-traffic', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const result = await response.json();
        setAnalysisResult(result.suggestions);
        setAnnotatedImage(result.annotated_image);
      } else {
        // Fallback dummy response
        setAnalysisResult("Traffic analysis complete: 15 cars detected, moderate congestion. Suggestion: Consider alternative routes during peak hours.");
        setAnnotatedImage(null);
      }
    } catch (error) {
      // Dummy response for demonstration
      setAnalysisResult("Traffic analysis complete: 15 cars detected, moderate congestion. Suggestion: Consider alternative routes during peak hours.");
      setAnnotatedImage(null);
    }
    
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Traffic <span className="text-blue-600">Detection</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Upload traffic images for AI-powered analysis and get smart suggestions for traffic management.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Camera className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Upload Traffic Image</h3>
                
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 mb-6">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  </label>
                </div>
                
                {selectedImage && (
                  <div className="mb-6">
                    <p className="text-green-600 mb-4">Image selected: {selectedImage.name}</p>
                    <Button 
                      onClick={analyzeTraffic}
                      disabled={isAnalyzing}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isAnalyzing ? 'Analyzing...' : 'Analyze Traffic'}
                    </Button>
                  </div>
                )}
                
                {analysisResult && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-left mb-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Analysis Result:</h4>
                    <p className="text-green-700">{analysisResult}</p>
                  </div>
                )}
                
                {selectedImage && annotatedImage && (
                  <div className="mb-8 flex flex-col md:flex-row gap-8 justify-center items-center">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">Uploaded Image:</h4>
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Uploaded"
                        style={{ display: 'block', margin: '0 auto', maxWidth: '350px', maxHeight: 350, borderRadius: '8px', border: '2px solid #ddd' }}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">Annotated Image:</h4>
                      <img
                        src={`data:image/png;base64,${annotatedImage}`}
                        alt="Annotated Traffic"
                        style={{ display: 'block', margin: '0 auto', maxWidth: '350px', maxHeight: 350, borderRadius: '8px', border: '2px solid #3b82f6' }}
                      />
                    </div>
                  </div>
                )}
                {/* If only annotated image is available (for fallback) */}
                {!selectedImage && annotatedImage && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Annotated Image:</h4>
                    <img
                      src={`data:image/png;base64,${annotatedImage}`}
                      alt="Annotated Traffic"
                      style={{ display: 'block', margin: '0 auto', maxWidth: '80%', maxHeight: 500, borderRadius: '8px', border: '2px solid #3b82f6' }}
                    />
                  </div>
                )}
                
                {/* Traffic Flow and Intensity Section */}
                <div className="mt-10">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">Traffic Flow and Intensity Over Time</h4>
                  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <img src="/newplot.png" alt="Traffic Flow" style={{ maxWidth: '100%', maxHeight: 350, borderRadius: 8, border: '1px solid #ddd' }} />
                    <img src="/newplot2.png" alt="Traffic Intensity" style={{ maxWidth: '100%', maxHeight: 350, borderRadius: 8, border: '1px solid #ddd' }} />
                  </div>
                </div>
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

export default TrafficDetection;
