import styled from 'styled-components';
export const List = styled.ul`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(7, 1fr);
  list-style: none;
  li {
    text-align: center;
  }
  img {
    display: block;
    max-width: 100%;
  }
`;
