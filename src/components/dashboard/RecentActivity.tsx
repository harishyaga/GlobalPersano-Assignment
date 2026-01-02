import { Send, UserPlus, Zap, Calendar, FileText } from 'lucide-react';
import { recentActivity } from '@/data/mockData';
import { cn } from '@/lib/utils';

const activityIcons: Record<string, { icon: React.ElementType; color: string }> = {
  campaign_sent: { icon: Send, color: 'bg-primary/10 text-primary' },
  subscriber_added: { icon: UserPlus, color: 'bg-success/10 text-success' },
  automation_triggered: { icon: Zap, color: 'bg-warning/10 text-warning' },
  campaign_scheduled: { icon: Calendar, color: 'bg-info/10 text-info' },
  report_generated: { icon: FileText, color: 'bg-accent/10 text-accent' },
};

export function RecentActivity() {
  return (
    <div className="stat-card animate-slide-up" style={{ animationDelay: '300ms' }}>
      <div className="mb-6">
        <h3 className="font-display font-semibold text-lg text-foreground">
          Recent Activity
        </h3>
        <p className="text-sm text-muted-foreground">
          Latest actions in your account
        </p>
      </div>

      <div className="space-y-4">
        {recentActivity.map((activity, index) => {
          const { icon: Icon, color } = activityIcons[activity.type] || {
            icon: Send,
            color: 'bg-muted text-muted-foreground',
          };

          return (
            <div
              key={activity.id}
              className={cn(
                'flex items-start gap-4 p-3 rounded-lg transition-colors hover:bg-muted/50',
                'animate-fade-in'
              )}
              style={{ animationDelay: `${400 + index * 50}ms` }}
            >
              <div className={cn('rounded-lg p-2', color)}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity.message}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
