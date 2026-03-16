"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
  title: string;
}

export default function PDFViewer({ isOpen, onClose, fileUrl, title }: PDFViewerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh]">
        <div className="w-full h-full">
          <iframe
            src={`${fileUrl}#toolbar=0`}
            className="w-full h-full rounded-md"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}