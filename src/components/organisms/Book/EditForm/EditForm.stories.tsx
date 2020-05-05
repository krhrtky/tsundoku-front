import React from 'react';
import { storiesOf } from '@storybook/react';
import { EditForm } from './EditForm';

const type: 'Kindle' = 'Kindle';
const status: 'Stock' = 'Stock';

const initialValues = {
  name: 'sample book',
  type,
  status,
  price: 1000,
  totalPages: 100,
  link: 'https://example.com'
};

storiesOf('Organisms/Book', module).add('EditForm', () => (
  <EditForm
    initialValues={initialValues}
    submitCallback={values => console.log(values)}
  />
));
