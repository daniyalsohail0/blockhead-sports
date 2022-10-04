import AsyncComponent from "../../../../utils/AsyncComponent";

const BlockHeadHockey = AsyncComponent(() =>
  import("../../../../routes/Blockhead/Hockey/Chundys/Reynolds")
);

const BlockHeadHockeyPage = () => {
  return <BlockHeadHockey />;
};

export default BlockHeadHockeyPage;
