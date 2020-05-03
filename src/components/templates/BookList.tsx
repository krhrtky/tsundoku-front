import React from 'react';
import styled from 'styled-components';
import { List } from '@/components/organisms/Books/List';
import {
  FetchOutputData,
  FetchOutputDataItem
} from '@/usecase/book/Fetch/FetchOutputData';

type Props = {
  books: FetchOutputData;
  onEdit: (book: FetchOutputDataItem) => void;
  onDelete: (book: FetchOutputDataItem) => () => void;
};

const Wrapper = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

export const BookList: React.FC<Props> = (props: Props) => (
  <Wrapper>
    <List {...props} />
  </Wrapper>
);
