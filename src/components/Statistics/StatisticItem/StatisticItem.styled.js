import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 40px;
  padding: 10px 15px;
  outline: 1px solid black;
  border-bottom: 2px;
`;

export const SpanTitle = styled.span`
  margin: 0;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const SpanResult = styled.span`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;
