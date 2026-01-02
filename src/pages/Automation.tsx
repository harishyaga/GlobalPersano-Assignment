import { useState } from 'react';
import { Plus, Play, Pause, MoreHorizontal, Zap, Users, Mail, Clock, ArrowRight } from 'lucide-react';
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { automations, automationStats } from '@/data/mockData';
import { cn } from '@/lib/utils';

const statusConfig = {
  active: { label: 'Active', className: 'bg-success/10 text-success border-success/20', icon: Play },
  paused: { label: 'Paused', className: 'bg-warning/10 text-warning border-warning/20', icon: Pause },
  draft: { label: 'Draft', className: 'bg-muted text-muted-foreground border-muted', icon: Clock },
};

const triggerIcons: Record<string, React.ElementType> = {
  signup: Users,
  purchase: Zap,
  abandoned_cart: Clock,
  date_based: Clock,
  tag_added: Zap,
};

export default function Automation() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        title="Automation"
        subtitle="Create automated email workflows and sequences"
        actions={
          <Button variant="accent" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Automation
          </Button>
        }
      />

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="card-elevated">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Workflows</p>
                  <p className="text-2xl font-bold text-foreground">{automationStats.activeWorkflows}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Emails Sent (30d)</p>
                  <p className="text-2xl font-bold text-foreground">{automationStats.emailsSent30d.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-info/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-info" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contacts in Workflows</p>
                  <p className="text-2xl font-bold text-foreground">{automationStats.contactsInWorkflows.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Conversion</p>
                  <p className="text-2xl font-bold text-foreground">{automationStats.avgConversion}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Automation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {automations.map((automation) => {
            const StatusIcon = statusConfig[automation.status].icon;
            const TriggerIcon = triggerIcons[automation.trigger] || Zap;
            
            return (
              <Card key={automation.id} className="card-elevated hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                        <Zap className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{automation.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{automation.description}</p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Workflow</DropdownMenuItem>
                        <DropdownMenuItem>View Report</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Workflow Steps Preview */}
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg overflow-x-auto">
                    <div className="flex items-center gap-1 shrink-0">
                      <TriggerIcon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium">{automation.triggerLabel}</span>
                    </div>
                    {automation.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-1 shrink-0">
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        <div className="px-2 py-1 bg-background rounded text-xs">{step}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-lg font-semibold text-foreground">{automation.enrolled.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Enrolled</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">{automation.completed.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-success">{automation.openRate}%</p>
                      <p className="text-xs text-muted-foreground">Open Rate</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-primary">{automation.clickRate}%</p>
                      <p className="text-xs text-muted-foreground">Click Rate</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t">
                    <Badge variant="outline" className={cn('text-xs', statusConfig[automation.status].className)}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {statusConfig[automation.status].label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Last triggered: {automation.lastTriggered}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
