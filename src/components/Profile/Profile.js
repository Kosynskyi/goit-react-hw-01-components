// import { prettyFormat } from '@testing-library/react';
import PropTypes from 'prop-types';
import {
  Img,
  Wrapper,
  Container,
  Name,
  P,
  List,
  Item,
  SpanTitle,
  SpanData,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Container>
        <Img src={avatar} alt={username}/>
        <Name>{username}</Name>
        <P>{tag}</P>
        <P>{location}</P>
      </Container>

      <List>
        <Item>
          <SpanTitle>Followers </SpanTitle>
          <SpanData>{stats.followers}</SpanData>
        </Item>
        <Item>
          <SpanTitle>Views </SpanTitle>
          <SpanData>{stats.views}</SpanData>
        </Item>
        <Item>
          <SpanTitle>Likes </SpanTitle>
          <SpanData>{stats.likes}</SpanData>
        </Item>
      </List>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
