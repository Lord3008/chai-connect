import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, FileText, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AcademicSupport = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Academic <span className="bg-gradient-primary bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Get help with coursework, exam prep, and study strategies from your peers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <GraduationCap className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Subject Tutoring</CardTitle>
                  <CardDescription>
                    Find students who excel in specific subjects and exchange knowledge. Learn difficult concepts in a collaborative environment.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Exam Preparation</CardTitle>
                  <CardDescription>
                    Connect with students who've aced exams. Get study materials, tips, and strategies for scoring better.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Study Groups</CardTitle>
                  <CardDescription>
                    Form or join study groups with peers taking the same courses. Learn together over regular chai sessions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Assignment Help</CardTitle>
                  <CardDescription>
                    Stuck on an assignment? Get guidance and clarification from peers who understand the subject matter.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-primary-foreground mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Popular Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Mathematics", "Physics", "Chemistry", "Computer Science", "Electronics", "Mechanics", "Economics", "Statistics", "Biology"].map((subject) => (
                    <div key={subject} className="bg-primary-foreground/10 rounded-lg p-3 text-center font-medium">
                      {subject}
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

export default AcademicSupport;
