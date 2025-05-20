'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, SquarePenIcon, Trash2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type Product = {
  id: string;
  title: string;
  sku: string;
  description: string;
  price: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => {
      return (
        <div className="w-[200px] text-ellipsis overflow-hidden whitespace-nowrap">
          {row.getValue('title')}
        </div>
      );
    },
  },
  {
    accessorKey: 'sku',
    header: 'SKU',
    cell: ({ row }) => {
      return (
        <div className="w-[200px] text-ellipsis overflow-hidden whitespace-nowrap">
          {row.getValue('sku')}
        </div>
      );
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      return (
        <div className="w-[300px] text-ellipsis overflow-hidden whitespace-nowrap">
          {row.getValue('description')}
        </div>
      );
    },
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="w-[120px]">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-6 w-6 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <SquarePenIcon /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash2Icon /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
