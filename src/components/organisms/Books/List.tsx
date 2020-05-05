import React from 'react';
import styled from 'styled-components';
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
import {
  FetchOutputData,
  FetchOutputDataItem
} from '@/usecase/book/Fetch/FetchOutputData';
import { Formatter } from '@/libs/Formatter';

type Props = {
  books: FetchOutputData;
  onEdit: (book: FetchOutputDataItem) => void;
  onDelete: (book: FetchOutputDataItem) => () => void;
};

const OpenInNew = styled(OIN)`
  vertical-align: middle;
  display: inline-flex;
`;

export const List: React.FC<Props> = ({ books, onEdit, onDelete }: Props) => (
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
              TotalPages
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
        {books.map(row => (
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
            <TableCell align="right">
              <Typography variant="subtitle1" color="textSecondary">
                {row.totalPages}
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
              <Create
                fontSize="small"
                color="action"
                onClick={() => onEdit(row)}
              />
            </TableCell>
            <TableCell align="center" padding="none">
              <Delete fontSize="small" color="action" onClick={onDelete(row)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
