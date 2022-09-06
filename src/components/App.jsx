import { Profile } from './Profile/Profile';
import { Section } from './Section/Section';
import { StatisticList } from './Statistics/StatisticList/StatisticList';
import { FriendGallery } from './FriendList/FriendGallery/FriendGallery';
import { TransactionHistoryTable } from './TransactionHistory/TransactionHistoryTable/TransactionHistoryTable';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <div>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Upload stats">
        <StatisticList items={data} />
      </Section>
      <Section title="My friends">
        <FriendGallery items={friends} />
      </Section>
      <Section title="My transactions">
        <TransactionHistoryTable items={transactions} />
      </Section>
    </div>
  );
};
