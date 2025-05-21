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

type BatchReviewProps = {
  data: {
    open: boolean;
    titleField: string;
    effectiveFields: string[];
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
                <TableHead>{data.titleField}</TableHead>
                {data.effectiveFields.map((field) => (
                  <TableHead key={field}>{field}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedRows.map((row: any, idx: number) => (
                <TableRow key={idx}>
                  <TableCell>{row[data.titleField]}</TableCell>
                  {data.effectiveFields.map((field) => (
                    <TableCell key={field}>{row[field]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
