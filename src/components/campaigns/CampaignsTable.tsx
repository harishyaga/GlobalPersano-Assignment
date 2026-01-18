import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreHorizontal, Eye, Edit, Copy, Trash2, Play, Pause } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { CampaignStatusBadge } from './CampaignStatusBadge';
import { CampaignTypeBadge } from './CampaignTypeBadge';
import { campaigns, Campaign } from '@/data/mockData';
import { cn } from '@/lib/utils';

export function CampaignsTable() {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedIds((prev) =>
      prev.length === campaigns.length ? [] : campaigns.map((c) => c.id)
    );
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="stat-card p-0 overflow-hidden animate-fade-in">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="w-12">
              <Checkbox
                checked={selectedIds.length === campaigns.length}
                onCheckedChange={toggleSelectAll}
              />
            </TableHead>
            <TableHead className="font-semibold">Campaign</TableHead>
            <TableHead className="font-semibold">Type</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold text-right">Recipients</TableHead>
            <TableHead className="font-semibold text-right">Open Rate</TableHead>
            <TableHead className="font-semibold text-right">Click Rate</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign, index) => (
            <TableRow
              key={campaign.id}
              className={cn(
                'table-row-hover cursor-pointer animate-slide-up',
                selectedIds.includes(campaign.id) && 'bg-primary/5'
              )}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => navigate(`/campaigns/${campaign.id}`)}
            >
              <TableCell onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  checked={selectedIds.includes(campaign.id)}
                  onCheckedChange={() => toggleSelect(campaign.id)}
                />
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium text-foreground">{campaign.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Created {new Date(campaign.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <CampaignTypeBadge type={campaign.type} />
              </TableCell>
              <TableCell>
                <CampaignStatusBadge status={campaign.status} />
              </TableCell>
              <TableCell className="text-right font-medium">
                {formatNumber(campaign.recipients)}
              </TableCell>
              <TableCell className="text-right">
                {campaign.openRate > 0 ? (
                  <span className="font-medium text-success">{campaign.openRate}%</span>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </TableCell>
              <TableCell className="text-right">
                {campaign.clickRate > 0 ? (
                  <span className="font-medium text-primary">{campaign.clickRate}%</span>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </TableCell>
              <TableCell onClick={(e) => e.stopPropagation()}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate(`/campaigns/${campaign.id}/edit`)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="h-4 w-4 mr-2" />
                      Duplicate
                    </DropdownMenuItem>
                    {campaign.status === 'active' && (
                      <DropdownMenuItem>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </DropdownMenuItem>
                    )}
                    {campaign.status === 'paused' && (
                      <DropdownMenuItem>
                        <Play className="h-4 w-4 mr-2" />
                        Resume
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
