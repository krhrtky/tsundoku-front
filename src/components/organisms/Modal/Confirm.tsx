import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography
} from '@/components/atoms/UI';
import { Modal } from '@/components/hooks/useModal';

export type Props = {
  modal: Modal;
  messages: ReadonlyArray<string>;
  onSubmit: () => Promise<void>;
};

export const Confirm: React.FC<Props> = ({
  modal,
  messages,
  onSubmit
}: Props) => (
  <Dialog fullWidth maxWidth="xs" open={modal.isOpen} onClose={modal.close}>
    <DialogTitle>
      <Typography color="textSecondary">Confirm</Typography>
    </DialogTitle>
    <DialogContent>
      <Grid container alignItems="flex-start" justify="flex-start">
        <Grid item xs={8}>
          {messages.map((message, i) => (
            <Typography key={i} color="textSecondary">
              {message}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Grid container alignItems="center" justify="space-around">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={modal.close}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={async () => {
            await onSubmit();
            modal.close();
          }}
        >
          OK
        </Button>
      </Grid>
    </DialogActions>
  </Dialog>
);
