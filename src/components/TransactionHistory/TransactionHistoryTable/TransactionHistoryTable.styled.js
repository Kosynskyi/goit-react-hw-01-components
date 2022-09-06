import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  border: 1px solid rgba(0, 244, 255, 0.43);
`;

export const Thead = styled.thead`
  padding: 10px;
  background-color: lightskyblue;
  padding: 15px;
`;

export const Th = styled.th`
  text-transform: uppercase;
  padding: 5px;
  font-weight: 500;
`;

export const TBody = styled.tbody`
  & tr:nth-child(2n) {
    background-color: lightgray;
  }
`;
