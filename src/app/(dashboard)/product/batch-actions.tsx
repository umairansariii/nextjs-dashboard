'use client';

import { Button } from '@/components/ui/button';
import { Ban } from 'lucide-react';

export function ProductBatchActions(selectedRows: any[]) {
  console.log('selectedRows', selectedRows);

  return (
    <div className="flex items-center space-x-2 animate-slide-in-left">
      <Button variant="outline">
        <Ban /> Inactive
      </Button>
    </div>
  );
}
