import { useState } from 'react';

export type ModalNew = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useModalNew = (): ModalNew => {
  const [isOpen, setOpen] = useState(false);

  return {
    isOpen: isOpen,
    open: () => {
      setOpen(true);
    },
    close: () => {
      setOpen(false);
    }
  };
};
