
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Leaf, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Sustainify Today</h1>
            <p className="text-lg text-gray-700">
              Choose which path best describes you to get a customized experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all border-sustainify-green/20 hover:border-sustainify-green">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Leaf size={56} className="text-sustainify-green mb-4" />
                <h2 className="text-2xl font-bold mb-4">I'm a Farmer</h2>
                <p className="text-gray-600 mb-6">
                  Connect with urban markets, learn sustainable farming techniques, and get support from a community of like-minded farmers.
                </p>
                <Button asChild className="bg-sustainify-green hover:bg-sustainify-green/90 w-full">
                  <Link to="https://krushisaathi.vercel.app/landing">Continue as Farmer</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all border-sustainify-brown/20 hover:border-sustainify-brown">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Building size={56} className="text-sustainify-brown mb-4" />
                <h2 className="text-2xl font-bold mb-4">I'm a City Dweller</h2>
                <p className="text-gray-600 mb-6">
                  Access fresh produce directly from farmers, participate in urban gardening initiatives, and learn about sustainable living.
                </p>
                <Button asChild className="bg-sustainify-brown hover:bg-sustainify-brown/90 w-full">
                  <Link to="https://sustainify-city.vercel.app/">Continue as Citizen</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Already have an account?</p>
            <Button asChild variant="outline">
              <Link to="/login">Log In</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
