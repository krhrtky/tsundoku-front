import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Link
} from '@/components/atoms/UI';
import { OpenInNew as OIN, Delete, Create } from '@/components/atoms/Icon';
import { FetchOutputData } from '@/usecase/book/Fetch/FetchOutputData';
import { Formatter } from '@/libs/Formatter';
import styled from 'styled-components';
import NextLink from 'next/link';
import { useBooksContext, useConfirmModal } from '@/components/context';

type Props = {
  rows: FetchOutputData;
};

const OpenInNew = styled(OIN)`
  vertical-align: middle;
  display: inline-flex;
`;

export const List: React.FC<Props> = ({ rows }: Props) => {
  const { action } = useBooksContext();
  const openModal = useConfirmModal(['削除しますか?']);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography variant="subtitle1" color="textSecondary">
                Name
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1" color="textSecondary">
                Status
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1" color="textSecondary">
                Type
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1" color="textSecondary">
                Price
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1" color="textSecondary">
                Link
              </Typography>
            </TableCell>
            <TableCell align="center" />
            <TableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow hover key={row.id}>
              <TableCell align="left" component="th" scope="row">
                <Typography variant="subtitle1" color="textSecondary">
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle1" color="textSecondary">
                  {row.status}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle1" color="textSecondary">
                  {row.type}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" color="textSecondary">
                  {Formatter.Price.format(row.price)}
                </Typography>
              </TableCell>
              <TableCell align="left" size="small" padding="none">
                <Typography
                  variant="body1"
                  color="textSecondary"
                  noWrap
                  align={row.link.length === 0 ? 'center' : undefined}
                >
                  {row.link.length === 0 ? (
                    '-'
                  ) : (
                    <Link
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row.link}
                      <OpenInNew fontSize="small" color="action" />
                    </Link>
                  )}
                </Typography>
              </TableCell>
              <TableCell align="center" padding="none">
                <NextLink href={`/books/edit?id=${row.id}`} prefetch>
                  <Create fontSize="small" color="action" />
                </NextLink>
              </TableCell>
              <TableCell align="center" padding="none">
                <Delete
                  fontSize="small"
                  color="action"
                  onClick={() => {
                    openModal(async () => action.delete(row));
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
