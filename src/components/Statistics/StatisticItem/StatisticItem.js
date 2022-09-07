import PropTypes from 'prop-types';

import { Item, SpanTitle, SpanResult } from './StatisticItem.styled';

export const StatisticItem = ({ id, label, percentage }) => {
  return (
    <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <SpanTitle>{label}</SpanTitle>
      <SpanResult>{percentage}%</SpanResult>
    </Item>
  );
};

StatisticItem.propTypes = {
  // id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
