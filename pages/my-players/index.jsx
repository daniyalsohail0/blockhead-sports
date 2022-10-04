import AsyncComponent from "../../utils/AsyncComponent";

const MyPlayers = AsyncComponent(() => import("../../routes/MyPlayers"));

const MyPlayersPage = () => {
  return <MyPlayers />;
};

export default MyPlayersPage;