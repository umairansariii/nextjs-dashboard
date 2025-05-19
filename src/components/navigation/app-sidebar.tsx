"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "@/components/ui/sidebar";
import { CollapsibleMenu } from "@/components/navigation/collapsible-menu";
import { ClickableMenu } from "@/components/navigation/clickable-menu";
import { SIDEBAR_ECOMMERCE, SIDEBAR_MAIN } from "@/constants/sidebar-items";

export function AppSidebar() {
  return (
    <Sidebar collapsible="none">
      <SidebarHeader />
      <SidebarContent>
        <ClickableMenu navItems={SIDEBAR_MAIN} />
        <CollapsibleMenu navItems={SIDEBAR_ECOMMERCE} label="Ecommerce" />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
