import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Lightbulb, Coffee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Events & <span className="bg-gradient-primary bg-clip-text text-transparent">Meetups</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Join study groups, workshops, and casual chai sessions with fellow students
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Study Groups</CardTitle>
                  <CardDescription>
                    Form or join regular study groups for specific subjects. Collaborate with peers and learn together over chai.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Lightbulb className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Skill Workshops</CardTitle>
                  <CardDescription>
                    Attend peer-led workshops on coding, design, communication, and other valuable skills.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Coffee className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Chai Sessions</CardTitle>
                  <CardDescription>
                    Casual meetups over tea/coffee to discuss ideas, share experiences, and build friendships.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Calendar className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Hackathons & Competitions</CardTitle>
                  <CardDescription>
                    Participate in collaborative coding events, competitions, and team challenges.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-primary-foreground mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">Web Development Workshop</h3>
                    <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">This Week</span>
                  </div>
                  <p className="text-sm opacity-90 mb-2">Learn React basics from seniors who've built real projects</p>
                  <p className="text-sm">📅 Saturday, 4 PM | 📍 Library Seminar Hall</p>
                </div>

                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">Exam Prep Study Group</h3>
                    <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">Ongoing</span>
                  </div>
                  <p className="text-sm opacity-90 mb-2">Daily evening sessions for Mathematics and Physics</p>
                  <p className="text-sm">📅 Mon-Fri, 6 PM | 📍 Cafeteria 2nd Floor</p>
                </div>

                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">Career Guidance Chai Session</h3>
                    <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">Next Month</span>
                  </div>
                  <p className="text-sm opacity-90 mb-2">Alumni sharing internship and placement experiences</p>
                  <p className="text-sm">📅 Next Sunday, 3 PM | 📍 Student Lounge</p>
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

export default Events;
