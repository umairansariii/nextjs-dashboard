import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Plus } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

export function ProductTableActions() {
  return (
    <div className="flex items-center space-x-2 ">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <ChevronDown className="h-4 w-4 mr-2" /> More
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Manage Categories</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Download className="h-4 w-4 mr-2" /> Import
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Import via CSV</MenubarItem>
            <MenubarItem>Export</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Button variant="outline" className="cursor-pointer">
        <Plus /> Create
      </Button>
    </div>
  );
}
