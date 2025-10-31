import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Presentation, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SoftSkills = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Soft <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Develop essential communication, leadership, and interpersonal skills
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <MessageSquare className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Communication Skills</CardTitle>
                  <CardDescription>
                    Improve your verbal and written communication. Practice effective expression and active listening in a supportive environment.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Presentation className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Presentation Skills</CardTitle>
                  <CardDescription>
                    Master the art of presenting ideas confidently. Get feedback on your presentations and practice public speaking.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Leadership & Teamwork</CardTitle>
                  <CardDescription>
                    Develop leadership qualities and learn to work effectively in teams. Build skills through collaborative projects.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Professional Etiquette</CardTitle>
                  <CardDescription>
                    Learn workplace etiquette, email writing, interview skills, and other professional soft skills from seniors.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-primary-foreground mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Skill Development Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Public Speaking",
                    "Negotiation",
                    "Time Management",
                    "Conflict Resolution",
                    "Emotional Intelligence",
                    "Critical Thinking",
                    "Networking",
                    "Problem Solving"
                  ].map((skill) => (
                    <div key={skill} className="bg-primary-foreground/10 rounded-lg p-3 text-center font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
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

export default SoftSkills;
