export interface Campaign {
  id: string;
  name: string;
  status: 'draft' | 'scheduled' | 'active' | 'paused' | 'completed';
  type: 'email' | 'automation' | 'newsletter';
  recipients: number;
  sent: number;
  openRate: number;
  clickRate: number;
  createdAt: string;
  scheduledAt?: string;
}

export interface Contact {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: 'active' | 'unsubscribed' | 'bounced';
  tags: string[];
  createdAt: string;
  lastActivity: string;
}

export interface DashboardStats {
  totalSubscribers: number;
  subscribersGrowth: number;
  emailsSent: number;
  emailsGrowth: number;
  avgOpenRate: number;
  openRateChange: number;
  avgClickRate: number;
  clickRateChange: number;
}

export interface ChartDataPoint {
  name: string;
  emails: number;
  opens: number;
  clicks: number;
}

export const dashboardStats: DashboardStats = {
  totalSubscribers: 24853,
  subscribersGrowth: 12.5,
  emailsSent: 142650,
  emailsGrowth: 8.3,
  avgOpenRate: 42.8,
  openRateChange: 3.2,
  avgClickRate: 12.4,
  clickRateChange: -1.5,
};

export const campaignPerformanceData: ChartDataPoint[] = [
  { name: 'Jan', emails: 12000, opens: 5200, clicks: 1400 },
  { name: 'Feb', emails: 15000, opens: 6800, clicks: 1900 },
  { name: 'Mar', emails: 18000, opens: 8100, clicks: 2300 },
  { name: 'Apr', emails: 14000, opens: 6200, clicks: 1700 },
  { name: 'May', emails: 21000, opens: 9500, clicks: 2800 },
  { name: 'Jun', emails: 19000, opens: 8400, clicks: 2400 },
  { name: 'Jul', emails: 23000, opens: 10200, clicks: 3100 },
];

export const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale Announcement',
    status: 'completed',
    type: 'email',
    recipients: 15420,
    sent: 15420,
    openRate: 45.2,
    clickRate: 12.8,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Weekly Newsletter #23',
    status: 'active',
    type: 'newsletter',
    recipients: 12800,
    sent: 8450,
    openRate: 38.5,
    clickRate: 9.2,
    createdAt: '2024-01-18',
  },
  {
    id: '3',
    name: 'New Product Launch',
    status: 'scheduled',
    type: 'email',
    recipients: 24500,
    sent: 0,
    openRate: 0,
    clickRate: 0,
    createdAt: '2024-01-20',
    scheduledAt: '2024-01-25',
  },
  {
    id: '4',
    name: 'Welcome Series',
    status: 'active',
    type: 'automation',
    recipients: 3200,
    sent: 2850,
    openRate: 52.4,
    clickRate: 18.6,
    createdAt: '2024-01-10',
  },
  {
    id: '5',
    name: 'Re-engagement Campaign',
    status: 'paused',
    type: 'automation',
    recipients: 5600,
    sent: 2100,
    openRate: 28.3,
    clickRate: 5.4,
    createdAt: '2024-01-12',
  },
  {
    id: '6',
    name: 'Holiday Special Offer',
    status: 'draft',
    type: 'email',
    recipients: 0,
    sent: 0,
    openRate: 0,
    clickRate: 0,
    createdAt: '2024-01-22',
  },
];

export const recentActivity = [
  {
    id: '1',
    type: 'campaign_sent',
    message: 'Summer Sale Announcement sent to 15,420 recipients',
    time: '2 hours ago',
  },
  {
    id: '2',
    type: 'subscriber_added',
    message: '48 new subscribers from landing page',
    time: '4 hours ago',
  },
  {
    id: '3',
    type: 'automation_triggered',
    message: 'Welcome Series triggered for 12 contacts',
    time: '5 hours ago',
  },
  {
    id: '4',
    type: 'campaign_scheduled',
    message: 'New Product Launch scheduled for Jan 25',
    time: '1 day ago',
  },
  {
    id: '5',
    type: 'report_generated',
    message: 'Weekly performance report ready',
    time: '2 days ago',
  },
];

