import PropTypes from 'prop-types';
import { TransactionHistoryTRow } from '../TransactionHistoryTRow/TransactionHistoryTRow';
import { Table, Thead, Th, TBody } from './TransactionHistoryTable.styled';

export const TransactionHistoryTable = ({ items }) => {
  return (
    <Table className="transaction-history">
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <th>Currency</th>
        </tr>
      </Thead>
      <TBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryTRow
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </TBody>
    </Table>
  );
};

TransactionHistoryTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
};
