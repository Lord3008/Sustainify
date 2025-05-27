
import Hero from "@/components/Hero";
import ProblemCategories from "@/components/ProblemCategories";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemCategories />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
