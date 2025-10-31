import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, TrendingUp, Users, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CareerGuidance = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Career <span className="bg-gradient-primary bg-clip-text text-transparent">Guidance</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect with seniors and alumni for personalized career mentorship over chai
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <TrendingUp className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Internship Insights</CardTitle>
                  <CardDescription>
                    Learn from seniors who've secured internships at top companies. Get tips on applications, interviews, and the selection process.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>One-on-One Mentorship</CardTitle>
                  <CardDescription>
                    Schedule personal sessions with mentors who align with your career goals. Exchange knowledge for a cup of coffee.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Career Path Planning</CardTitle>
                  <CardDescription>
                    Get guidance on choosing the right specialization, building your profile, and planning your career trajectory.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Briefcase className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Industry Insights</CardTitle>
                  <CardDescription>
                    Learn about different industries, job roles, and what companies look for in candidates from those who've been there.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Browse Mentors</h3>
                    <p className="opacity-90">Find seniors with experience in your area of interest</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Request a Session</h3>
                    <p className="opacity-90">Send a request offering a tea/coffee credit in exchange</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Meet & Learn</h3>
                    <p className="opacity-90">Connect over chai and get personalized career guidance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Link to="/features">
                <Button variant="outline" size="lg">
                  Back to Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerGuidance;
