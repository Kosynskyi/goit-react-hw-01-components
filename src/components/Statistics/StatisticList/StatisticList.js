// import { prettyFormat } from '@testing-library/react';
import PropTypes from 'prop-types';
import { StatisticItem } from '../StatisticItem/StatisticItem';

import { List } from './StatisticList.styled';

export const StatisticList = ({ items }) => {
  return (
    <List>
      {items.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </List>
  );
};

StatisticList.propTypes = {
  //   key: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape),
};
