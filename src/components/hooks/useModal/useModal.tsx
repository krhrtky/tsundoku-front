import { useState } from 'react';

type Modal = {
  open: () => void;
  close: () => void;
};

export const useModal = (): [boolean, Modal] => {
  const [isOpen, setOpen] = useState(false);

  const modal: Modal = {
    open: () => {
      setOpen(true);
    },
    close: () => {
      setOpen(false);
    }
  };

  return [isOpen, modal];
};
