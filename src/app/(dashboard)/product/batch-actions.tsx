'use client';

import { Button } from '@/components/ui/button';
import { Ban } from 'lucide-react';

type ProductBatchActionsProps = {
  setOptions: (options: {
    open: boolean;
    titleField: string;
    effectiveFields: string[];
  }) => void;
};

export function ProductBatchActions({ setOptions }: ProductBatchActionsProps) {
  const handleBatchInactive = () => {
    setOptions({
      open: true,
      titleField: 'title',
      effectiveFields: ['price'],
    });
  };

  return (
    <div className="flex items-center space-x-2 animate-slide-in-left">
      <Button variant="outline" onClick={handleBatchInactive}>
        <Ban /> Inactive
      </Button>
    </div>
  );
}
