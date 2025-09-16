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
  Search, 
  Filter, 
  Bell, 
  MessageCircle, 
  FileText, 
  Calendar,
  User,
  CheckCheck,
  Trash2,
  Settings,
  Volume2,
  VolumeX
} from 'lucide-react';

// Mock data
const notifications = [
  {
    id: 1,
    type: 'comment',
    title: 'New comment on your post',
    message: 'Sarah Johnson commented: "These headphones look amazing! Do you have them in black color?"',
    time: '2 minutes ago',
    isRead: false,
    actionUrl: '/comments',
    priority: 'high'
  },
  {
    id: 2,
    type: 'message',
    title: 'New message received',
    message: 'Mike Chen sent you a message about wireless chargers',
    time: '5 minutes ago',
    isRead: false,
    actionUrl: '/messenger',
    priority: 'high'
  },
  {
    id: 3,
    type: 'scheduled',
    title: 'Post scheduled successfully',
    message: 'Your post "Weekend Special Deals" has been scheduled for tomorrow at 10:00 AM',
    time: '15 minutes ago',
    isRead: true,
    actionUrl: '/posts',
    priority: 'medium'
  },
  {
    id: 4,
    type: 'comment',
    title: 'Auto-comment posted',
    message: 'AI automatically replied to a relevant comment on "Flash Sale" post',
    time: '30 minutes ago',
    isRead: true,
    actionUrl: '/comments',
    priority: 'low'
  },
  {
    id: 5,
    type: 'system',
    title: 'Low stock alert',
    message: 'Bluetooth Speaker is running low on stock (23 items remaining)',
    time: '1 hour ago',
    isRead: false,
    actionUrl: '/products',
    priority: 'medium'
  },
  {
    id: 6,
    type: 'engagement',
    title: 'High engagement detected',
    message: 'Your "Customer Review" post is performing 200% better than average',
    time: '2 hours ago',
    isRead: true,
    actionUrl: '/dashboard',
    priority: 'medium'
  },
  {
    id: 7,
    type: 'message',
    title: 'New customer inquiry',
    message: 'Emma Rodriguez is asking about iPhone 15 Pro cases',
    time: '3 hours ago',
    isRead: true,
    actionUrl: '/messenger',
    priority: 'high'
  },
  {
    id: 8,
    type: 'system',
    title: 'Product out of stock',
    message: 'USB-C Cable Set is now out of stock. Consider restocking soon.',
    time: '4 hours ago',
    isRead: false,
    actionUrl: '/products',
    priority: 'high'
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'comment': return MessageCircle;
    case 'message': return MessageCircle;
    case 'scheduled': return Calendar;
    case 'system': return Bell;
    case 'engagement': return FileText;
    default: return Bell;
  }
};

const getNotificationColor = (type: string) => {
  switch (type) {
    case 'comment': return 'primary';
    case 'message': return 'success';
    case 'scheduled': return 'secondary';
    case 'system': return 'warning';
    case 'engagement': return 'primary';
    default: return 'secondary';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'destructive';
    case 'medium': return 'warning';
    case 'low': return 'secondary';
    default: return 'secondary';
  }
};

export default function Notifications() {
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <DashboardLayout 
      title="Notifications" 
      description="Stay updated with all your business activities"
    >
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search notifications..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="comment">Comments</SelectItem>
                <SelectItem value="message">Messages</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
                <SelectItem value="read">Read</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <CheckCheck className="h-4 w-4" />
              Mark All Read
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">{notifications.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-destructive" />
                <div>
                  <p className="text-sm text-muted-foreground">Unread</p>
                  <p className="text-2xl font-bold">{unreadCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm text-muted-foreground">Messages</p>
                  <p className="text-2xl font-bold">
                    {notifications.filter(n => n.type === 'message').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Comments</p>
                  <p className="text-2xl font-bold">
                    {notifications.filter(n => n.type === 'comment').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Notifications</CardTitle>
                <CardDescription>
                  {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All notifications are read'}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-xs">
                Last updated: 2 min ago
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {notifications.map((notification) => {
              const Icon = getNotificationIcon(notification.type);
              
              return (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md cursor-pointer ${
                    !notification.isRead 
                      ? 'bg-primary/5 border-primary/20' 
                      : 'bg-card hover:bg-accent/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-${getNotificationColor(notification.type)}/10`}>
                      <Icon className={`h-4 w-4 text-${getNotificationColor(notification.type)}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-medium text-sm ${
                          !notification.isRead ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {notification.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={getPriorityColor(notification.priority)} 
                            className="text-xs"
                          >
                            {notification.priority}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {!notification.isRead && (
                            <Button variant="ghost" size="sm" className="text-xs h-7">
                              Mark as Read
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" className="text-xs h-7">
                            View Details
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <VolumeX className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Notification Settings
            </CardTitle>
            <CardDescription>
              Customize how and when you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Email Notifications</h4>
                <div className="space-y-3">
                  {[
                    { label: 'New Comments', enabled: true },
                    { label: 'New Messages', enabled: true },
                    { label: 'Post Scheduled', enabled: false },
                    { label: 'System Alerts', enabled: true }
                  ].map((setting, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm">{setting.label}</span>
                      <Button variant={setting.enabled ? "default" : "outline"} size="sm">
                        {setting.enabled ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Push Notifications</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Instant Messages', enabled: true },
                    { label: 'High Priority Comments', enabled: true },
                    { label: 'Stock Alerts', enabled: true },
                    { label: 'Performance Updates', enabled: false }
                  ].map((setting, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm">{setting.label}</span>
                      <Button variant={setting.enabled ? "default" : "outline"} size="sm">
                        {setting.enabled ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <Button variant="gradient">
                Save Settings
              </Button>
              <Button variant="outline">
                Reset to Defaults
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}