import { cn } from '@/lib/utils';
import { Campaign } from '@/data/mockData';

interface CampaignStatusBadgeProps {
  status: Campaign['status'];
}

const statusStyles: Record<Campaign['status'], string> = {
  draft: 'bg-muted text-muted-foreground',
  scheduled: 'bg-info/10 text-info',
  active: 'bg-success/10 text-success',
  paused: 'bg-warning/10 text-warning',
  completed: 'bg-primary/10 text-primary',
};

const statusLabels: Record<Campaign['status'], string> = {
  draft: 'Draft',
  scheduled: 'Scheduled',
  active: 'Active',
  paused: 'Paused',
  completed: 'Completed',
};

export function CampaignStatusBadge({ status }: CampaignStatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        statusStyles[status]
      )}
    >
      <span
        className={cn(
          'w-1.5 h-1.5 rounded-full mr-1.5',
          status === 'active' && 'bg-success animate-pulse',
          status === 'scheduled' && 'bg-info',
          status === 'paused' && 'bg-warning',
          status === 'completed' && 'bg-primary',
          status === 'draft' && 'bg-muted-foreground'
        )}
      />
      {statusLabels[status]}
    </span>
  );
}
