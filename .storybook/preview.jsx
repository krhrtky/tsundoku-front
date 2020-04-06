import React from 'react';
import { configure, addDecorator  } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

function loadStories() {
  const req = require.context('../src', true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(storyFn => <ThemeProvider theme={createMuiTheme()}>{ storyFn() }</ThemeProvider>);
