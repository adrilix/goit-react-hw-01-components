import user from "../../user.json"
import data from "../../data.json"
import friends from "../../friends.json"
import transactions from "../../transactions.json"
import Profile from "../profile/profile"
import Statistics from "../statistics/statistics"
import Friendlist from "../friendlist/friendlist"
import History from "components/transactions/transactions"

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats" stats={data}
      />
      <Friendlist
        friends={friends}
      />
            <History
        history={transactions}
      />
    </>
  );
};
