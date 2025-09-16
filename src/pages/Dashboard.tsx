import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  MessageCircle, 
  MessagesSquare, 
  TrendingUp,
  Clock,
  Users,
  Eye,
  Heart,
  Share,
  MoreHorizontal,
  Plus
} from 'lucide-react';

// Mock data
const stats = [
  {
    title: 'Total Posts',
    value: 156,
    description: 'Published this month',
    icon: <FileText className="h-4 w-4" />,
    trend: { value: 12, isPositive: true }
  },
  {
    title: 'Comments',
    value: '2,847',
    description: 'Comments received',
    icon: <MessageCircle className="h-4 w-4" />,
    trend: { value: 8, isPositive: true }
  },
  {
    title: 'Messages',
    value: 89,
    description: 'Active conversations',
    icon: <MessagesSquare className="h-4 w-4" />,
    trend: { value: -3, isPositive: false }
  },
  {
    title: 'Engagement',
    value: '94.2%',
    description: 'Response rate',
    icon: <TrendingUp className="h-4 w-4" />,
    trend: { value: 5, isPositive: true }
  }
];

const recentPosts = [
  {
    id: 1,
    content: 'New collection of premium headphones now available! 🎧 Perfect sound quality for music lovers.',
    scheduledFor: '2024-03-15 10:00',
    status: 'scheduled',
    groups: ['Tech Lovers', 'Audio Enthusiasts'],
    interactions: { views: 1247, likes: 89, comments: 23, shares: 12 }
  },
  {
    id: 2,
    content: 'Flash sale alert! 50% off on all wireless chargers. Limited time offer - grab yours now! ⚡',
    scheduledFor: '2024-03-14 14:30',
    status: 'published',
    groups: ['Electronics Deal', 'Mobile Accessories'],
    interactions: { views: 2156, likes: 156, comments: 45, shares: 28 }
  },
  {
    id: 3,
    content: 'Customer review: "Amazing product quality and fast delivery. Highly recommended!" ⭐⭐⭐⭐⭐',
    scheduledFor: '2024-03-14 09:15',
    status: 'published',
    groups: ['Product Reviews'],
    interactions: { views: 892, likes: 67, comments: 12, shares: 8 }
  }
];

const recentNotifications = [
  { id: 1, type: 'comment', message: 'New comment on "Premium Headphones" post', time: '2 minutes ago' },
  { id: 2, type: 'message', message: 'New message from Sarah Johnson', time: '5 minutes ago' },
  { id: 3, type: 'comment', message: 'Auto-comment posted successfully', time: '15 minutes ago' },
  { id: 4, type: 'scheduled', message: 'Post scheduled for 10:00 AM', time: '1 hour ago' }
];

import heroImage from "@/assets/hero-dashboard.jpg";

export default function Dashboard() {
  return (
    <DashboardLayout 
      title="Dashboard" 
      description="Monitor your Facebook business performance and activities"
    >
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-primary p-8 text-white">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Welcome back! 👋</h2>
            <p className="text-white/80 mb-4">
              Your Facebook business is performing well. Here's your overview for today.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" className="gap-2">
                <Plus className="h-4 w-4" />
                New Post
              </Button>
              <Button variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
                <TrendingUp className="h-4 w-4" />
                View Analytics
              </Button>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
            <img 
              src={heroImage} 
              alt="Dashboard Overview" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
              trend={stat.trend}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Posts</CardTitle>
                    <CardDescription>
                      Your latest Facebook posts and their performance
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <p className="text-sm text-foreground line-clamp-2 mb-2">
                          {post.content}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.scheduledFor}
                          <Badge 
                            variant={post.status === 'published' ? 'default' : 'secondary'} 
                            className="text-xs"
                          >
                            {post.status}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.groups.map((group, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {group}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.interactions.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {post.interactions.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {post.interactions.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share className="h-3 w-3" />
                          {post.interactions.shares}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Notifications */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest notifications and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentNotifications.map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      notification.type === 'comment' ? 'bg-primary' :
                      notification.type === 'message' ? 'bg-success' :
                      notification.type === 'scheduled' ? 'bg-warning' : 'bg-muted'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-4">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}