"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";

export function ContactButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="bg-red-600 hover:bg-red-700 text-white w-40"
      >
        Contact
      </Button>
      <ContactDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
}