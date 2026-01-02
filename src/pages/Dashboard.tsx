import { Users, Mail, MousePointerClick, Eye } from 'lucide-react';
import { AppHeader } from '@/components/layout/AppHeader';
import { StatCard } from '@/components/dashboard/StatCard';
import { CampaignPerformanceChart } from '@/components/dashboard/CampaignPerformanceChart';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { dashboardStats } from '@/data/mockData';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        title="Dashboard"
        subtitle="Welcome back, Hari Prasad. Here's what's happening."
      />

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Subscribers"
            value={dashboardStats.totalSubscribers}
            change={dashboardStats.subscribersGrowth}
            icon={Users}
            iconColor="bg-primary/10 text-primary"
            delay={0}
          />
          <StatCard
            title="Emails Sent"
            value={dashboardStats.emailsSent}
            change={dashboardStats.emailsGrowth}
            icon={Mail}
            iconColor="bg-success/10 text-success"
            delay={50}
          />
          <StatCard
            title="Avg. Open Rate"
            value={`${dashboardStats.avgOpenRate}%`}
            change={dashboardStats.openRateChange}
            icon={Eye}
            iconColor="bg-info/10 text-info"
            delay={100}
          />
          <StatCard
            title="Avg. Click Rate"
            value={`${dashboardStats.avgClickRate}%`}
            change={dashboardStats.clickRateChange}
            icon={MousePointerClick}
            iconColor="bg-accent/10 text-accent"
            delay={150}
          />
        </div>

        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CampaignPerformanceChart />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}
