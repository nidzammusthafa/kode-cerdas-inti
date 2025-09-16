import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Reply, 
  Heart, 
  MessageCircle,
  Clock,
  Bot,
  User,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal
} from 'lucide-react';

// Mock data
const comments = [
  {
    id: 1,
    postId: 1,
    postTitle: 'Premium Wireless Headphones Available Now',
    author: {
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40',
      isVerified: false
    },
    content: 'These headphones look amazing! Do you have them in black color? Also, what\'s the battery life like?',
    timestamp: '2 minutes ago',
    likes: 3,
    isRelevant: true,
    hasReply: false,
    sentiment: 'positive'
  },
  {
    id: 2,
    postId: 1,
    postTitle: 'Premium Wireless Headphones Available Now',
    author: {
      name: 'Mike Chen',
      avatar: '/api/placeholder/40/40',
      isVerified: false
    },
    content: 'Price seems a bit high compared to other brands. Are there any ongoing discounts?',
    timestamp: '5 minutes ago',
    likes: 1,
    isRelevant: true,
    hasReply: true,
    sentiment: 'neutral'
  },
  {
    id: 3,
    postId: 2,
    postTitle: 'Flash Sale: 50% Off Wireless Chargers',
    author: {
      name: 'Emma Rodriguez',
      avatar: '/api/placeholder/40/40',
      isVerified: false
    },
    content: 'Just ordered 2! Thanks for the great deal. How long does shipping usually take?',
    timestamp: '15 minutes ago',
    likes: 8,
    isRelevant: true,
    hasReply: true,
    sentiment: 'positive'
  },
  {
    id: 4,
    postId: 2,
    postTitle: 'Flash Sale: 50% Off Wireless Chargers',
    author: {
      name: 'David Kim',
      avatar: '/api/placeholder/40/40',
      isVerified: false
    },
    content: 'Is this compatible with iPhone 15 Pro Max?',
    timestamp: '25 minutes ago',
    likes: 2,
    isRelevant: true,
    hasReply: false,
    sentiment: 'neutral'
  },
  {
    id: 5,
    postId: 3,
    postTitle: 'Customer Review Spotlight',
    author: {
      name: 'Lisa Wang',
      avatar: '/api/placeholder/40/40',
      isVerified: false
    },
    content: 'I can confirm this! Bought from them last month and the quality is excellent. Highly recommend!',
    timestamp: '1 hour ago',
    likes: 12,
    isRelevant: true,
    hasReply: false,
    sentiment: 'positive'
  },
  {
    id: 6,
    postId: 1,
    postTitle: 'Premium Wireless Headphones Available Now',
    author: {
      name: 'Random Spam Account',
      avatar: '/api/placeholder/40/40',
      isVerified: false
    },
    content: 'Check out my profile for better deals on electronics!!! Link in bio!!!',
    timestamp: '2 hours ago',
    likes: 0,
    isRelevant: false,
    hasReply: false,
    sentiment: 'negative'
  }
];

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return 'success';
    case 'negative': return 'destructive';
    case 'neutral': return 'secondary';
    default: return 'secondary';
  }
};

const getSentimentText = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return 'Positive';
    case 'negative': return 'Negative';
    case 'neutral': return 'Neutral';
    default: return 'Unknown';
  }
};

export default function Comments() {
  return (
    <DashboardLayout 
      title="Comments Management" 
      description="Monitor and respond to comments across your posts"
    >
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex flex-col sm:flex-row flex-1 items-stretch sm:items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search comments..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Relevance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Comments</SelectItem>
                    <SelectItem value="relevant">Relevant Only</SelectItem>
                    <SelectItem value="irrelevant">Spam/Irrelevant</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Sentiment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sentiment</SelectItem>
                    <SelectItem value="positive">Positive</SelectItem>
                    <SelectItem value="neutral">Neutral</SelectItem>
                    <SelectItem value="negative">Negative</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button variant="gradient" className="gap-2 w-full sm:w-auto">
              <Bot className="h-4 w-4" />
              Run Auto-Comment
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Comments</p>
                  <p className="text-2xl font-bold">{comments.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm text-muted-foreground">Positive</p>
                  <p className="text-2xl font-bold">
                    {comments.filter(c => c.sentiment === 'positive').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-warning" />
                <div>
                  <p className="text-sm text-muted-foreground">Need Reply</p>
                  <p className="text-2xl font-bold">
                    {comments.filter(c => !c.hasReply && c.isRelevant).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <ThumbsDown className="h-5 w-5 text-destructive" />
                <div>
                  <p className="text-sm text-muted-foreground">Spam/Irrelevant</p>
                  <p className="text-2xl font-bold">
                    {comments.filter(c => !c.isRelevant).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id} className={`transition-all duration-300 hover:shadow-md ${
              !comment.isRelevant ? 'opacity-60 border-destructive/20' : ''
            }`}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Comment Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={comment.author.avatar} />
                        <AvatarFallback>
                          {comment.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{comment.author.name}</h4>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {comment.timestamp}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          On: "{comment.postTitle}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={comment.isRelevant ? 'success' : 'destructive'} 
                        className="text-xs"
                      >
                        {comment.isRelevant ? 'Relevant' : 'Spam'}
                      </Badge>
                      <Badge 
                        variant={getSentimentColor(comment.sentiment)} 
                        className="text-xs"
                      >
                        {getSentimentText(comment.sentiment)}
                      </Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Comment Content */}
                  <div className="pl-13">
                    <p className="text-sm text-foreground mb-3">
                      {comment.content}
                    </p>
                    
                    {/* Comment Stats */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {comment.likes} likes
                      </div>
                      {comment.hasReply && (
                        <Badge variant="outline" className="text-xs">
                          Replied
                        </Badge>
                      )}
                    </div>

                    {/* Reply Section */}
                    {comment.isRelevant && !comment.hasReply && (
                      <div className="space-y-3 pt-3 border-t border-border">
                        <Textarea
                          placeholder="Write a reply..."
                          className="min-h-[80px] resize-none"
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Bot className="h-3 w-3" />
                            AI suggests: Thank them for their interest and provide product details
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Use AI Reply
                            </Button>
                            <Button size="sm" className="gap-2">
                              <Reply className="h-3 w-3" />
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Show existing reply if any */}
                    {comment.hasReply && (
                      <div className="mt-4 p-3 bg-muted/50 rounded-lg border-l-4 border-primary">
                        <div className="flex items-center gap-2 mb-2">
                          <User className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Your Reply</span>
                          <span className="text-xs text-muted-foreground">• 1 minute ago</span>
                        </div>
                        <p className="text-sm text-foreground">
                          Thank you for your interest! Yes, we have them in black, white, and blue. 
                          Battery life is 30+ hours with ANC off. Feel free to ask any other questions! 🎧
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Auto-Comment Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Auto-Comment Settings
            </CardTitle>
            <CardDescription>
              Configure AI-powered automatic commenting on relevant posts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Filter Keywords</label>
                <Input 
                  placeholder="headphones, wireless, audio, music..." 
                  className="mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  Comments containing these keywords will be considered relevant
                </p>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Max Post Age (hours)</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select max age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="6">6 hours</SelectItem>
                    <SelectItem value="24">24 hours</SelectItem>
                    <SelectItem value="72">3 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">AI Prompt Template</label>
              <Textarea 
                placeholder="You are a helpful customer service representative. Respond professionally to customer inquiries about our products..."
                className="min-h-[100px]"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="gradient">
                Save Settings
              </Button>
              <Button variant="outline">
                Test AI Response
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}