export const contacts: Contact[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    status: 'active',
    tags: ['premium', 'newsletter'],
    createdAt: '2023-06-15',
    lastActivity: '2024-01-20',
  },
  {
    id: '2',
    email: 'jane.smith@company.com',
    firstName: 'Jane',
    lastName: 'Smith',
    status: 'active',
    tags: ['enterprise', 'vip'],
    createdAt: '2023-08-22',
    lastActivity: '2024-01-19',
  },
  {
    id: '3',
    email: 'mike.wilson@startup.io',
    firstName: 'Mike',
    lastName: 'Wilson',
    status: 'unsubscribed',
    tags: ['newsletter'],
    createdAt: '2023-04-10',
    lastActivity: '2024-01-05',
  },
  {
    id: '4',
    email: 'sarah.johnson@tech.co',
    firstName: 'Sarah',
    lastName: 'Johnson',
    status: 'active',
    tags: ['premium', 'early-adopter'],
    createdAt: '2023-09-01',
    lastActivity: '2024-01-22',
  },
  {
    id: '5',
    email: 'alex.brown@design.io',
    firstName: 'Alex',
    lastName: 'Brown',
    status: 'bounced',
    tags: ['newsletter'],
    createdAt: '2023-07-20',
    lastActivity: '2023-12-15',
  },
  {
    id: '6',
    email: 'emma.davis@startup.com',
    firstName: 'Emma',
    lastName: 'Davis',
    status: 'active',
    tags: ['enterprise', 'newsletter'],
    createdAt: '2023-10-05',
    lastActivity: '2024-01-21',
  },
];

export const contactStats = {
  total: 24853,
  active: 22145,
  unsubscribed: 2108,
  bounced: 600,
};

// Automation data
export interface Automation {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'draft';
  trigger: string;
  triggerLabel: string;
  steps: string[];
  enrolled: number;
  completed: number;
  openRate: number;
  clickRate: number;
  lastTriggered: string;
}

export const automations: Automation[] = [
  {
    id: '1',
    name: 'Welcome Series',
    description: 'Onboard new subscribers with a 5-email series',
    status: 'active',
    trigger: 'signup',
    triggerLabel: 'New Signup',
    steps: ['Welcome Email', 'Day 2: Tips', 'Day 5: Resources', 'Day 7: Offer'],
    enrolled: 3240,
    completed: 2850,
    openRate: 52.4,
    clickRate: 18.6,
    lastTriggered: '2 hours ago',
  },
  {
    id: '2',
    name: 'Abandoned Cart Recovery',
    description: 'Re-engage users who left items in cart',
    status: 'active',
    trigger: 'abandoned_cart',
    triggerLabel: 'Cart Abandoned',
    steps: ['1hr Reminder', '24hr Follow-up', '72hr Discount'],
    enrolled: 1580,
    completed: 890,
    openRate: 45.8,
    clickRate: 22.3,
    lastTriggered: '30 minutes ago',
  },
  {
    id: '3',
    name: 'Re-engagement Campaign',
    description: 'Win back inactive subscribers',
    status: 'paused',
    trigger: 'date_based',
    triggerLabel: '30 Days Inactive',
    steps: ['Miss You Email', 'Special Offer', 'Last Chance'],
    enrolled: 5600,
    completed: 2100,
    openRate: 28.3,
    clickRate: 5.4,
    lastTriggered: '5 days ago',
  },
  {
    id: '4',
    name: 'Post-Purchase Follow-up',
    description: 'Thank customers and request reviews',
    status: 'active',
    trigger: 'purchase',
    triggerLabel: 'Purchase Made',
    steps: ['Thank You', 'How-to Guide', 'Review Request'],
    enrolled: 2890,
    completed: 2456,
    openRate: 61.2,
    clickRate: 15.8,
    lastTriggered: '1 hour ago',
  },
  {
    id: '5',
    name: 'Birthday Celebration',
    description: 'Send birthday wishes with special discount',
    status: 'draft',
    trigger: 'date_based',
    triggerLabel: 'Birthday',
    steps: ['Birthday Wish', 'Gift Code'],
    enrolled: 0,
    completed: 0,
    openRate: 0,
    clickRate: 0,
    lastTriggered: 'Never',
  },
  {
    id: '6',
    name: 'VIP Customer Rewards',
    description: 'Exclusive perks for top customers',
    status: 'active',
    trigger: 'tag_added',
    triggerLabel: 'VIP Tag Added',
    steps: ['Welcome to VIP', 'Exclusive Access', 'Monthly Perks'],
    enrolled: 456,
    completed: 380,
    openRate: 72.5,
    clickRate: 31.2,
    lastTriggered: '3 hours ago',
  },
];

