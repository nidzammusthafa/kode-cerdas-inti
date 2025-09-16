import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Send, 
  Search, 
  Phone, 
  Video, 
  MoreHorizontal,
  Paperclip,
  Smile,
  Check,
  CheckCheck,
  MessagesSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data
const conversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Thanks for the quick response! When will the headphones be back in stock?',
    lastMessageTime: '2m ago',
    unreadCount: 2,
    isOnline: true
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Perfect! I\'ll take 3 of those wireless chargers.',
    lastMessageTime: '15m ago',
    unreadCount: 0,
    isOnline: false
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Hi! I saw your post about the phone cases. Do you have iPhone 15 Pro cases?',
    lastMessageTime: '1h ago',
    unreadCount: 1,
    isOnline: true
  },
  {
    id: 4,
    name: 'David Kim',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Great service! The delivery was super fast.',
    lastMessageTime: '2h ago',
    unreadCount: 0,
    isOnline: false
  },
  {
    id: 5,
    name: 'Lisa Wang',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Can you send me more details about the warranty?',
    lastMessageTime: '3h ago',
    unreadCount: 0,
    isOnline: true
  }
];

const messages = [
  {
    id: 1,
    senderId: 1,
    senderName: 'Sarah Johnson',
    content: 'Hi! I\'m interested in your premium headphones. Are they still available?',
    timestamp: '10:30 AM',
    isRead: true,
    isOwn: false
  },
  {
    id: 2,
    senderId: 'me',
    senderName: 'You',
    content: 'Hi Sarah! Yes, we have them in stock. They\'re our best-selling model with excellent noise cancellation.',
    timestamp: '10:32 AM',
    isRead: true,
    isOwn: true
  },
  {
    id: 3,
    senderId: 1,
    senderName: 'Sarah Johnson',
    content: 'That sounds perfect! What\'s the price and do you offer any warranty?',
    timestamp: '10:35 AM',
    isRead: true,
    isOwn: false
  },
  {
    id: 4,
    senderId: 'me',
    senderName: 'You',
    content: 'They\'re $199 with a 2-year warranty included. Free shipping if you order today! 📦',
    timestamp: '10:37 AM',
    isRead: true,
    isOwn: true
  },
  {
    id: 5,
    senderId: 1,
    senderName: 'Sarah Johnson',
    content: 'Thanks for the quick response! When will the headphones be back in stock?',
    timestamp: '10:45 AM',
    isRead: false,
    isOwn: false
  }
];

export default function Messenger() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <DashboardLayout 
      title="Messenger" 
      description="Real-time customer conversations and support"
    >
      <div className="flex h-[calc(100vh-200px)] gap-6">
        {/* Conversations List */}
        <Card className="w-80 flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <Badge variant="secondary" className="text-xs">
                {conversations.filter(c => c.unreadCount > 0).length} unread
              </Badge>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto space-y-2 px-4">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
                  selectedConversation?.id === conversation.id 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent"
                )}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {conversation.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium truncate">{conversation.name}</h4>
                    <div className="flex items-center gap-1">
                      <span className="text-xs opacity-70">{conversation.lastMessageTime}</span>
                      {conversation.unreadCount > 0 && (
                        <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {conversation.unreadCount}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className={cn(
                    "text-sm truncate mt-1",
                    selectedConversation?.id === conversation.id 
                      ? "text-primary-foreground/80" 
                      : "text-muted-foreground"
                  )}>
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <CardHeader className="pb-3 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedConversation.avatar} />
                        <AvatarFallback>{selectedConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {selectedConversation.isOnline && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedConversation.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedConversation.isOnline ? 'Online' : 'Last seen 2h ago'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-2",
                      message.isOwn ? "justify-end" : "justify-start"
                    )}
                  >
                    {!message.isOwn && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={selectedConversation.avatar} />
                        <AvatarFallback className="text-xs">
                          {selectedConversation.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className={cn(
                      "max-w-[70%] space-y-1",
                      message.isOwn ? "items-end" : "items-start"
                    )}>
                      <div className={cn(
                        "px-4 py-2 rounded-2xl",
                        message.isOwn 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted"
                      )}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <div className="flex items-center gap-1 px-2">
                        <span className="text-xs text-muted-foreground">
                          {message.timestamp}
                        </span>
                        {message.isOwn && (
                          <div className="text-primary">
                            {message.isRead ? (
                              <CheckCheck className="h-3 w-3" />
                            ) : (
                              <Check className="h-3 w-3" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="pr-10"
                    />
                    <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                      <Smile className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-subtle rounded-full flex items-center justify-center mx-auto mb-4">
        <MessagesSquare className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Select a conversation</h3>
                <p className="text-muted-foreground">
                  Choose a conversation from the sidebar to start messaging
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
}