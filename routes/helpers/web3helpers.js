import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import artifact from "../../contracts/abis/blockheadNFTs.json";
import erc20Artifact from "../../contracts/abis/BlockheadCoin.json";

const providerOptions = {
  injected: {
    display: {
      name: "MetaMask",
    },
    package: null,
  },
  // Example with WalletConnect provider
  walletconnect: {
    display: {
      name: "Wallet Connect",
    },
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID, // required
    },
  },
};

const contractAddress = process.env.NEXT_PUBLIC_BHL_CONTRACT;
const erc20ContractAddress = process.env.NEXT_PUBLIC_ERC20_CONTRACT;

export const initWeb3 = async (flag) => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      const web3ModalInit = new Web3Modal({
        network: process.env.NEXT_PUBLIC_NETWORK, // optional
        cacheProvider: true,
        providerOptions, // required
      });

      if (flag === "reset") web3ModalInit.clearCachedProvider();

      const provider = await web3ModalInit.connect();
      const web3Init = new Web3(provider);
      const contract = new web3Init.eth.Contract(artifact.abi, contractAddress);
      const erc20Contract = new web3Init.eth.Contract(
        erc20Artifact.abi,
        erc20ContractAddress
      );

      if (flag === "reset") {
        web3Init.currentProvider.sendAsync({
          method: "wallet_requestPermissions",
          params: [{ eth_accounts: {} }],
        });
      }

      const account = await web3Init.eth.getAccounts();

      return {
        web3Init,
        contract,
        web3ModalInit,
        account,
        provider,
        erc20Contract,
      };
    } catch (err) {
      console.error(err);
      return {
        web3Init: undefined,
        contract: undefined,
        web3ModalInit: undefined,
        account: undefined,
        provider: undefined,
      };
    }
  }
};
