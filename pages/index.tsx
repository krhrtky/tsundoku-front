import React, { ComponentType } from 'react';
import { Grid, Card as C } from '@/components/atoms/UI';
import styled from '@emotion/styled';
import { CardHeader, createMuiTheme } from '@material-ui/core';
import { useBooksContext } from '@/components/context';

const theme = createMuiTheme();

const Card = styled(C)`
  padding: ${theme.spacing(2)};
  color: ${theme.palette.text.secondary};
`;

const Home: ComponentType = () => {
  const {
    state: { books }
  } = useBooksContext();

  const total = books.length;
  const stock = books.filter(book => book.status === 'stock').length;
  const over = books.filter(book => book.status === 'over').length;

  return (
    <Grid container spacing={4}>
      <Grid item xs={2}>
        <Card>
          <CardHeader title={`Total: ${total}冊`} />
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card>
          <CardHeader title={`Stock: ${stock}冊`} />
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card>
          <CardHeader title={`Over: ${over}冊`} />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
