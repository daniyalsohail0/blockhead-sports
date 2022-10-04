import styles from "../../../styles/Navbar.module.css";
import { useRouter } from "next/router";

const BottomNav = () => {
  const router = useRouter();
  const handleRoute = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <div
      className={`md:hidden bottom-0 fixed overflow-hidden w-full ${styles.bottomNav}`}
    >
      <div className="flex justify-center space-x-6 mt-3 cursor-pointer">
        <div
          onClick={(e) => handleRoute(e, "/blockhead-hockey")}
          className="flex flex-col content-center items-center"
        >
          <img width={40} src="/images/hockey-sticks.png" alt="" />
          <p>BH HOCKEY</p>
        </div>
        <div
          onClick={(e) => handleRoute(e, "/my-players")}
          className="flex flex-col content-center items-center"
        >
          <img width={40} src="/images/team.png" alt="" />
          <p>MY TEAM</p>
        </div>
        <div
          onClick={(e) => handleRoute(e, "/marketplace")}
          className="flex flex-col content-center items-center"
        >
          <img width={40} src="/images/cart.png" alt="" />
          <p className="ml-2">MARKET</p>
        </div>
        <div
          onClick={(e) => handleRoute(e, "/mint")}
          className="flex flex-col content-center items-center"
        >
          <img width={40} src="/images/mint.png" alt="" />
          <p className="ml-3">MINT</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
