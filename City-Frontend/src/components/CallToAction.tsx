
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Make a <span className="text-cyan-300">Difference</span>?
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
          Join thousands of citizens who are already creating positive change in their communities. Your voice matters, and together we can build sustainable cities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link to="/getting-started">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-full">
              Get Started Today
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-slate-900 px-10 py-6 text-lg font-semibold transition-all duration-300 rounded-full">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">For Citizens</h3>
            <p className="text-blue-100 leading-relaxed">
              Report issues, connect with your community, and track the progress of solutions in your neighborhood.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">For Organizations</h3>
            <p className="text-blue-100 leading-relaxed">
              Partner with us to implement large-scale solutions and make a meaningful impact on urban sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
