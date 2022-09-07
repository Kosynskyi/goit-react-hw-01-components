import PropTypes from 'prop-types';
import { Item, Status, Img, Name } from './FriendItem.styled.js';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id}>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired,
};