export const automationStats = {
  activeWorkflows: 4,
  emailsSent30d: 45280,
  contactsInWorkflows: 8766,
  avgConversion: 18.4,
};

// Templates data
export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'custom' | 'prebuilt';
  usageCount: number;
  isFavorite: boolean;
  createdAt: string;
}

export const templates: Template[] = [
  {
    id: '1',
    name: 'Modern Welcome',
    description: 'Clean and professional welcome email',
    category: 'Welcome',
    type: 'prebuilt',
    usageCount: 156,
    isFavorite: true,
    createdAt: '2023-10-15',
  },
  {
    id: '2',
    name: 'Weekly Digest',
    description: 'Newsletter template with sections',
    category: 'Newsletter',
    type: 'custom',
    usageCount: 89,
    isFavorite: true,
    createdAt: '2023-11-20',
  },
  {
    id: '3',
    name: 'Flash Sale',
    description: 'Bold promotional template',
    category: 'Promotional',
    type: 'prebuilt',
    usageCount: 234,
    isFavorite: false,
    createdAt: '2023-09-01',
  },
  {
    id: '4',
    name: 'Order Confirmation',
    description: 'Transaction receipt template',
    category: 'Transactional',
    type: 'prebuilt',
    usageCount: 1250,
    isFavorite: false,
    createdAt: '2023-08-10',
  },
  {
    id: '5',
    name: 'We Miss You',
    description: 'Re-engagement with personal touch',
    category: 'Re-engagement',
    type: 'custom',
    usageCount: 45,
    isFavorite: false,
    createdAt: '2023-12-05',
  },
  {
    id: '6',
    name: 'Product Launch',
    description: 'Showcase new product features',
    category: 'Promotional',
    type: 'custom',
    usageCount: 67,
    isFavorite: true,
    createdAt: '2024-01-10',
  },
  {
    id: '7',
    name: 'Monthly Newsletter',
    description: 'Comprehensive monthly update',
    category: 'Newsletter',
    type: 'prebuilt',
    usageCount: 178,
    isFavorite: false,
    createdAt: '2023-07-22',
  },
  {
    id: '8',
    name: 'Shipping Update',
    description: 'Order tracking notification',
    category: 'Transactional',
    type: 'prebuilt',
    usageCount: 890,
    isFavorite: false,
    createdAt: '2023-08-15',
  },
];

// Analytics data
export const analyticsData = [
  { name: 'Jan', emails: 12000, opens: 5200, clicks: 1400 },
  { name: 'Feb', emails: 15000, opens: 6800, clicks: 1900 },
  { name: 'Mar', emails: 18000, opens: 8100, clicks: 2300 },
  { name: 'Apr', emails: 14000, opens: 6200, clicks: 1700 },
  { name: 'May', emails: 21000, opens: 9500, clicks: 2800 },
  { name: 'Jun', emails: 19000, opens: 8400, clicks: 2400 },
  { name: 'Jul', emails: 23000, opens: 10200, clicks: 3100 },
];

export const subscriberGrowthData = [
  { month: 'Aug', subscribers: 18500 },
  { month: 'Sep', subscribers: 19200 },
  { month: 'Oct', subscribers: 20800 },
  { month: 'Nov', subscribers: 21900 },
  { month: 'Dec', subscribers: 23100 },
  { month: 'Jan', subscribers: 24853 },
];

export const engagementByDevice = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 42 },
  { name: 'Tablet', value: 13 },
];

export const topCampaigns = [
  { name: 'Summer Sale Announcement', sent: 15420, openRate: 52.3 },
  { name: 'Welcome Series - Day 1', sent: 8450, openRate: 48.7 },
  { name: 'Product Launch Preview', sent: 12300, openRate: 45.2 },
  { name: 'Weekly Newsletter #22', sent: 24500, openRate: 41.8 },
  { name: 'Flash Sale Alert', sent: 18900, openRate: 39.5 },
];
