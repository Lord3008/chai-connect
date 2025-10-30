import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Search,
  MessageSquare,
  Bookmark,
  Share2,
  Star,
  ArrowUpRight,
  Users,
  Lightbulb,
  ArrowLeft,
  PlusCircle,
} from "lucide-react";

const mockProfiles = {
  offering: [
    {
      id: 1,
      name: "Aarav Mehta",
      avatar: "AM",
      skill: "Web Development",
      description:
        "I can teach React, Tailwind, and modern frontend architecture. Looking to learn UI design basics.",
      tags: ["React", "Next.js", "TailwindCSS"],
      endorsements: 12,
      time: "2h ago",
    },
    {
      id: 2,
      name: "Riya Singh",
      avatar: "RS",
      skill: "UI/UX Design",
      description:
        "Proficient in Figma and design systems. Happy to mentor developers who want to improve design thinking.",
      tags: ["Figma", "Prototyping", "User Research"],
      endorsements: 9,
      time: "5h ago",
    },
  ],
  seeking: [
    {
      id: 3,
      name: "Kunal Verma",
      avatar: "KV",
      skill: "Machine Learning",
      description:
        "Looking for someone to explain ML intuitively. Can offer help with backend development in exchange.",
      tags: ["Python", "FastAPI", "AI"],
      endorsements: 5,
      time: "3h ago",
    },
    {
      id: 4,
      name: "Sanya Patel",
      avatar: "SP",
      skill: "Content Writing",
      description:
        "Need help with technical writing and personal branding. Can exchange mentorship in resume building.",
      tags: ["LinkedIn", "Blogs", "Storytelling"],
      endorsements: 3,
      time: "7h ago",
    },
  ],
};

export default function SkillExchangeBoard() {
  const [selectedTab, setSelectedTab] = useState("offering");
  const [savedProfiles, setSavedProfiles] = useState<number[]>([]);

  const handleSave = (id: number) => {
    setSavedProfiles((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const profiles = mockProfiles[selectedTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Skill Exchange</h1>
              <p className="text-xs text-muted-foreground">
                Offer what you know, learn what you don’t.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm" className="gap-2">
              <PlusCircle className="w-4 h-4" /> Offer a Skill
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Main Section */}
        <main className="flex-1">
          {/* Tabs */}
          <Tabs defaultValue="offering" onValueChange={setSelectedTab}>
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="offering" className="gap-2">
                <Lightbulb className="w-4 h-4" />
                Offering Skills
              </TabsTrigger>
              <TabsTrigger value="seeking" className="gap-2">
                <Users className="w-4 h-4" />
                Seeking Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="offering">
              <ProfileList
                profiles={mockProfiles.offering}
                savedProfiles={savedProfiles}
                onSave={handleSave}
              />
            </TabsContent>

            <TabsContent value="seeking">
              <ProfileList
                profiles={mockProfiles.seeking}
                savedProfiles={savedProfiles}
                onSave={handleSave}
              />
            </TabsContent>
          </Tabs>
        </main>

        {/* Sidebar */}
        <aside className="w-80 space-y-4">
          {/* About */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">
                What is Skill Exchange? 💡
              </CardTitle>
              <CardDescription>
                A place where students collaborate — teach, learn, and grow
                together by exchanging their unique skills.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Offer Your Skill
              </Button>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Post what you can teach or what you want to learn.</p>
              <p>• Browse through peers and connect instantly.</p>
              <p>• Exchange sessions via chat or meetups.</p>
              <p>• Endorse each other after sessions.</p>
            </CardContent>
          </Card>

          {/* Saved */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-amber-500" />
                Saved Profiles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              {savedProfiles.length > 0 ? (
                savedProfiles.map((id) => {
                  const all = [...mockProfiles.offering, ...mockProfiles.seeking];
                  const user = all.find((p) => p.id === id);
                  return (
                    <div
                      key={id}
                      className="flex justify-between items-center hover:bg-accent p-2 rounded-lg cursor-pointer transition-colors"
                    >
                      <span>{user?.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </div>
                  );
                })
              ) : (
                <p>No saved profiles yet.</p>
              )}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function ProfileList({ profiles, savedProfiles, onSave }: any) {
  return (
    <div className="space-y-4">
      {profiles.map((profile: any) => (
        <SkillCard
          key={profile.id}
          profile={profile}
          saved={savedProfiles.includes(profile.id)}
          onSave={() => onSave(profile.id)}
        />
      ))}
    </div>
  );
}

function SkillCard({ profile, saved, onSave }: any) {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <Card className="hover:shadow-md transition-all duration-200">
      <CardContent className="p-5 flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Avatar */}
        <Avatar className="w-12 h-12">
          <AvatarFallback className="bg-gradient-to-br from-primary/80 to-primary text-white font-semibold">
            {profile.avatar}
          </AvatarFallback>
        </Avatar>

        {/* Info */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                {profile.name}
                <Badge variant="secondary">{profile.skill}</Badge>
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {profile.description}
              </p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap mt-1">
              {profile.time}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {profile.tags.map((tag: string, idx: number) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-xs hover:bg-accent cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5 mt-4 text-sm text-muted-foreground">
            <button
              onClick={() => setIsMessageOpen(!isMessageOpen)}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Message
            </button>
            <button
              onClick={onSave}
              className={`flex items-center gap-1 transition-colors ${
                saved
                  ? "text-amber-600 dark:text-amber-400"
                  : "hover:text-amber-600 dark:hover:text-amber-400"
              }`}
            >
              <Bookmark
                className={`w-4 h-4 ${saved ? "fill-current" : ""}`}
              />
              Save
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <div className="ml-auto flex items-center gap-1 text-xs">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              {profile.endorsements} endorsements
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}