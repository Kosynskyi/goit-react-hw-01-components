import styled from 'styled-components';

export const Item = styled.li`
  outline: 1px solid grey;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 330px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Img = styled.img`
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 900;
  margin: 0;
  padding: 0;
`;
