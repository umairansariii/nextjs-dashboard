import { Product, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import { products } from './data';
import { ProductBatchActions } from './batch-actions';
import { BatchReview } from '@/components/ui/batch-review';

async function getProductsData(): Promise<Product[]> {
  // Fetch data from your API here.
  return products;
}

export default async function ProductPage() {
  const data = await getProductsData();

  return (
    <div className="w-full px-4 py-10">
      <BatchReview />
      <DataTable
        columns={columns}
        data={data}
        batchActions={ProductBatchActions}
      />
    </div>
  );
}
