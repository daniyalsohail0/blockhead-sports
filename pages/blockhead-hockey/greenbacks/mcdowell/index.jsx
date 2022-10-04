import AsyncComponent from "../../../../utils/AsyncComponent";

const BlockHeadHockey = AsyncComponent(() =>
  import("../../../../routes/Blockhead/Hockey/Greenbacks/McDowell")
);

const BlockHeadHockeyPage = () => {
  return <BlockHeadHockey />;
};

export default BlockHeadHockeyPage;
