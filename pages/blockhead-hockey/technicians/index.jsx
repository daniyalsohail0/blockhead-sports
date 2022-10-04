import AsyncComponent from "../../../utils/AsyncComponent";

const BlockHeadHockey = AsyncComponent(() => import("../../../routes/Blockhead/Hockey/Technicians"));

const BlockHeadHockeyPage = () => {
  return <BlockHeadHockey />;
};

export default BlockHeadHockeyPage;