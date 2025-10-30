import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, ArrowDown, MessageSquare, Bookmark, Share2, TrendingUp, Clock, Award, ArrowLeft, Send, Coffee } from 'lucide-react';

const mockPosts = [
  {
    id: 1,
    title: "How do I balance leetcode practice with college assignments?",
    author: "techEnthusiast",
    avatar: "TE",
    category: "Career Advice",
    upvotes: 234,
    comments: 56,
    time: "3h ago",
    content: "I'm a CS sophomore struggling to find time for both. Any tips from seniors who've been through this?",
    fullContent: "I'm currently in my second year of Computer Science and I'm finding it really challenging to balance my college assignments with leetcode practice. I know leetcode is important for placements, but my academic workload is also quite heavy.\n\nMy typical day: I have classes from 9 AM to 4 PM, then assignments and projects take up most of my evening. By the time I'm done, I'm too tired to focus on leetcode problems.\n\nI've tried waking up early (5 AM) but I end up being sleepy during lectures. I've also tried doing leetcode on weekends, but that's when most group projects and lab work pile up.\n\nFor those who've been through this and successfully managed both - what worked for you? Any specific strategies or time management tips?",
    tags: ["leetcode", "time-management", "placements"],
    isPinned: false
  },
  {
    id: 2,
    title: "Best free resources to learn System Design for interviews",
    author: "codingNinja99",
    avatar: "CN",
    category: "Upskilling",
    upvotes: 512,
    comments: 89,
    time: "5h ago",
    content: "Placement season is around the corner. Can anyone share good free resources for learning system design?",
    fullContent: "Placement season is around the corner and I'm realizing that system design is a crucial part of technical interviews, especially for senior positions and top companies.\n\nI've been focusing mainly on DSA so far, but I know system design is equally important. The problem is, most good system design courses are pretty expensive and I'm on a tight budget.\n\nI've heard about Gaurav Sen's YouTube channel and System Design Primer on GitHub. Are these enough? What other free resources would you recommend?\n\nAlso, any tips on how to practice system design when you don't have much real-world experience? Should I just watch videos or is there a more hands-on approach?\n\nWould really appreciate if seniors could share what resources they used and found helpful!",
    tags: ["system-design", "interviews", "resources"],
    isPinned: true
  },
  {
    id: 3,
    title: "Failed my Data Structures exam. How to bounce back?",
    author: "struggling_student",
    avatar: "SS",
    category: "Academics",
    upvotes: 178,
    comments: 67,
    time: "7h ago",
    content: "Really demotivated after failing DSA mid-term. Looking for advice on how to improve and study better.",
    fullContent: "I just got my Data Structures mid-term results back and I failed. Got 28/100. I'm feeling really demotivated and questioning whether I'm cut out for CS.\n\nI thought I had studied well - I went through all the lecture slides, watched YouTube tutorials, and even solved some practice problems. But during the exam, I just blanked out. The questions seemed much harder than what we practiced.\n\nThis is my first major failure in college and I don't know how to bounce back. My CGPA has taken a hit and I'm worried about how this will affect my placements.\n\nFor those who've been in similar situations - how did you recover? Should I talk to my professor? How can I make sure this doesn't happen in the finals?\n\nAny advice on better study techniques for DSA would be really helpful. I clearly need to change my approach.",
    tags: ["data-structures", "study-tips", "motivation"],
    isPinned: false
  },
  {
    id: 4,
    title: "Should I do a summer internship or work on personal projects?",
    author: "confusedJunior",
    avatar: "CJ",
    category: "Career Advice",
    upvotes: 423,
    comments: 134,
    time: "1d ago",
    content: "I have offers for a paid internship but also want to build my portfolio. What would help more for placements?",
    fullContent: "I'm in a bit of a dilemma and would love some advice from seniors or anyone who's been through placement season.\n\nI have two internship offers for this summer:\n1. A paid internship at a startup (₹15k/month) - they're offering good mentorship and real project work\n2. An unpaid internship at a mid-size company - bigger brand name but mostly grunt work\n\nAlternatively, I've been thinking about skipping internships altogether and spending the summer building 2-3 solid personal projects for my portfolio. I have some interesting ideas around ML and web development.\n\nHere's my situation:\n- I'm in second year, so this isn't my final summer\n- My CGPA is decent (8.2)\n- I have basic projects but nothing that really stands out\n- I need some income, so the paid internship is tempting\n\nWhat would be more valuable for placements - an internship experience or a strong portfolio of personal projects? Or should I try to do both (though that seems really tough)?\n\nWould love to hear different perspectives!",
    tags: ["internship", "projects", "career"],
    isPinned: false
  },
  {
    id: 5,
    title: "Complete roadmap: From zero to getting placed as SDE",
    author: "placedSenior",
    avatar: "PS",
    category: "Career Advice",
    upvotes: 891,
    comments: 203,
    time: "2d ago",
    content: "Just got placed at a FAANG company. Here's everything I did from first year to final placement.",
    fullContent: "Hey everyone! I just got placed at a FAANG company with a package of 45 LPA and wanted to share my complete journey. This is going to be long, but I hope it helps!\n\n**First Year:**\n- Focused on building strong programming fundamentals (C++/Java)\n- Maintained a good CGPA (8.5+)\n- Started with basic web development projects\n- Joined the coding club at college\n\n**Second Year:**\n- Started leetcode (solved ~200 easy/medium problems)\n- Did a summer internship at a startup\n- Built 2 full-stack projects\n- Participated in hackathons\n- CGPA: 8.7\n\n**Third Year:**\n- Intensive leetcode practice (total ~500 problems)\n- Started learning system design\n- Did an internship at a mid-size company\n- Contributed to open source\n- Started preparing for aptitude tests\n\n**Final Year (Placement Prep):**\n- Solved 150+ more leetcode problems (total ~650)\n- Deep dive into system design\n- Mock interviews with friends\n- Revised all projects thoroughly\n- Practiced company-specific questions\n\n**Key Takeaways:**\n1. Consistency > Intensity\n2. Projects matter more than you think\n3. Communication skills are crucial\n4. Don't neglect aptitude and puzzles\n5. Network with seniors\n\nHappy to answer any questions in the comments!",
    tags: ["roadmap", "sde", "placements", "success-story"],
    isPinned: true
  }
];

