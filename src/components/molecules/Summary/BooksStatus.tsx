import React from 'react';
import { Grid, Card, CardContent, Typography } from '@/components/atoms/UI';

export type Props = Readonly<{
  total: number;
  bought: number;
  reading: number;
  over: number;
}>;

type PropsKeys = keyof Props;

export const BooksStatus: React.FC<Props> = (props: Props) => {
  return (
    <Grid container spacing={3}>
      {(Object.keys(props) as Array<PropsKeys>).map(key => (
        <Grid key={key} item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h4" color="textSecondary" align="right">
                {props[key]}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="right"
              >
                {key.toUpperCase()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {/*<Grid item xs={2}>*/}
      {/*  <Card>*/}
      {/*    <CardContent>*/}
      {/*      <Typography variant="h4" color="textSecondary" align="right">*/}
      {/*        {bought}*/}
      {/*      </Typography>*/}
      {/*      <Typography variant="subtitle1" color="textSecondary" align="right">*/}
      {/*        Bought*/}
      {/*      </Typography>*/}
      {/*    </CardContent>*/}
      {/*  </Card>*/}
    </Grid>
  );
};
