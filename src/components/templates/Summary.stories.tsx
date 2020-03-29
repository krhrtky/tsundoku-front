import React from 'react';
import { storiesOf } from '@storybook/react';
import { Summary } from './Summary';

const Props = {
  total: 10,
  bought: 8,
  reading: 4,
  over: 4
};

storiesOf('Templates/Summary', module).add('base', () => (
  <Summary {...Props} />
));
