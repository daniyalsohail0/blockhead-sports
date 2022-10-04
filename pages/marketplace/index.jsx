import AsyncComponent from "../../utils/AsyncComponent";

const Marketplace = AsyncComponent(() => import("../../routes/Marketplace"));

const MarketplacePage = () => {
  return <Marketplace />;
};

export default MarketplacePage;
