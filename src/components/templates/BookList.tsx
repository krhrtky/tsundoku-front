import React from 'react';
import styled from 'styled-components';
import { List } from '@/components/organisms/Books/List';
import { FetchOutputData } from '@/usecase/book/Fetch/FetchOutputData';

type Props = {
  books: FetchOutputData;
};

const Wrapper = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

export const BookList: React.FC<Props> = ({ books }: Props) => (
  <Wrapper>
    <List rows={books} />
  </Wrapper>
);
