
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GettingStarted from "./pages/GettingStarted";
import AirPollution from "./pages/AirPollution";
import TrafficDetection from "./pages/TrafficDetection";
import FastestRoute from "./pages/FastestRoute";
import WomenSafety from "./pages/WomenSafety";
import EnvironmentalIssues from "./pages/EnvironmentalIssues";
import Infrastructure from "./pages/Infrastructure";
import CommunityServices from "./pages/CommunityServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/air-pollution" element={<AirPollution />} />
          <Route path="/traffic-detection" element={<TrafficDetection />} />
          <Route path="/fastest-route" element={<FastestRoute />} />
          <Route path="/women-safety" element={<WomenSafety />} />
          <Route path="/environmental-issues" element={<EnvironmentalIssues />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/community-services" element={<CommunityServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
