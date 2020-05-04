import React from 'react';
import { useSnackbar } from 'notistack';
import { useModal } from '@/components/hooks/useModal';
import { AddCircleOutline } from '@/components/atoms/Icon';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography
} from '@/components/atoms/UI';
import { RegisterForm } from './RegisterForm';

export const RegisterModal: React.FC = () => {
  const [isOpen, modal] = useModal();
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = () => {
    enqueueSnackbar('success', { variant: 'success' });
    modal.close();
  };

  return (
    <div>
      <div onClick={modal.open}>
        <AddCircleOutline />
      </div>
      <Dialog fullWidth maxWidth="xs" open={isOpen} onClose={modal.close}>
        <DialogTitle>
          <Typography color="textSecondary">Register Book</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={8}>
              <RegisterForm submitCallback={onSubmit} />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};
