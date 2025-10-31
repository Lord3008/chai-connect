import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, FileText, MessageSquare, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const VideoAnalyzer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Video className="w-16 h-16 mx-auto mb-4 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                YouTube Video <span className="bg-gradient-primary bg-clip-text text-transparent">Analyzer</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Get AI-powered summaries and Q&A from educational YouTube videos
              </p>
            </div>

            <Card className="mb-8 border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Paste Video Link</h3>
                    <p className="text-muted-foreground">Share the YouTube URL of any educational video you want to analyze.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Get AI Summary</h3>
                    <p className="text-muted-foreground">Our RAG system analyzes the video and provides a comprehensive summary.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Ask Questions</h3>
                    <p className="text-muted-foreground">Query specific parts of the video and get instant, accurate answers.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <FileText className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Smart Summaries</CardTitle>
                  <CardDescription>
                    Get concise summaries of long lectures and tutorials. Save time by reviewing key points quickly.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <MessageSquare className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Interactive Q&A</CardTitle>
                  <CardDescription>
                    Ask specific questions about the video content and get precise answers using RAG technology.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Quick Study Aid</CardTitle>
                  <CardDescription>
                    Perfect for exam prep. Extract key formulas, concepts, and explanations instantly.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Video className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Multi-Format Support</CardTitle>
                  <CardDescription>
                    Works with lectures, coding tutorials, language lessons, and all educational content.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-primary-foreground mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Popular Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Lecture Summaries",
                    "Coding Tutorials",
                    "Math Problem Solving",
                    "Language Learning",
                    "Science Concepts",
                    "Exam Preparation",
                    "Quick Revision",
                    "Research Topics"
                  ].map((useCase) => (
                    <div key={useCase} className="bg-primary-foreground/10 rounded-lg p-3 text-center font-medium">
                      {useCase}
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

export default VideoAnalyzer;
