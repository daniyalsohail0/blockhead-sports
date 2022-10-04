import AsyncComponent from "../../../utils/AsyncComponent";

const BlockHeadHockey = AsyncComponent(() => import("../../../routes/Blockhead/Hockey/Gondolas"));

const BlockHeadHockeyPage = () => {
  return <BlockHeadHockey />;
};

export default BlockHeadHockeyPage;