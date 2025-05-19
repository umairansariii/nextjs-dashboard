import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navigation/app-sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="h-screen w-screen flex font-sans">
        <AppSidebar />
        <main className="flex-1 flex flex-col">{children}</main>
      </div>
    </SidebarProvider>
  );
}
