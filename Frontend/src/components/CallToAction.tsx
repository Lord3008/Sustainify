
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-sustainify-green text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Sustainable Revolution?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Whether you're a farmer looking to adopt modern practices or a city dweller wanting to support local agriculture, Sustainify has something for you.
        </p>
        <Button asChild size="lg" className="bg-white text-sustainify-green hover:bg-white/90 text-lg px-8">
          <Link to="/get-started" className="flex items-center gap-2">
            Get Started Today <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