const mockComments = {
  1: [
    {
      id: 1,
      author: "placedSenior",
      avatar: "PS",
      content: "I was in the same boat! What worked for me was doing leetcode early morning (6-7 AM) before classes. Just one problem a day. Also, I'd use commute time to watch solution videos. Consistency over quantity is key!",
      upvotes: 45,
      time: "2h ago",
      replies: [
        {
          id: 2,
          author: "techEnthusiast",
          avatar: "TE",
          content: "Thanks! Did you follow any specific pattern or just random problems?",
          upvotes: 12,
          time: "2h ago",
          replies: [
            {
              id: 3,
              author: "codingNinja99",
              avatar: "CN",
              content: "Try the Pomodoro technique. 25 min focused study, 5 min break. I do 2-3 sessions of leetcode after dinner. Also, don't try to do hard problems when you're tired - stick to easy/medium.",
              upvotes: 32,
              time: "1h ago",
              replies: []
            }
          ]
        }
      ]
    },
    {
      id: 3,
      author: "codingNinja99",
      avatar: "CN",
      content: "Try the Pomodoro technique. 25 min focused study, 5 min break. I do 2-3 sessions of leetcode after dinner. Also, don't try to do hard problems when you're tired - stick to easy/medium.",
      upvotes: 32,
      time: "1h ago",
      replies: []
    }
  ],
  2: [
    {
      id: 1,
      author: "systemDesignPro",
      avatar: "SP",
      content: "Check out these free resources: 1) Gaurav Sen's YouTube channel 2) System Design Primer on GitHub 3) ByteByteGo newsletter 4) DesignGuru's free articles. Start with basics like Load Balancers, Caching, and Databases.",
      upvotes: 89,
      time: "4h ago",
      replies: []
    },
    {
      id: 2,
      author: "placedSenior",
      avatar: "PS",
      content: "I'd also recommend practicing by designing systems you use daily - WhatsApp, Instagram, etc. Write it down, identify bottlenecks, think about scaling. This helped me more than just watching videos.",
      upvotes: 67,
      time: "3h ago",
      replies: []
    }
  ]
};

