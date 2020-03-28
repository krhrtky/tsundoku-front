import React from 'react';
import { storiesOf } from '@storybook/react';
import { BooksStatus } from './BooksStatus';
import styled from 'styled-components';

const PropsList = [
  {
    total: 0,
    bought: 0,
    reading: 0,
    over: 0
  },
  {
    total: 10,
    bought: 8,
    reading: 4,
    over: 4
  }
];

const Wrapper = styled.div`
  background-color: gray;
  color: white;
  margin-bottom: 1rem;
`;

storiesOf('Templates/BooksStatus', module).add('base', () => (
  <>
    {PropsList.map((props, i) => (
      <Wrapper key={i}>
        <BooksStatus {...props} />
      </Wrapper>
    ))}
  </>
));
