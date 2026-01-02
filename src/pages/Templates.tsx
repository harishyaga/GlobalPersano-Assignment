import { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Copy, Edit, Trash2, Eye, Star } from 'lucide-react';
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { templates } from '@/data/mockData';
import { cn } from '@/lib/utils';

const categoryColors: Record<string, string> = {
  'Welcome': 'bg-primary/10 text-primary',
  'Newsletter': 'bg-info/10 text-info',
  'Promotional': 'bg-accent/10 text-accent',
  'Transactional': 'bg-success/10 text-success',
  'Re-engagement': 'bg-warning/10 text-warning',
};

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || template.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const myTemplates = filteredTemplates.filter((t) => t.type === 'custom');
  const prebuiltTemplates = filteredTemplates.filter((t) => t.type === 'prebuilt');

  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        title="Templates"
        subtitle="Create and manage your email templates"
        actions={
          <Button variant="accent" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Template
          </Button>
        }
      />

      <div className="p-6 space-y-6">
        {/* Search and Filter */}
        <Card className="card-elevated">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search templates..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Welcome">Welcome</SelectItem>
                  <SelectItem value="Newsletter">Newsletter</SelectItem>
                  <SelectItem value="Promotional">Promotional</SelectItem>
                  <SelectItem value="Transactional">Transactional</SelectItem>
                  <SelectItem value="Re-engagement">Re-engagement</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Templates ({filteredTemplates.length})</TabsTrigger>
            <TabsTrigger value="my">My Templates ({myTemplates.length})</TabsTrigger>
            <TabsTrigger value="prebuilt">Pre-built ({prebuiltTemplates.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <TemplateGrid templates={filteredTemplates} />
          </TabsContent>

          <TabsContent value="my" className="space-y-6">
            <TemplateGrid templates={myTemplates} />
          </TabsContent>

          <TabsContent value="prebuilt" className="space-y-6">
            <TemplateGrid templates={prebuiltTemplates} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function TemplateGrid({ templates }: { templates: typeof import('@/data/mockData').templates }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <Card key={template.id} className="card-elevated group hover:shadow-lg transition-all overflow-hidden">
          {/* Preview Image */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-background rounded-lg shadow-lg p-4 space-y-2">
                <div className="h-2 w-1/2 bg-primary/20 rounded" />
                <div className="h-2 w-3/4 bg-muted-foreground/20 rounded" />
                <div className="h-2 w-2/3 bg-muted-foreground/20 rounded" />
                <div className="h-8 w-1/3 bg-primary/30 rounded mt-4" />
              </div>
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <Button size="sm" variant="secondary">
                <Eye className="h-4 w-4 mr-1" />
                Preview
              </Button>
              <Button size="sm" variant="default">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </div>
            {/* Favorite */}
            {template.isFavorite && (
              <div className="absolute top-3 right-3">
                <Star className="h-5 w-5 text-warning fill-warning" />
              </div>
            )}
          </div>
          
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-foreground">{template.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{template.description}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy className="h-4 w-4 mr-2" />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="flex items-center justify-between">
              <Badge className={cn('text-xs', categoryColors[template.category] || 'bg-muted')}>
                {template.category}
              </Badge>
              <span className="text-xs text-muted-foreground">
                Used {template.usageCount} times
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
