import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, addUserBalance } from "../../redux/userSlice";
import { useState } from "react";
import navStyles from "../../styles/Navbar.module.css";
import { initWeb3 } from "../../routes/helpers/web3helpers";
import {
  addContract,
  addProvider,
  addWeb3,
  addWeb3Modal,
  addErc20Contract,
} from "../../redux/web3Slice";
import { getUserBalance } from "../../services/getUserBalance";

const NavBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showDisconnect, setShowDisconnect] = useState(false);
  const web3Modal = useSelector((state) => state.web3.web3Modal);

  const handleShowDisconnect = (flag) => {
    if (flag) {
      setShowDisconnect(true);
    } else {
      setShowDisconnect(false);
    }
  };

  const handleRoute = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") return;
    const {
      web3Init,
      contract,
      web3ModalInit,
      account,
      provider,
      erc20Contract,
    } = await initWeb3("reset");
    dispatch(addContract({ contract }));
    dispatch(addErc20Contract({ erc20Contract }));
    dispatch(addProvider({ provider }));
    dispatch(addWeb3({ web3: web3Init }));
    dispatch(addWeb3Modal({ web3Modal: web3ModalInit }));
    if (account !== undefined) {
      dispatch(addUser({ address: account[0] }));
      await getUserBalance({
        flag: account[0]?.toUpperCase(),
        cbSuccess: ({ data }) => {
          dispatch(addUserBalance({ balance: data.balance }));
        },
        cbFailure: (error) => console.log(error),
      });
    }
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    dispatch(addUser({ address: "" }));
  };

  return (
    <div className="max-w-7xl mx-auto lg:px-8 mt-8">
      <div className="hidden lg:flex justify-center h-16">
        <div className="flex content-center">
          <div className="flex flex-shrink-0 items-center mt-3">
            <img className="block w-10 h-10 w-auto" src="/logo.png" alt="BHS" />
          </div>
          <div className="flex ml-6 items-center space-x-8 ">
            <a
              className={`${navStyles.navBlock} px-2 text-center`}
              onClick={(e) => handleRoute(e, "/")}
            >
              HOME
            </a>
            <a
              onClick={(e) => handleRoute(e, "/blockhead-hockey")}
              className={`${navStyles.navBlock} px-2`}
            >
              BLOCKHEAD HOCKEY
            </a>
            <a
              onClick={(e) => handleRoute(e, "/marketplace")}
              className={`${navStyles.navBlock} px-2`}
            >
              MARKETPLACE
            </a>
            <a
              onClick={(e) => handleRoute(e, "/my-players")}
              className={`${navStyles.navBlock} px-2`}
            >
              My Players
            </a>
            <a
              onClick={(e) => handleRoute(e, "/faq")}
              className={`${navStyles.navBlock} px-2`}
            >
              FAQs
            </a>
            <a
              onClick={(e) => handleRoute(e, "/roadmap")}
              className={`${navStyles.navBlock} px-2`}
            >
              Roadmap
            </a>
            <div className={navStyles.spaces}></div>
            {/* <a
              onClick={(e) => handleRoute(e, "/mint")}
              className={`${navStyles.navButton2} px-2`}
            >
              <div className={navStyles.buttonText}>MINT</div>
            </a> */}
            <div className="flex items-center space-x-6 mb-3 ml-6 mt-3">
              <img width={40} src="/images/bhc-logo.png" alt="" />
              <div
                className={`${navStyles.coinBalanceText} object-contain flex space-x-2`}
              >
                <p>{user.userBalance || 0}</p>
                <p>BHC</p>
              </div>
              {user.userAddress && !showDisconnect && (
                <div>
                  <img
                    onMouseEnter={() => handleShowDisconnect(true)}
                    onMouseLeave={() => handleShowDisconnect(false)}
                    width={120}
                    style={{
                      cursor: "pointer",
                      minWidth: "120px",
                    }}
                    src="/images/motion-metawallet-connected-speed1.gif"
                  />
                </div>
              )}
              {showDisconnect && (
                <img
                  onClick={disconnectWallet}
                  onMouseEnter={() => handleShowDisconnect(true)}
                  onMouseLeave={() => handleShowDisconnect(false)}
                  width={120}
                  style={{
                    cursor: "pointer",
                    minWidth: "120px",
                  }}
                  src="/images/motion-metawallet-hoverdisc-speed1.gif"
                />
              )}
              {!user.userAddress && (
                <img
                  width={120}
                  style={{
                    cursor: "pointer",
                    minWidth: "120px",
                  }}
                  src="/images/motion-nowallet-speed1.gif"
                  onClick={connectWallet}
                />
              )}
              <div className="md:flex items-center ml-3">
                <img
                  width={50}
                  src="/images/shopping-cart.png"
                  alt=""
                  style={{
                    minWidth: "50px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`rounded ${navStyles.divider} mt-4`}></div>

      <div className="lg:hidden flex justify-start bg-white w-full fixed top-0">
        <div className="flex px-2 px-0 content-center">
          <div
            onClick={(e) => handleRoute(e, "/")}
            className="flex flex-shrink-0 items-center cursor-pointer"
          >
            <img className="block w-10 h-10 w-auto" src="/logo.png" alt="BHS" />
          </div>
        </div>
        <div className={navStyles.spacesBig}></div>
        <div className="flex items-center space-x-6 mb-3 ml-6 mt-3">
          <img width={40} src="/images/bhc-logo.png" alt="" />
          <div
            className={`${navStyles.coinBalanceText} object-contain flex space-x-2`}
          >
            <p>0</p>
            <p>BHC</p>
          </div>
          {user.userAddress && !showDisconnect && (
            <div>
              <img
                onMouseEnter={() => handleShowDisconnect(true)}
                onMouseLeave={() => handleShowDisconnect(false)}
                width={120}
                style={{
                  cursor: "pointer",
                  minWidth: "120px",
                }}
                src="/images/motion-metawallet-connected-speed1.gif"
              />
            </div>
          )}
          {showDisconnect && (
            <img
              onClick={disconnectWallet}
              onMouseEnter={() => handleShowDisconnect(true)}
              onMouseLeave={() => handleShowDisconnect(false)}
              width={120}
              style={{
                cursor: "pointer",
                minWidth: "120px",
              }}
              src="/images/motion-metawallet-hoverdisc-speed1.gif"
            />
          )}
          {!user.userAddress && (
            <img
              width={120}
              style={{
                cursor: "pointer",
                minWidth: "120px",
              }}
              src="/images/motion-nowallet-speed1.gif"
              onClick={connectWallet}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
