import { type ColumnDef } from '@tanstack/react-table';
import { type Show } from '@/types/db';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { Input } from '../ui/input';

export const columns: ColumnDef<Show>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: (info) =>
      info.getValue()
        ? new Date(info.getValue() as string).toLocaleDateString()
        : '—',
  },
  {
    accessorKey: 'venue',
    header: 'Venue',
    cell: (info) => info.getValue() ?? '—',
  },
  {
    accessorKey: 'city',
    header: 'City',
    cell: (info) => info.getValue() ?? '—',
  },
  {
    accessorKey: 'state',
    header: 'State',
    cell: (info) => info.getValue() ?? '—',
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: (info) => {
      const value = info.getValue();
      return value != null ? `$${Number(value).toFixed(2)}` : '—';
    },
  },
  {
    accessorKey: 'supportingArtists',
    header: 'Supporting Artists',
    cell: (info) => {
      const artists = info.getValue();
      return Array.isArray(artists) ? artists.join(', ') : '—';
    },
  },
  {
    accessorKey: 'ageRestriction',
    header: 'Age Restriction',
    cell: (info) => info.getValue() ?? 'All ages',
  },
  {
    accessorKey: 'ticketLink',
    header: 'Tickets',
    cell: (info) => {
      const link = info.getValue();
      return link ?? '—';
    },
  },
  {
    accessorKey: 'flyerLink',
    header: 'Flyer Link',
    cell: (info) => {
      const link = info.getValue();
      return link ?? '—';
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const show = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">

            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(show.id.toString())}
            >
              Copy Show ID
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Input type="text" placeholder={show.venue?.toString()} />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => { }}
            >
              Delete
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
