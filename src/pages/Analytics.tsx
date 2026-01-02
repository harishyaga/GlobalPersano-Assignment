import { TrendingUp, TrendingDown, Mail, Eye, MousePointerClick, Users, ArrowUpRight } from 'lucide-react';
import { AppHeader } from '@/components/layout/AppHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { analyticsData, subscriberGrowthData, engagementByDevice, topCampaigns } from '@/data/mockData';
import { cn } from '@/lib/utils';

const chartConfig = {
  emails: { label: 'Emails Sent', color: 'hsl(var(--primary))' },
  opens: { label: 'Opens', color: 'hsl(var(--success))' },
  clicks: { label: 'Clicks', color: 'hsl(var(--accent))' },
  subscribers: { label: 'Subscribers', color: 'hsl(var(--primary))' },
};

const DEVICE_COLORS = ['hsl(var(--primary))', 'hsl(var(--success))', 'hsl(var(--accent))'];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        title="Analytics"
        subtitle="Track your email marketing performance"
        actions={
          <Select defaultValue="30d">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
        }
      />

      <div className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Emails Sent"
            value="142,650"
            change={8.3}
            icon={Mail}
            iconColor="bg-primary/10 text-primary"
          />
          <MetricCard
            title="Average Open Rate"
            value="42.8%"
            change={3.2}
            icon={Eye}
            iconColor="bg-success/10 text-success"
          />
          <MetricCard
            title="Average Click Rate"
            value="12.4%"
            change={-1.5}
            icon={MousePointerClick}
            iconColor="bg-accent/10 text-accent"
          />
          <MetricCard
            title="Subscriber Growth"
            value="+2,453"
            change={12.5}
            icon={Users}
            iconColor="bg-info/10 text-info"
          />
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Email Performance Chart */}
          <Card className="card-elevated lg:col-span-2">
            <CardHeader>
              <CardTitle>Email Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="area" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="area">Area</TabsTrigger>
                  <TabsTrigger value="line">Line</TabsTrigger>
                  <TabsTrigger value="bar">Bar</TabsTrigger>
                </TabsList>

                <TabsContent value="area" className="h-[300px]">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <AreaChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-xs" />
                      <YAxis className="text-xs" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="emails"
                        stackId="1"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.2}
                      />
                      <Area
                        type="monotone"
                        dataKey="opens"
                        stackId="2"
                        stroke="hsl(var(--success))"
                        fill="hsl(var(--success))"
                        fillOpacity={0.2}
                      />
                      <Area
                        type="monotone"
                        dataKey="clicks"
                        stackId="3"
                        stroke="hsl(var(--accent))"
                        fill="hsl(var(--accent))"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ChartContainer>
                </TabsContent>

                <TabsContent value="line" className="h-[300px]">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <LineChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-xs" />
                      <YAxis className="text-xs" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="emails" stroke="hsl(var(--primary))" strokeWidth={2} />
                      <Line type="monotone" dataKey="opens" stroke="hsl(var(--success))" strokeWidth={2} />
                      <Line type="monotone" dataKey="clicks" stroke="hsl(var(--accent))" strokeWidth={2} />
                    </LineChart>
                  </ChartContainer>
                </TabsContent>

                <TabsContent value="bar" className="h-[300px]">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <BarChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-xs" />
                      <YAxis className="text-xs" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="emails" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="opens" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="clicks" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Engagement by Device */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Engagement by Device</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={engagementByDevice}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {engagementByDevice.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={DEVICE_COLORS[index % DEVICE_COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                {engagementByDevice.map((device, index) => (
                  <div key={device.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: DEVICE_COLORS[index] }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {device.name} ({device.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Subscriber Growth */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Subscriber Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <AreaChart data={subscriberGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="subscribers"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Top Campaigns */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Top Performing Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCampaigns.map((campaign, index) => (
                  <div key={campaign.name} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{campaign.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {campaign.sent.toLocaleString()} sent
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-success">{campaign.openRate}%</p>
                      <p className="text-xs text-muted-foreground">Open rate</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
}: {
  title: string;
  value: string;
  change: number;
  icon: React.ElementType;
  iconColor: string;
}) {
  const isPositive = change >= 0;

  return (
    <Card className="card-elevated">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className={cn('h-10 w-10 rounded-lg flex items-center justify-center', iconColor)}>
            <Icon className="h-5 w-5" />
          </div>
          <div className={cn(
            'flex items-center gap-1 text-sm font-medium',
            isPositive ? 'text-success' : 'text-destructive'
          )}>
            {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            {Math.abs(change)}%
          </div>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}
