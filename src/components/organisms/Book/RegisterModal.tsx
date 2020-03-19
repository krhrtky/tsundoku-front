import React from 'react';
import { useModal } from '@/components/hooks/useModal';
import { AddCircleOutline } from '@/components/atoms/Icon';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid
} from '@/components/atoms/UI';
import { RegisterForm } from './RegisterForm';

export const RegisterModal: React.FC = () => {
  const [isOpen, modal] = useModal();

  return (
    <div>
      <div onClick={modal.open}>
        <AddCircleOutline />
      </div>
      <Dialog fullWidth maxWidth="xs" open={isOpen} onClose={modal.close}>
        <DialogTitle>Register Book</DialogTitle>
        <DialogContent>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={8}>
              <RegisterForm submitCallback={modal.close} />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};
