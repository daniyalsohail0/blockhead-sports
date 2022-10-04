import styles from "../../styles/MyPlayers.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addContract,
  addProvider,
  addWeb3,
  addWeb3Modal,
} from "../../redux/web3Slice";
import { addUser } from "../../redux/userSlice";
import { initWeb3 } from "../helpers/web3helpers";
import { getPlayers } from "../../services/getPlayers";

export default function MyPlayers() {
  const router = useRouter();
  const [totalOwned, setTotalOwned] = useState(0);
  const [totalPlayerIds, setTotalPlayerIds] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [players, setPlayers] = useState([]);
  const [rosters, setRosters] = useState([]);
  const provider = useSelector((state) => state.web3.provider);
  const contract = useSelector((state) => state.web3.contract);
  const address = useSelector((state) => state.user.userAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    connectWallet();
  }, []);

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
    connectWallet();
  }, []);

  useEffect(() => {
    if (!address) return;
    checkTotalOwned();
  }, [contract, address]);

  const checkTotalOwned = async () => {
    if (!contract) return;
    const ownedPlayers = await contract.methods.walletOfOwner(address).call({
      from: address,
    });
    setTotalPlayerIds(ownedPlayers);
    setTotalOwned(ownedPlayers.length);
  };

  useEffect(() => {
    getPlayerNFT();
  }, [totalPlayerIds]);

  useEffect(() => {
    updateRoster();
  }, [imageUrls, players]);

  const getPlayerNFT = async () => {
    getPlayers({
      data: { ids: totalPlayerIds },
      cbSuccess: ({ data }) => {
        setPlayers(data);
      },
      cbFailure: (err) => {
        console.log(err);
      },
    });
  };

  const handleImageClick = (id) => {
    // TODO: impl
    console.log(id);
  };

  const updateRoster = () => {
    setRosters([]);
    players.map((player) => {
      let roster = (
        <img
          onClick={() => handleImageClick(player.id)}
          id={player.id}
          key={player.id}
          style={{ cursor: "pointer" }}
          className={`object-contain h-14 mr-3 mb-6`}
          src={player.imageUrl}
        />
      );
      setRosters((prevState) => [...prevState, roster]);
    });
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <div className={styles.header}>My Players</div>
      {/* {totalOwned < 1 && (
        <div className={`${styles.subheader} mt-6`}>
          <p>You don't currently have any players. Head over</p>
          <p>
            to the&nbsp;
            <span onClick={() => router.push("/mint")} className={styles.link}>
              mint page
            </span>
            &nbsp;to fill your roster!
          </p>
        </div>
      )} */}
      <div className="mt-12 mb-12">
        <a
          href="https://opensea.io/collection/blockhead-sports"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.mintButton}`}
        >
          Recruit From Opensea
        </a>
      </div>

      <div className={`${styles.rosterPanel} flex flex-col`}>
        <div className="flex justify-start ml-6 mt-6 mb-6">
          <p className={styles.rosterText}>YOUR ROSTER</p>
          <p className={`${styles.rosterText} ml-52`}>{totalOwned}</p>
        </div>
        <div className="flex justify-center">
          <div className={styles.divider}></div>
        </div>
        <div className="flex flex-wrap justify-center items-center ml-3 mt-6 mb-30">
          {rosters}
        </div>
      </div>
    </div>
  );
}
