import styled from 'styled-components';
export const Wrap = styled.div`
  padding-top: 15px;
  display: flex;
  gap: 15px;
`;
export const Poster = styled.div`
  flex-shrink: 0;
  width: 250px;
  height: 375px;
  border-radius: 5px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;

    max-width: 100%;
    max-height: 100%;
  }
`;
export const MovieInfo = styled.div`
  flex-grow: 1;
`;
