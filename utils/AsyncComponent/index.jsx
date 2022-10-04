import dynamic from "next/dynamic";
import Loader from "../../routes/Common/Loader";

const AsyncComponent = (importComponent) => {
  return dynamic(importComponent, {
    loading: () => <Loader />,
  });
};
export default AsyncComponent;
