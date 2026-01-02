import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Send,
  Users,
  Mail,
  BarChart3,
  Settings,
  ChevronLeft,
  Zap,
  HelpCircle,
  Globe,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  icon: React.ElementType;
  path: string;
}

const mainNavItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { label: 'Campaigns', icon: Send, path: '/campaigns' },
  { label: 'Automation', icon: Zap, path: '/automation' },
  { label: 'Contacts', icon: Users, path: '/contacts' },
  { label: 'Templates', icon: Mail, path: '/templates' },
  { label: 'Analytics', icon: BarChart3, path: '/analytics' },
];

const bottomNavItems: NavItem[] = [
 
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const renderNavItem = (item: NavItem) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;

    return (
      <NavLink
        key={item.path}
        to={item.path}
        className={cn(
          'sidebar-item group',
          isActive && 'active'
        )}
      >
        <Icon className={cn('h-5 w-5 shrink-0', isActive ? 'text-sidebar-primary-foreground' : 'text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground')} />
        {!collapsed && (
          <span className="truncate">{item.label}</span>
        )}
      </NavLink>
    );
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-gradient-dark transition-all duration-300 ease-in-out',
        collapsed ? 'w-[72px]' : 'w-64'
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent">
              <Globe className="h-5 w-5 text-accent-foreground" />
            </div>
            {!collapsed && (
              <span className="font-display font-bold text-lg text-sidebar-foreground">
                Globopersona
              </span>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {mainNavItems.map(renderNavItem)}
          </div>
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-sidebar-border px-3 py-4">
          <div className="space-y-1">
            {bottomNavItems.map(renderNavItem)}
          </div>
        </div>

        {/* Collapse Button */}
        <div className="border-t border-sidebar-border p-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="w-full justify-center text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <ChevronLeft
              className={cn(
                'h-4 w-4 transition-transform duration-300',
                collapsed && 'rotate-180'
              )}
            />
            {!collapsed && <span className="ml-2">Collapse</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
}
