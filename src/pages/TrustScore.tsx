import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, TrendingUp, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TrustScore = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Award className="w-16 h-16 mx-auto mb-4 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Trust <span className="bg-gradient-primary bg-clip-text text-transparent">Score</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Build your reputation through consistent contribution and quality help
              </p>
            </div>

            <Card className="mb-8 border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">What is Trust Score?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Your Trust Score reflects your credibility and contribution to the bytee community. It's built through:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Quality of help and mentorship provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Positive feedback from peers you've helped</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Consistency and reliability in commitments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Active participation in community events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Star className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Earn Recognition</CardTitle>
                  <CardDescription>
                    Higher trust scores unlock badges, special privileges, and increase your visibility in the community.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Track Progress</CardTitle>
                  <CardDescription>
                    Monitor your score growth over time and see how your contributions impact the community.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="w-8 h-8 mb-2 text-secondary" />
                  <CardTitle>Build Trust</CardTitle>
                  <CardDescription>
                    A high trust score makes others more likely to seek your help and value your expertise.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-primary-foreground mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Trust Score Levels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">🌱 Newcomer</h3>
                    <span className="text-sm">0-50 points</span>
                  </div>
                  <p className="text-sm opacity-90">Just getting started on your journey</p>
                </div>

                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">⭐ Contributor</h3>
                    <span className="text-sm">51-150 points</span>
                  </div>
                  <p className="text-sm opacity-90">Actively helping and building reputation</p>
                </div>

                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">💎 Expert</h3>
                    <span className="text-sm">151-300 points</span>
                  </div>
                  <p className="text-sm opacity-90">Recognized authority in specific areas</p>
                </div>

                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">👑 Community Leader</h3>
                    <span className="text-sm">300+ points</span>
                  </div>
                  <p className="text-sm opacity-90">Pillar of the bytee community</p>
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

export default TrustScore;
