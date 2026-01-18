import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Send, Clock, Eye } from 'lucide-react';
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CampaignEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = id && id !== 'new';

  const [formData, setFormData] = useState({
    name: isEditing ? 'Summer Sale Announcement' : '',
    subject: isEditing ? '🌞 Don\'t Miss Our Biggest Summer Sale!' : '',
    previewText: isEditing ? 'Up to 50% off on selected items. Limited time only!' : '',
    fromName: 'Globopersona Team',
    fromEmail: 'hello@globopersona.com',
    replyTo: 'support@globopersona.com',
    audienceList: 'all-subscribers',
    content: isEditing
      ? '<h1>Summer Sale is Here!</h1><p>Get ready for amazing deals...</p>'
      : '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        title={isEditing ? 'Edit Campaign' : 'Create Campaign'}
        subtitle={isEditing ? 'Modify your campaign settings and content' : 'Set up a new email campaign'}
      />

      <div className="p-6">
        {/* Back Button & Actions */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/campaigns')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Campaigns
          </Button>

          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <Button variant="outline" className="gap-2">
              <Clock className="h-4 w-4" />
              Schedule
            </Button>
            <Button variant="default" className="gap-2">
              <Save className="h-4 w-4" />
              Save Draft
            </Button>
            <Button variant="accent" className="gap-2">
              <Send className="h-4 w-4" />
              Send Now
            </Button>
          </div>
        </div>

        <Tabs defaultValue="details" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="details">Campaign Details</TabsTrigger>
            <TabsTrigger value="content">Email Content</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-display">Campaign Information</CardTitle>
                  <CardDescription>Basic details about your campaign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Campaign Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g., Summer Sale Announcement"
                      className="input-focus"
                    />
                    <p className="text-xs text-muted-foreground">
                      Internal name for your reference
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Email Subject Line</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Enter an engaging subject line"
                      className="input-focus"
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.subject.length}/60 characters recommended
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preview">Preview Text</Label>
                    <Input
                      id="preview"
                      value={formData.previewText}
                      onChange={(e) => handleChange('previewText', e.target.value)}
                      placeholder="Brief preview shown in inbox"
                      className="input-focus"
                    />
                    <p className="text-xs text-muted-foreground">
                      Appears after subject in most email clients
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-display">Sender Information</CardTitle>
                  <CardDescription>How recipients will see you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fromName">From Name</Label>
                    <Input
                      id="fromName"
                      value={formData.fromName}
                      onChange={(e) => handleChange('fromName', e.target.value)}
                      placeholder="Your name or company"
                      className="input-focus"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fromEmail">From Email</Label>
                    <Input
                      id="fromEmail"
                      type="email"
                      value={formData.fromEmail}
                      onChange={(e) => handleChange('fromEmail', e.target.value)}
                      placeholder="your@email.com"
                      className="input-focus"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="replyTo">Reply-To Email</Label>
                    <Input
                      id="replyTo"
                      type="email"
                      value={formData.replyTo}
                      onChange={(e) => handleChange('replyTo', e.target.value)}
                      placeholder="replies@email.com"
                      className="input-focus"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="animate-fade-in">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-display">Email Content</CardTitle>
                <CardDescription>
                  Design your email content using HTML or our visual editor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Button variant="secondary" size="sm">
                      Visual Editor
                    </Button>
                    <Button variant="ghost" size="sm">
                      HTML Editor
                    </Button>
                    <Button variant="ghost" size="sm">
                      Choose Template
                    </Button>
                  </div>

                  <Textarea
                    value={formData.content}
                    onChange={(e) => handleChange('content', e.target.value)}
                    placeholder="<h1>Your email content here...</h1>"
                    className="min-h-[400px] font-mono text-sm input-focus"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audience" className="animate-fade-in">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-display">Select Audience</CardTitle>
                <CardDescription>
                  Choose who will receive this campaign
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Subscriber List</Label>
                  <Select
                    value={formData.audienceList}
                    onValueChange={(value) => handleChange('audienceList', value)}
                  >
                    <SelectTrigger className="w-full sm:w-[300px]">
                      <SelectValue placeholder="Select a list" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-subscribers">
                        All Subscribers (24,853)
                      </SelectItem>
                      <SelectItem value="active-users">
                        Active Users (18,420)
                      </SelectItem>
                      <SelectItem value="premium-members">
                        Premium Members (3,200)
                      </SelectItem>
                      <SelectItem value="newsletter-only">
                        Newsletter Subscribers (12,100)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <h4 className="font-medium text-sm mb-2">Audience Summary</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Total Recipients</p>
                      <p className="text-lg font-semibold">24,853</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Active</p>
                      <p className="text-lg font-semibold text-success">23,420</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Unsubscribed</p>
                      <p className="text-lg font-semibold text-muted-foreground">1,433</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="animate-fade-in">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-display">Campaign Settings</CardTitle>
                <CardDescription>
                  Configure tracking and delivery options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Tracking Options</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Track email opens</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Track link clicks</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Enable Google Analytics tracking</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Delivery Options</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Auto-resend to non-openers</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Enable A/B testing</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
