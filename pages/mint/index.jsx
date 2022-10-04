import AsyncComponent from "../../utils/AsyncComponent";

const Mint = AsyncComponent(() => import("../../routes/Mint"));

const MintPage = () => {
  return <Mint />;
};

export default MintPage;