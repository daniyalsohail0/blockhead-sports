import AsyncComponent from "../../utils/AsyncComponent";

const Faq = AsyncComponent(() => import("../../routes/Faq"));

const FaqPage = () => {
  return <Faq />;
};

export default FaqPage;