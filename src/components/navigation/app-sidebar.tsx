import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "@/components/ui/sidebar";
import { Home } from "lucide-react";
import { CollapsibleMenu } from "./collapsible-menu";

const navMain = [
  {
    title: "Playground",
    url: "#",
    icon: Home,
    isActive: true,
    items: [
      {
        title: "History",
        url: "#",
      },
      {
        title: "Starred",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
  {
    title: "Models",
    url: "#",
    icon: Home,
    items: [
      {
        title: "Genesis",
        url: "#",
      },
      {
        title: "Explorer",
        url: "#",
      },
      {
        title: "Quantum",
        url: "#",
      },
    ],
  },
  {
    title: "Documentation",
    url: "#",
    icon: Home,
    items: [
      {
        title: "Introduction",
        url: "#",
      },
      {
        title: "Get Started",
        url: "#",
      },
      {
        title: "Tutorials",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Home,
    items: [
      {
        title: "General",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Billing",
        url: "#",
      },
      {
        title: "Limits",
        url: "#",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="none">
      <SidebarHeader />
      <SidebarContent>
        <CollapsibleMenu items={navMain} label="Platform" />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
