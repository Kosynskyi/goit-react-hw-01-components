import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';
import { List } from './FriendGallery.styled';

export const FriendGallery = ({ items }) => {
  return (
    <List>
      {items.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </List>
  );
};

FriendGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
