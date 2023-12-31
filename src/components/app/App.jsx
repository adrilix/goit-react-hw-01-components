import user from "../../data//user.json"
import data from "../../data/data.json"
import friends from "../../data/friends.json"
import transactions from "../../data/transactions.json"
import Profile from "../profile/profile"
import Statistics from "../statistics/statistics"
import FriendsList from "../FriendsList/FriendsList"
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
        title="Upload stats" 
        stats={data}
      />
      <FriendsList
        friends={friends}
      />
            <History
        history={transactions}
      />
    </>
  );
};

