import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-muted/30 p-6 md:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Profile Header */}
        <Card className="border-none shadow-sm">
          <CardContent className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8 p-8">
            <div className="flex items-center gap-6">
              <Avatar className="h-28 w-28">
                <AvatarImage src="/avatars/user.jpg" alt="User avatar" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Siddharth Mishra
                </h1>
                <p className="text-muted-foreground">
                  Web Developer • Open Source • Mentor
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline">Full Stack</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Cybersecurity</Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 text-muted fill-muted" />
                <span className="ml-2 text-sm text-muted-foreground">
                  (23 reviews)
                </span>
              </div>
              <Button>Request Skill Exchange</Button>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            I'm passionate about building things that matter — from open-source
            tools to student-led platforms that foster collaboration and growth.
            I believe in the power of peer learning and helping others upskill.
          </CardContent>
        </Card>

        {/* Skills */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Skills Offered</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "Git", "UI Design"].map(
                (skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                )
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Skills Wanted</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {["Machine Learning", "Rust", "DevOps", "System Design"].map(
                (skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                )
              )}
            </CardContent>
          </Card>
        </div>

        {/* Reviews */}
        <Card>
          <CardHeader>
            <CardTitle>Reviews</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                name: "Harish Patel",
                comment:
                  "Great mentor! Helped me debug my React project and explained things clearly.",
              },
              {
                name: "Lord Sen",
                comment:
                  "Very supportive and knowledgeable. Exchanged great insights on API design.",
              },
            ].map((review, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 text-muted fill-muted" />
                  </div>
                </div>
                <p className="text-muted-foreground mt-1">{review.comment}</p>
                {i < 1 && <Separator className="my-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Activity Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold">14</p>
              <p className="text-sm text-muted-foreground">Exchanges Done</p>
            </div>
            <div>
              <p className="text-3xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">Mentorships</p>
            </div>
            <div>
              <p className="text-3xl font-bold">23</p>
              <p className="text-sm text-muted-foreground">Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.8</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
