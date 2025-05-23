'use client';

import { DataTable } from '@/components/ui/data-table';
import { BatchReview } from '@/components/ui/batch-review';
import { Product, columns } from './columns';
import { useState } from 'react';
import { ProductBatchActions } from './batch-actions';
import { ProductTableActions } from './table-actions';

type ProductTableProps = {
  data: Product[];
};

export function ProductTable({ data }: ProductTableProps) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [batchData, setBatchData] = useState<{
    open: boolean;
    titleField: string;
    effectiveField: string;
  }>({
    open: false,
    titleField: '',
    effectiveField: '',
  });

  const onBatchReviewClose = () => {
    setBatchData({ open: false, titleField: '', effectiveField: '' });
  };

  return (
    <>
      <BatchReview
        data={batchData}
        onClose={onBatchReviewClose}
        selectedRows={selectedRows}
      />
      <DataTable
        columns={columns}
        data={data}
        onSelectionChange={setSelectedRows}
        tableActions={<ProductTableActions />}
        batchActions={<ProductBatchActions setOptions={setBatchData} />}
      />
    </>
  );
}