const trendingTopics = [
  { name: "Placement Season 2025", posts: 1234 },
  { name: "DSA Practice", posts: 892 },
  { name: "Remote Internships", posts: 567 },
  { name: "Open Source", posts: 445 },
  { name: "Resume Tips", posts: 389 }
];

export default function CollegeForum() {
  const [posts, setPosts] = useState(mockPosts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);

  const handleVote = (postId, direction) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, upvotes: direction === 'up' ? post.upvotes + 1 : post.upvotes - 1 }
        : post
    ));
  };

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category.toLowerCase().replace(' ', '-') === selectedCategory);

  const pinnedPosts = filteredPosts.filter(post => post.isPinned);
  const regularPosts = filteredPosts.filter(post => !post.isPinned);

  if (selectedPost) {
    return <PostDetailPage post={selectedPost} onBack={() => setSelectedPost(null)} handleVote={handleVote} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-secondary font-bold text-xl"><Coffee/></span>
            <div>
              <h1 className="text-2xl font-bold text-foreground">bytee</h1>
              <p className="text-xs text-muted-foreground">College Community Forum</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Create Post</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Main Content */}
        <main className="flex-1">
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-6" onValueChange={setSelectedCategory}>
            <TabsList className="w-full justify-start">
              <TabsTrigger value="all" className="gap-2">
                <TrendingUp className="w-4 h-4" />
                All Posts
              </TabsTrigger>
              <TabsTrigger value="career-advice">Career Advice</TabsTrigger>
              <TabsTrigger value="upskilling">Upskilling</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Pinned Posts */}
          {pinnedPosts.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Pinned Posts
              </h2>
              {pinnedPosts.map(post => (
                <PostCard key={post.id} post={post} handleVote={handleVote} isPinned onSelect={setSelectedPost} />
              ))}
            </div>
          )}

          {/* Regular Posts */}
          <div className="space-y-4">
            {regularPosts.map(post => (
              <PostCard key={post.id} post={post} handleVote={handleVote} onSelect={setSelectedPost} />
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-80 space-y-4">
          {/* About */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">Welcome to bytee! 👋</CardTitle>
              <CardDescription>
                A community for college students to discuss academics, upskilling, and career growth.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Create Your First Post
              </Button>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Community Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Members</span>
                <span className="font-semibold text-foreground">47.2K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Online Now</span>
                <span className="font-semibold text-green-600 dark:text-green-400">1.2K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Posts Today</span>
                <span className="font-semibold text-foreground">234</span>
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic, idx) => (
                <div key={idx} className="flex justify-between items-center hover:bg-accent p-2 rounded-lg cursor-pointer transition-colors">
                  <span className="text-sm font-medium text-foreground">#{topic.name}</span>
                  <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Forum Rules */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Forum Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Be respectful and supportive</p>
              <p>• No spam or self-promotion</p>
              <p>• Share genuine experiences</p>
              <p>• Help fellow students grow</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function PostCard({ post, handleVote, isPinned = false, onSelect }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <Card className={`hover:shadow-md transition-shadow ${isPinned ? 'border-amber-400 dark:border-amber-600 bg-amber-50/30 dark:bg-amber-950/30' : ''}`}>
      <CardContent className="p-4">
        <div className="flex gap-3">
          {/* Voting Section */}
          <div className="flex flex-col items-center gap-1 pt-1">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleVote(post.id, 'up');
              }}
              className="p-1 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded transition-colors"
            >
              <ArrowUp className="w-5 h-5 text-muted-foreground hover:text-orange-500 dark:hover:text-orange-400" />
            </button>
            <span className="font-semibold text-sm text-foreground">{post.upvotes}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleVote(post.id, 'down');
              }}
              className="p-1 hover:bg-primary/10 rounded transition-colors"
            >
              <ArrowDown className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </button>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="text-xs bg-gradient-to-br from-primary/80 to-primary">
                    {post.avatar}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-foreground">{post.author}</span>
                <span>•</span>
                <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.time}
                </span>
                {isPinned && (
                  <>
                    <span>•</span>
                    <Badge className="bg-amber-500 dark:bg-amber-600 text-white text-xs">Pinned</Badge>
                  </>
                )}
              </div>
            </div>

            <h2 
              onClick={() => onSelect(post)}
              className="text-lg font-semibold text-foreground mb-2 hover:text-primary cursor-pointer transition-colors"
            >
              {post.title}
            </h2>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {post.content}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs hover:bg-accent cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button 
                onClick={() => onSelect(post)}
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{post.comments} comments</span>
              </button>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBookmarked(!isBookmarked);
                }}
                className={`flex items-center gap-1 transition-colors ${isBookmarked ? 'text-amber-600 dark:text-amber-400' : 'hover:text-amber-600 dark:hover:text-amber-400'}`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PostDetailPage({ post, onBack, handleVote }) {
  const [commentText, setCommentText] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const comments = mockComments[post.id] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">bytee</h1>
              <p className="text-xs text-muted-foreground">College Community Forum</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Create Post</Button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Post Content */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              {/* Voting Section */}
              <div className="flex flex-col items-center gap-2">
                <button 
                  onClick={() => handleVote(post.id, 'up')}
                  className="p-2 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded transition-colors"
                >
                  <ArrowUp className="w-6 h-6 text-muted-foreground hover:text-orange-500 dark:hover:text-orange-400" />
                </button>
                <span className="font-bold text-lg text-foreground">{post.upvotes}</span>
                <button 
                  onClick={() => handleVote(post.id, 'down')}
                  className="p-2 hover:bg-primary/10 rounded transition-colors"
                >
                  <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-br from-primary/80 to-primary">
                      {post.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{post.author}</span>
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      {post.isPinned && (
                        <Badge className="bg-amber-500 dark:bg-amber-600 text-white text-xs">Pinned</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.time}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-foreground mb-4">{post.title}</h1>

                {/* Full Content */}
                <div className="prose prose-slate dark:prose-invert max-w-none mb-4">
                  <p className="text-foreground whitespace-pre-line leading-relaxed">
                    {post.fullContent}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="hover:bg-accent cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span>{post.comments} Comments</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex items-center gap-2 text-sm transition-colors ${isBookmarked ? 'text-amber-600 dark:text-amber-400' : 'text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400'}`}
                  >
                    <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comment Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">Add a Comment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-gradient-to-br from-primary/80 to-primary">
                  You
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="What are your thoughts?"
                  className="w-full min-h-24 p-3 bg-background border border-input rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
                <div className="flex justify-end mt-2">
                  <Button size="sm" className="gap-2">
                    <Send className="w-4 h-4" />
                    Comment
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {comments.length} Comments
          </h2>
          {comments.map(comment => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CommentCard({ comment, isReply = false }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState('');

  return (
    <Card className={isReply ? 'ml-12' : ''}>
      <CardContent className="p-4">
        <div className="flex gap-3">
          {/* Voting */}
          <div className="flex flex-col items-center gap-1">
            <button className="p-1 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded transition-colors">
              <ArrowUp className="w-4 h-4 text-muted-foreground hover:text-orange-500" />
            </button>
            <span className="text-xs font-semibold text-foreground">{comment.upvotes}</span>
            <button className="p-1 hover:bg-primary/10 rounded transition-colors">
              <ArrowDown className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-7 h-7">
                <AvatarFallback className="text-xs bg-gradient-to-br from-primary/80 to-primary">
                  {comment.avatar}
                </AvatarFallback>
              </Avatar>
              <span className="font-semibold text-sm text-foreground">{comment.author}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{comment.time}</span>
            </div>

            <p className="text-sm text-foreground mb-3">{comment.content}</p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <button 
                onClick={() => setShowReplyBox(!showReplyBox)}
                className="hover:text-primary transition-colors font-medium"
              >
                Reply
              </button>
              <button className="hover:text-primary transition-colors">Share</button>
              <button className="hover:text-primary transition-colors">Report</button>
            </div>

            {/* Reply Box */}
            {showReplyBox && (
              <div className="mt-3 flex gap-2">
                <Avatar className="w-7 h-7">
                  <AvatarFallback className="text-xs bg-gradient-to-br from-primary/80 to-primary">
                    You
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a reply..."
                    className="w-full min-h-20 p-2 bg-background border border-input rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"
                  />
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" className="text-xs">Reply</Button>
                    <Button size="sm" variant="outline" className="text-xs" onClick={() => setShowReplyBox(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-3">
            {comment.replies.map(reply => (
              <CommentCard key={reply.id} comment={reply} isReply={true} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
