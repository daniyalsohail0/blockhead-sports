import AsyncComponent from "../../utils/AsyncComponent";

const Home = AsyncComponent(() => import("../../routes/Home"));

const HomePage = () => {
  return <Home />;
};

export default HomePage;