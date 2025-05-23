import {
  Briefcase,
  Clapperboard,
  Hamburger,
  PackageOpen,
  Shirt,
} from 'lucide-react';

export const PRODUCT_TYPES = [
  {
    title: 'Inventory',
    description:
      'Tangible products tracked for quantity and value, typically stocked and sold.',
    icon: Shirt,
  },
  {
    title: 'Non-inventory',
    description: 'Items that are sold but not tracked for inventory purposes.',
    icon: Hamburger,
  },
  {
    title: 'Digital',
    description:
      'Intangible goods delivered electronically, access or download without stock.',
    icon: Clapperboard,
  },
  {
    title: 'Service',
    description:
      'Non-physical offerings such as labor or consulting, billed without stock tracking.',
    icon: Briefcase,
  },
  {
    title: 'Bundle',
    description:
      'A collection of products and/or services sold as a single combined unit.',
    icon: PackageOpen,
  },
];
