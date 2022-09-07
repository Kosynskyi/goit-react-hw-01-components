import PropTypes from 'prop-types';
import { Row, TableData, TableDataType } from './TransactionHistoryTRow.styled';

export const TransactionHistoryTRow = ({ id, type, amount, currency }) => {
  return (
    <Row key={id}>
      <TableDataType>{type}</TableDataType>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </Row>
  );
};

TransactionHistoryTRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
