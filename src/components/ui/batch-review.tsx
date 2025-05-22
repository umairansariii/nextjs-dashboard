import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from './input';
import { Button } from './button';

type BatchReviewProps = {
  data: {
    open: boolean;
    titleField: string;
    effectiveField: string;
  };
  onClose: () => void;
  selectedRows: any[];
};

export function BatchReview({ data, onClose, selectedRows }: BatchReviewProps) {
  return (
    <Dialog open={data.open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bulk Update</DialogTitle>
          <DialogDescription>
            Review your data for accuracy before you proceed.
          </DialogDescription>
        </DialogHeader>
        <div className="relative h-auto max-h-[250px] overflow-auto">
          <Table>
            <TableHeader className="sticky top-0 bg-white">
              <TableRow className="shadow-sm">
                <TableHead>Items</TableHead>
                <TableHead>Previous</TableHead>
                <TableHead>Current</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedRows.map((row: any, idx: number) => (
                <TableRow key={idx}>
                  <TableCell className="py-0">{row[data.titleField]}</TableCell>
                  <TableCell className="py-0">
                    {row[data.effectiveField]}
                  </TableCell>
                  <TableCell className="py-0">
                    <Input
                      type="text"
                      defaultValue={row[data.effectiveField]}
                      className="w-[100px] p-0 border-none outline-none focus-visible:ring-0 focus-visible:border-none"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Discard
          </Button>
          <Button variant="default" type="submit">
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
