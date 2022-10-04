import styles from "../../styles/Mint.module.css";
import { useEffect, useState } from "react";
import { checkCollectionMints } from "../../services/checkCollectionMints";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { updateCollectionMints } from "../../services/updateCollectionMints";
import { useSelector, useDispatch } from "react-redux";
import { initWeb3 } from "../helpers/web3helpers";
import {
  addContract,
  addProvider,
  addWeb3,
  addWeb3Modal,
} from "../../redux/web3Slice";
import { addUser } from "../../redux/userSlice";
import { getWhitelist } from "../../services/getWhitelist";
import { checkWhitelistStatus } from "../../services/checkWhitelist";
import Web3 from "web3";

export default function Mint() {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const [minted, setMinted] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [qty, setQty] = useState(1);
  const [totalOwned, setTotalOwned] = useState(0);
  const [totalPlayerIds, setTotalPlayerIds] = useState([]);
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [whitelistActive, setWhitelistActive] = useState(true);
  const router = useRouter();
  const provider = useSelector((state) => state.web3.provider);
  const contract = useSelector((state) => state.web3.contract);
  const address = useSelector((state) => state.user.userAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    connectWallet();
    updateMintedStats();
    checkWhitelistStatus({
      cbSuccess: ({ data }) => {
        setWhitelistActive(data);
      },
      cbFailure: (err) => console.log(err),
    });
  }, []);

  useEffect(() => {
    checkWhitelist();
  }, [address]);

  const checkWhitelist = async () => {
    if (!address) return;
    await getWhitelist({
      cbSuccess: ({ data }) => {
        let sanitized = data.map((item) => item?.toUpperCase());
        if (sanitized.includes(address.toUpperCase())) {
          setIsWhitelisted(true);
        } else {
          setIsWhitelisted(false);
        }
      },
      cbFailure: (error) => console.log(error),
    });
  };

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") return;
    const { web3Init, contract, web3ModalInit, account, provider } =
      await initWeb3();
    dispatch(addContract({ contract }));
    dispatch(addProvider({ provider }));
    dispatch(addWeb3({ web3: web3Init }));
    dispatch(addWeb3Modal({ web3Modal: web3ModalInit }));
    if (account !== undefined) dispatch(addUser({ address: account[0] }));
  };

  useEffect(() => {
    if (!address) return;
    checkTotalOwned();
  }, [contract, address]);

  const updateMintedStats = () => {
    checkCollectionMints({
      cbSuccess: ({ data }) => {
        // console.log(data);
        const minted = data.filter((item) => item.minted);
        setMinted(minted.length);
        setRemaining(252 - minted.length);
      },
      cbFailure: (error) => console.log(error),
    });
  };

  const checkTotalOwned = async () => {
    if (!contract) return;
    const ownedPlayers = await contract.methods.walletOfOwner(address).call({
      from: address,
    });
    setTotalPlayerIds(ownedPlayers);
    setTotalOwned(ownedPlayers.length);
  };

  const generateNextDraw = async () => {
    if (whitelistActive && !isWhitelisted) {
      toast.error("You need to be whitelisted!");
      return;
    }

    await checkTotalOwned();

    if (!qty) return;
    try {
      checkCollectionMints({
        cbSuccess: ({ data }) => {
          let available = data.filter((item) => !item.minted);

          if (!available) return;

          let draws = [];
          for (let i = 0; i < qty; i++) {
            const draw = random(0, available.length);
            draws.push(available[draw].id);
          }

          contract.methods.mint(qty, draws).send(
            {
              from: address,
              value: Web3.utils.toWei((0.125 * qty).toString(), "ether"),
              // value: 1 * qty,
            },
            (err, txnHash) => {
              if (err) toast.error("Please try again!");
              if (txnHash) {
                const updated = data.map((item) => {
                  if (draws.includes(item.id)) {
                    item.minted = true;
                    item.updated = Date.now();
                  }
                  return item;
                });
                updateCollectionMints({
                  data: { updated },
                  cbSuccess: () => {
                    console.log("success!");
                    updateMintedStats();
                    toast.success(`Minting at ${txnHash}`);
                  },
                  cbFailure: () => console.log("failed!"),
                });
              }
            }
          );
        },
        cbFailure: (err) => console.log(err),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleArrowClick = (flag) => {
    if (flag === "up") {
      setQty(++qty);
    } else if (flag === "down") {
      if (qty - 1 <= 1) setQty(1);
      else setQty(--qty);
    }
  };

  const updateProgressBar = () => {
    let progressBar = [];
    let mintedBars = minted / 9;
    for (let i = 0; i < 28; i++) {
      if (mintedBars > 0) {
        progressBar.push(<div className={`${styles.progressBarGreen}`}> </div>);
        mintedBars--;
      } else {
        progressBar.push(<div className={styles.progressBarRed}> </div>);
      }
    }
    return progressBar;
  };

  const updateRoster = () => {
    let players = [];
    for (let i = 0; i < 16; i++) {
      if (i < totalOwned) {
        players.push(
          <img
            style={{ cursor: "pointer" }}
            className={`object-contain h-14 mr-3 mb-6`}
            src="/images/jersey-picked.png"
          />
        );
      } else {
        players.push(
          <img
            style={{ cursor: "pointer" }}
            className={`object-contain h-20 mr-3 mb-6`}
            src="/images/jersey-unpicked.png"
          />
        );
      }
    }
    return players;
  };

  return (
    <div>
      <div className="flex justify-center mt-12">
        <img
          style={{
            width: "1200px",
          }}
          src="/images/bhh-slider-mint.gif"
        />
      </div>
      <div className="flex justify-center mt-12 mb-8">
        <div className="flex flex-col">
          <div className="flex flex-row space-x-44 mb-3">
            <div className="flex flex-row">
              <div>MINTED</div>
              <div className="ml-3">{minted}</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="flex flex-row">
              <div>REMAINING</div>
              <div className="ml-3">{remaining}</div>
            </div>
          </div>
          <div className="flex justify-center space-x-3">
            {updateProgressBar()}
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12 mt-16">
        <div className="grid grid-cols-2 gap-12 ">
          <div>
            <p className={styles.header}>MINT YOUR BHL PLAYER</p>
            <div className="flex space-x-6 items-center mt-12">
              <img width={30} src="/images/eth-diamond-black 1.png" alt="" />
              <p className={styles.priceText}>0.125 each</p>
            </div>
            <p className={`${styles.content} mt-10`}>
              This winter, all six Blockhead Hockey franchises will battle
              throughout a rigorous, month-long simulated season. Every
              Blockhead Sports athlete is unique in both looks and skill set.
              Each Player will obtain in-game statistics which in turn will
              reward you with Blockhead coins where you can redeem your currency
              in our exclusive marketplace for real life, in game and web3
              rewards. The more players on your roster, the more you can be
              rewarded!
            </p>
            <div className="flex space-x-6 items-center mt-36">
              <p className={styles.qtyHeading}>QUANTITY</p>
              <div className={styles.qtyBox}>
                <input
                  type="text"
                  value={qty.toString().padStart(2, "0")}
                  className={styles.qtyText}
                />
                <img
                  className={styles.boxArrowUp}
                  width={20}
                  src="/images/up-arrow.png"
                  onClick={() => handleArrowClick("up")}
                  alt=""
                />
                <img
                  className={styles.boxArrowDown}
                  width={20}
                  src="/images/down-arrow.png"
                  onClick={() => handleArrowClick("down")}
                  alt=""
                />
              </div>
            </div>
            <div className="flex space-x-6 items-center mt-12">
              <div
                // onClick={generateNextDraw}
                className={`${styles.mintButton} items-center text-center flex justify-center`}
              >
                <div className={styles.mintButtonText}>SOLD OUT!</div>
              </div>
            </div>
          </div>
          <div className={`${styles.rosterPanel} flex flex-col`}>
            <div className="flex justify-start ml-6 mt-6 mb-6">
              <p className={styles.rosterText}>YOUR ROSTER</p>
              <p className={`${styles.rosterText} ml-52`}>{totalOwned}</p>
            </div>
            <div className="flex justify-center">
              <div className={styles.divider}></div>
            </div>
            <div className="flex flex-wrap justify-center items-center ml-3 mt-6">
              {updateRoster()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
