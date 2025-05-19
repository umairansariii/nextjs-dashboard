import { Home, LayoutDashboard, ShoppingBag, Wallet } from "lucide-react";

export const SIDEBAR_MAIN = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
];

export const SIDEBAR_ECOMMERCE = [
  {
    title: "Inventory",
    icon: ShoppingBag,
    subItems: [
      {
        title: "Products",
        url: "#",
      },
      {
        title: "Variants",
        url: "#",
      },
      {
        title: "Categories",
        url: "#",
      },
    ],
  },
  {
    title: "Sales",
    icon: Wallet,
    subItems: [
      {
        title: "Invoices",
        url: "#",
      },
      {
        title: "Stocks",
        url: "#",
      },
      {
        title: "Purchases",
        url: "#",
      },
      {
        title: "Returns",
        url: "#",
      },
    ],
  },
];

export const SIDEBAR_SETTINGS = [
  {
    name: "Design Engineering",
    url: "#",
    icon: Home,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: Home,
  },
  {
    name: "Travel",
    url: "#",
    icon: Home,
  },
];
