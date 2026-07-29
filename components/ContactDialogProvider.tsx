"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

type ContactDialogContextValue = {
  openDialog: (service?: string) => void;
};

const ContactDialogContext = createContext<ContactDialogContextValue | null>(null);

export function useContactDialog() {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) {
    throw new Error("useContactDialog debe usarse dentro de ContactDialogProvider");
  }
  return ctx;
}

export default function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<string | undefined>(undefined);

  const openDialog = useCallback((preselected?: string) => {
    setService(preselected);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openDialog }), [openDialog]);

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Cuéntanos tu proyecto</DialogTitle>
            <DialogDescription>
              Completa el formulario y te respondemos en menos de 24 horas hábiles.
            </DialogDescription>
          </DialogHeader>
          <ContactForm
            defaultService={service}
            onSuccess={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  );
}
