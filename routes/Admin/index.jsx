import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table";
import {
  addContract,
  addProvider,
  addWeb3,
  addWeb3Modal,
  addErc20Contract,
} from "../../redux/web3Slice";
import { initWeb3 } from "../helpers/web3helpers";
import { addUser } from "../../redux/userSlice";
import Web3 from "web3";

export default function Admin() {
  const [filters, setFilters] = useState([]);
  const [admin, setAdmin] = useState("");

  const teams = [
    "All",
    "Bootleggers",
    "Chundys",
    "Gondolas",
    "Greenbacks",
    "Muckshows",
    "Technicians",
  ];

  useEffect(() => {
    connectWallet();
  }, []);

  const provider = useSelector((state) => state.web3.provider);
  const contract = useSelector((state) => state.web3.contract);
  const erc20Contract = useSelector((state) => state.web3.erc20Contract);
  const address = useSelector((state) => state.user.userAddress);
  const dispatch = useDispatch();

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") return;
    const {
      web3Init,
      contract,
      web3ModalInit,
      account,
      provider,
      erc20Contract,
    } = await initWeb3();
    dispatch(addContract({ contract }));
    dispatch(addErc20Contract({ erc20Contract }));
    dispatch(addProvider({ provider }));
    dispatch(addWeb3({ web3: web3Init }));
    dispatch(addWeb3Modal({ web3Modal: web3ModalInit }));
    if (account !== undefined) dispatch(addUser({ address: account[0] }));
    const PRIVATE_KEY = process.env.NEXT_PUBLIC_ADMIN_PK;
    setAdmin(web3Init.eth.accounts.wallet.add(PRIVATE_KEY).address);
  };

  const handleFilter = (team) => {
    if (team === "All" && filters.length < teams.length) {
      setFilters(teams);
      return;
    } else if (team === "All" && filters) {
      setFilters([]);
      return;
    }
    if (filters.includes(team)) {
      let newFilters = filters.filter((item) => item !== team);
      setFilters(newFilters);
    } else {
      setFilters([...filters, team]);
    }
  };

  const mintToken = (to, amount) => {
    if (!admin) return;
    erc20Contract.methods
      .mint(
        "0x5d03420469364565C31ef43ccf32cb929568f5DB",
        Web3.utils.toWei("1", "ether")
      )
      .send({
        from: admin,
        gas: 5000000,
      })
      .on("transactionHash", function (hash) {
        console.log(hash);
      })
      .on("confirmation", function (confirmationNumber, receipt) {
        console.log("confirmed");
      })
      .on("receipt", function (receipt) {
        // receipt example
        console.log(receipt);
      });
  };

  const handlePayouts = (flag, playerName) => {};

  return (
    <div>
      <div className="flex space-x-3 justify-center mt-6">
        <button onClick={mintToken}>mintToken</button>
        {teams.map((team) => {
          return (
            <div key={team}>
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleFilter(team)}
              >
                {team}
              </button>
            </div>
          );
        })}
      </div>
      <Table filters={filters} handlePayouts={handlePayouts} />
    </div>
  );
}
