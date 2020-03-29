import React from 'react';
import { Typography } from '@/components/atoms/UI';
import { BooksStatus } from '@/components/molecules/Summary/BooksStatus';

type Props = Readonly<{
  total: number;
  bought: number;
  reading: number;
  over: number;
}>;

export const Summary: React.FC<Props> = props => (
  <>
    <Typography variant="h5" color="textSecondary">
      Summary
    </Typography>
    <BooksStatus {...props} />
  </>
);
