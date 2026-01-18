import { Mail, Zap, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Campaign } from '@/data/mockData';

interface CampaignTypeBadgeProps {
  type: Campaign['type'];
}

const typeConfig: Record<Campaign['type'], { icon: React.ElementType; label: string; color: string }> = {
  email: { icon: Mail, label: 'Email', color: 'text-primary' },
  automation: { icon: Zap, label: 'Automation', color: 'text-warning' },
  newsletter: { icon: Newspaper, label: 'Newsletter', color: 'text-info' },
};

export function CampaignTypeBadge({ type }: CampaignTypeBadgeProps) {
  const { icon: Icon, label, color } = typeConfig[type];

  return (
    <div className={cn('flex items-center gap-1.5 text-sm', color)}>
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}
