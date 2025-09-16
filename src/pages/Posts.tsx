import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share,
  MoreHorizontal,
  Edit,
  Trash2,
  FileText
} from 'lucide-react';

// Mock data
const posts = [
  {
    id: 1,
    content: 'New collection of premium headphones now available! 🎧 Perfect sound quality for music lovers. Check out our latest wireless models with noise cancellation.',
    scheduledFor: '2024-03-15 10:00',
    status: 'scheduled',
    groups: ['Tech Lovers', 'Audio Enthusiasts', 'Electronics Hub'],
    image: '/api/placeholder/400/200',
    interactions: { views: 1247, likes: 89, comments: 23, shares: 12 },
    createdAt: '2024-03-14 15:30'
  },
  {
    id: 2,
    content: 'Flash sale alert! 50% off on all wireless chargers. Limited time offer - grab yours now! ⚡ Free shipping on orders above $50.',
    scheduledFor: '2024-03-14 14:30',
    status: 'published',
    groups: ['Electronics Deal', 'Mobile Accessories'],
    image: '/api/placeholder/400/200',
    interactions: { views: 2156, likes: 156, comments: 45, shares: 28 },
    createdAt: '2024-03-14 12:00'
  },
  {
    id: 3,
    content: 'Customer review spotlight: "Amazing product quality and fast delivery. The sound quality exceeded my expectations!" ⭐⭐⭐⭐⭐',
    scheduledFor: '2024-03-14 09:15',
    status: 'published',
    groups: ['Product Reviews', 'Customer Testimonials'],
    interactions: { views: 892, likes: 67, comments: 12, shares: 8 },
    createdAt: '2024-03-13 18:45'
  },
  {
    id: 4,
    content: 'Behind the scenes: Our quality control process ensures every product meets our high standards. Here\'s how we test each item before shipping.',
    scheduledFor: '2024-03-13 16:00',
    status: 'published',
    groups: ['Behind The Scenes', 'Quality Assurance'],
    image: '/api/placeholder/400/200',
    interactions: { views: 543, likes: 34, comments: 8, shares: 5 },
    createdAt: '2024-03-13 14:20'
  },
  {
    id: 5,
    content: 'Weekend special: Buy 2 get 1 free on all phone cases! Perfect protection for your devices. Multiple colors and designs available.',
    scheduledFor: '2024-03-12 11:00',
    status: 'draft',
    groups: ['Weekend Deals', 'Phone Accessories'],
    interactions: { views: 0, likes: 0, comments: 0, shares: 0 },
    createdAt: '2024-03-12 10:15'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published': return 'default';
    case 'scheduled': return 'secondary';
    case 'draft': return 'outline';
    default: return 'outline';
  }
};

export default function Posts() {
  return (
    <DashboardLayout 
      title="Posts Management" 
      description="Create, schedule, and monitor your Facebook posts"
    >
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="gradient" className="gap-2">
            <Plus className="h-4 w-4" />
            Create Post
          </Button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={getStatusColor(post.status)} className="text-xs capitalize">
                        {post.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.status === 'scheduled' ? 'Scheduled for' : 'Posted'} {post.scheduledFor}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Post Content */}
                <p className="text-sm text-foreground line-clamp-3">
                  {post.content}
                </p>

                {/* Post Image Placeholder */}
                {post.image && (
                  <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center">
                    <div className="text-muted-foreground">
                      📸 Image Preview
                    </div>
                  </div>
                )}

                {/* Groups */}
                <div className="flex flex-wrap gap-1">
                  {post.groups.slice(0, 2).map((group, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {group}
                    </Badge>
                  ))}
                  {post.groups.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.groups.length - 2} more
                    </Badge>
                  )}
                </div>

                {/* Interactions */}
                {post.status !== 'draft' && (
                  <div className="flex items-center justify-between pt-2 border-t border-border">
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
                    
                    {post.status === 'published' && (
                      <Button variant="outline" size="sm" className="text-xs">
                        View Post
                      </Button>
                    )}
                  </div>
                )}

                {/* Draft Actions */}
                {post.status === 'draft' && (
                  <div className="flex items-center gap-2 pt-2 border-t border-border">
                    <Button size="sm" className="flex-1">
                      Schedule
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State for demonstration */}
        {posts.length === 0 && (
          <Card className="p-12 text-center">
            <div className="mx-auto w-24 h-24 bg-gradient-subtle rounded-full flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
            <p className="text-muted-foreground mb-4">
              Start creating engaging content for your Facebook groups
            </p>
            <Button variant="gradient">
              Create Your First Post
            </Button>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}