import { ProductTypes } from '@/components/product/product-types';
import { ProductTable } from './table';
import { Product } from './columns';
import { products } from './data';

async function getProductsData(): Promise<Product[]> {
  // Fetch data from your API here.
  return products;
}

export default async function ProductPage() {
  const data = await getProductsData();

  return (
    <div className="w-full px-4 py-10">
      <ProductTypes />
      <ProductTable data={data} />
    </div>
  );
}
