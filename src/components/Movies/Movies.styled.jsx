import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const List = styled.ul`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(7, 1fr);
  list-style: none;
  img {
    display: block;
    width: 100%;
    height: 70%;
    max-width: 100%;
  }
  li {
    text-align: center;
  }
`;
export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 15px;
  li {
    cursor: pointer;
  }
`;
