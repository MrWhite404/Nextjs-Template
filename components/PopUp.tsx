import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PopUpProps {
  children: React.ReactNode;
  button: string;
  className?: string;
  contentClassName?: string;
  title: string;
  close?: boolean;
  closeClassName?: string;
}

const PopUp = ({
  children,
  button,
  className,
  contentClassName,
  title,
  close,
  closeClassName,
}: PopUpProps) => {
  return (
    <Dialog>
      <DialogTrigger className={className}>{button}</DialogTrigger>
      <DialogContent className={contentClassName}>
        <DialogTitle>{title}</DialogTitle>
        {children}
        {close && (
          <DialogFooter className={`justify-end ${closeClassName}`}>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
