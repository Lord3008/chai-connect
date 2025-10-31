import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GitBranch, Lightbulb, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ProjectHelp = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Code className="w-16 h-16 mx-auto mb-4 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Project <span className="bg-gradient-primary bg-clip-text text-transparent">Help</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Collaborate on projects and learn from experienced developers in your community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <GitBranch className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Code Reviews</CardTitle>
                  <CardDescription>
                    Get your code reviewed by experienced developers. Learn best practices, improve code quality, and avoid common pitfalls.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Lightbulb className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Project Ideas</CardTitle>
                  <CardDescription>
                    Brainstorm project ideas with peers. Get feedback on your concepts and find collaborators for ambitious projects.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Team Collaboration</CardTitle>
                  <CardDescription>
                    Find team members for hackathons, academic projects, or personal side projects. Build together over chai.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Debug Help</CardTitle>
                  <CardDescription>
                    Stuck with a bug? Connect with peers who can help troubleshoot and solve technical challenges.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-primary-foreground mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Popular Tech Stacks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["React", "Python", "Node.js", "Flutter", "Java", "C++", "Django", "MongoDB", "PostgreSQL"].map((tech) => (
                    <div key={tech} className="bg-primary-foreground/10 rounded-lg p-3 text-center font-medium">
                      {tech}
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

export default ProjectHelp;
