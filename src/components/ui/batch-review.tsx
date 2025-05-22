import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from './input';

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
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
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
                      className="w-[100px] border-none outline-none"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
