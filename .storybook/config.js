import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src', true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
