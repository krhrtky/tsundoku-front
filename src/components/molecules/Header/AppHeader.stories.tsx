import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AppHeader } from './AppHeader';

const props = {
  pathName: 'path-name',
  register: action('button-click')
};

storiesOf('Molecules/Header', module).add('AppHeader', () => (
  <AppHeader {...props} />
));
