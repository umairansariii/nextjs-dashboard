import { url } from "inspector";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    label: "Platform",
    showLabel: true,
    items: [
      {
        title: "Playground",
        enabledGroup: true,
        icon: Home,
        children: [
          {
            title: "History",
            url: "/history",
          },
          {
            title: "Starred",
            url: "/starred",
          },
          {
            title: "Settings",
            url: "/settings",
          },
        ],
      },
    ],
  },
  {
    label: "Projects",
    showLabel: true,
    items: [
      {
        title: "Sales & Marketing",
        enabledGroup: false,
        icon: Home,
        url: "/sales-marketing",
        children: [],
      },
      {
        title: "Travel",
        enabledGroup: false,
        icon: Home,
        url: "/travel",
        children: [],
      },
    ],
  },
];
