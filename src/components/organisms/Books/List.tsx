import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@/components/atoms/UI';
import { FetchOutputData } from '@/usecase/book/Fetch/FetchOutputData';
import { Formatter } from '@/libs/Formatter';

type Props = {
  rows: FetchOutputData;
};

export const List: React.FC<Props> = ({ rows }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow hover key={row.id}>
              <TableCell align="left" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="right">
                {Formatter.Price.format(row.price)}
              </TableCell>
              <TableCell align="left">
                <a href={row.link} target="_blank" rel="noopener noreferrer">
                  {row.link}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
