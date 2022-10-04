import AsyncComponent from "../../../utils/AsyncComponent";

const BlockHeadHockey = AsyncComponent(() => import("../../../routes/Blockhead/Hockey/Bootleggers"));

const BlockHeadHockeyPage = () => {
  return <BlockHeadHockey />;
};

export default BlockHeadHockeyPage;