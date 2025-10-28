import { Shield, Calendar, Award, MessageSquare, Users, Coins } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Coins,
    title: "Tea/Coffee Credits",
    description: "Track your contributions with our symbolic token system",
  },
  {
    icon: Shield,
    title: "Fair Charge Limits",
    description: "No overpricing - everyone can afford to learn",
  },
  {
    icon: MessageSquare,
    title: "Anonymous Q&A",
    description: "Safe space for sensitive academic and personal concerns",
  },
  {
    icon: Calendar,
    title: "Events & Meetups",
    description: "Join study groups, workshops, and casual chai sessions",
  },
  {
    icon: Award,
    title: "Trust Score",
    description: "Build credibility by helping others consistently",
  },
  {
    icon: Users,
    title: "Cross-Campus",
    description: "Connect with students from different colleges",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">bytee?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete ecosystem for peer-to-peer learning and support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
