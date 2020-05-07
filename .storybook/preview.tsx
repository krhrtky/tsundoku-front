import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@material-ui/styles';

const loadStories = () => {
  const req = require.context('../src', true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

const useStyles = makeStyles({
  anchorOriginTopRight: {
    top: '60px'
  }
});

addDecorator(storyFn => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        classes={{ ...classes }}
      >
        {storyFn()}
      </SnackbarProvider>
    </ThemeProvider>
  );
});
