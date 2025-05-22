'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

type ProductBatchActionsProps = {
  setOptions: (options: {
    open: boolean;
    titleField: string;
    effectiveField: string;
  }) => void;
};

export function ProductBatchActions({ setOptions }: ProductBatchActionsProps) {
  const handleBatchInactive = () => {
    setOptions({
      open: true,
      titleField: 'title',
      effectiveField: 'price',
    });
  };

  return (
    <div className="flex items-center space-x-2 animate-slide-in-left">
      <Button variant="outline" onClick={handleBatchInactive}>
        <ArrowUpDown /> Adjust price
      </Button>
    </div>
  );
}
