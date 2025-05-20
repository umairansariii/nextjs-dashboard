import { Product, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import { products } from './data';

async function getProductsData(): Promise<Product[]> {
  // Fetch data from your API here.
  return products;
}

export default async function ProductPage() {
  const data = await getProductsData();

  return (
    <div className="w-full px-4 py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
