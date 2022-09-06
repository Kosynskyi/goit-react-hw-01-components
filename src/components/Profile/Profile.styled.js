import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  background-color: ghostwhite;
  border-radius: 3px;
  outline: 2px solid red;
  box-shadow: 4px;
`;

export const Container = styled.div`
  padding: 20px;
`;

export const Img = styled.img`
  margin-bottom: 20px;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;

export const P = styled.p`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const List = styled.ul`
  outline: 1px solid black;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: tomato;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;

export const Item = styled.li`
  outline: 1px solid grey;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 33.33%;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;

export const SpanTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const SpanData = styled.span`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
`;
