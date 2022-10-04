import {Audio} from "react-loader-spinner";

const MainLoader = () => {
  return (
    <Audio
      color="#bc0016"
      height={20}
      width={20}
      //       timeout={2000} //2 secs
      arialLabel='loading'
    />
  );
};

export default MainLoader;
