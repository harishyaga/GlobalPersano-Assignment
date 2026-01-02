import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { campaignPerformanceData } from '@/data/mockData';

export function CampaignPerformanceChart() {
  return (
    <div className="stat-card h-[400px] animate-slide-up" style={{ animationDelay: '200ms' }}>
      <div className="mb-6">
        <h3 className="font-display font-semibold text-lg text-foreground">
          Campaign Performance
        </h3>
        <p className="text-sm text-muted-foreground">
          Email sends, opens, and clicks over time
        </p>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={campaignPerformanceData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorEmails" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(195, 85%, 32%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(195, 85%, 32%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOpens" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(152, 70%, 40%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(152, 70%, 40%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(15, 90%, 55%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(15, 90%, 55%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(220, 10%, 45%)', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(220, 10%, 45%)', fontSize: 12 }}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(0, 0%, 100%)',
              border: '1px solid hsl(210, 20%, 90%)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px hsl(220, 25%, 10%, 0.1)',
            }}
            formatter={(value: number) => [value.toLocaleString(), '']}
          />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ paddingBottom: '20px' }}
          />
          <Area
            type="monotone"
            dataKey="emails"
            name="Emails Sent"
            stroke="hsl(195, 85%, 32%)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorEmails)"
          />
          <Area
            type="monotone"
            dataKey="opens"
            name="Opens"
            stroke="hsl(152, 70%, 40%)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorOpens)"
          />
          <Area
            type="monotone"
            dataKey="clicks"
            name="Clicks"
            stroke="hsl(15, 90%, 55%)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorClicks)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
