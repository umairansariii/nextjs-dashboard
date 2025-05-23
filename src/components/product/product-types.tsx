'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { ProductTypeCard } from './product-type-card';
import { PRODUCT_TYPES } from '@/constants/product-types';

export function ProductTypes() {
  return (
    <Sheet open={true}>
      <SheetContent className="min-w-[400px]">
        <SheetHeader>
          <SheetTitle>Add Product</SheetTitle>
          <SheetDescription>
            Choose a product type carefully, each type has distinct attributes
            and properties. You can't change them after creating a product.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-2 px-4">
          {PRODUCT_TYPES.map((item) => (
            <ProductTypeCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={<item.icon />}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
