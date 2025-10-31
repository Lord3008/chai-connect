import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
import MyProfile from "./pages/UserProfileOwn";
import ForumPage from "./pages/Forum";
import SkillExchangeBoard from "./pages/SkillExchange";
import Auth from "./pages/Auth";
import Features from "./pages/Features";
import CareerGuidance from "./pages/CareerGuidance";
import AcademicSupport from "./pages/AcademicSupport";
import ProjectHelp from "./pages/ProjectHelp";
import SoftSkills from "./pages/SoftSkills";
import Credits from "./pages/Credits";
import AnonymousQA from "./pages/AnonymousQA";
import Events from "./pages/Events";
import TrustScore from "./pages/TrustScore";
import VideoAnalyzer from "./pages/VideoAnalyzer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/features" element={<Features />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/academic-support" element={<AcademicSupport />} />
          <Route path="/project-help" element={<ProjectHelp />} />
          <Route path="/soft-skills" element={<SoftSkills />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/anonymous-qa" element={<AnonymousQA />} />
          <Route path="/events" element={<Events />} />
          <Route path="/trust-score" element={<TrustScore />} />
          <Route path="/video-analyzer" element={<VideoAnalyzer />} />
          <Route path="/skillexchange" element={<SkillExchangeBoard />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/userown" element={<MyProfile />} />
          <Route path="/forum" element={<ForumPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
