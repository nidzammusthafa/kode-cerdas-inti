import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  FileText, 
  MessageCircle, 
  MessagesSquare, 
  Package, 
  Bell,
  Settings,
  ChevronLeft,
  Facebook
} from 'lucide-react';

const sidebarItems = [
  { 
    label: 'Dashboard', 
    href: '/', 
    icon: LayoutDashboard,
    description: 'Overview & Analytics'
  },
  { 
    label: 'Posts', 
    href: '/posts', 
    icon: FileText,
    description: 'Create & Schedule'
  },
  { 
    label: 'Comments', 
    href: '/comments', 
    icon: MessageCircle,
    description: 'Monitor & Reply'
  },
  { 
    label: 'Messenger', 
    href: '/messenger', 
    icon: MessagesSquare,
    description: 'Real-time Chat'
  },
  { 
    label: 'Products', 
    href: '/products', 
    icon: Package,
    description: 'Manage Catalog'
  },
  { 
    label: 'Notifications', 
    href: '/notifications', 
    icon: Bell,
    description: 'Alerts & Updates'
  },
];

interface SidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export function Sidebar({ className, isOpen, onClose, isMobile }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // Auto-close sidebar on mobile when route changes
  React.useEffect(() => {
    if (isMobile && onClose) {
      onClose();
    }
  }, [location.pathname, isMobile, onClose]);

  return (
    <div className={cn(
      "relative flex flex-col h-full bg-gradient-subtle border-r border-border transition-all duration-300",
      // Desktop behavior
      !isMobile && (collapsed ? "w-16" : "w-64"),
      // Mobile behavior
      isMobile && "fixed inset-y-0 left-0 z-50 w-64 transform",
      isMobile && (isOpen ? "translate-x-0" : "-translate-x-full"),
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Facebook className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">FB Business</h1>
              <p className="text-xs text-muted-foreground">Dashboard</p>
            </div>
          </div>
        )}
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8"
          >
            <ChevronLeft className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180"
            )} />
          </Button>
        )}
        {isMobile && onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
                !isMobile && collapsed && "justify-center px-2"
              )}
            >
              <Icon className={cn(
                "h-5 w-5 flex-shrink-0",
                isActive && "text-primary-foreground",
                !collapsed && "group-hover:scale-110 transition-transform"
              )} />
              {(!collapsed || isMobile) && (
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  <div className={cn(
                    "text-xs opacity-60",
                    isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}>
                    {item.description}
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border">
        <Link
          to="/settings"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200",
            !isMobile && collapsed && "justify-center px-2"
          )}
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {(!collapsed || isMobile) && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
}