import AsyncComponent from "../../utils/AsyncComponent";

const Roadmap = AsyncComponent(() => import("../../routes/Roadmap"));

const RoadmapPage = () => {
  return <Roadmap />;
};

export default RoadmapPage;