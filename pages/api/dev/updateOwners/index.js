import Web3 from "web3";
import { db } from "../../../../services/firebaseServicesAdmin";
import artifact from "../../../../contracts/abis/blockheadNFTs.json";

const contractAddress = "0x0433f132Adf26Ef4368C55C8eC8582C88B35A5a5";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      db.ref(`bhl-2022-1-roster`)
        .orderByChild("name")
        .on("child_added", async (data) => {
          const ids = data.val().ids.split("\n");
          ids.map(async (id) => {
            const web3 = new Web3(
              new Web3.providers.HttpProvider(
                "https://mainnet.infura.io/v3/a6f532740bc84d6e980f5ce93a5d1b30"
              )
            );

            const admin = web3.eth.accounts.wallet.add(
              process.env.ADMIN_PK
            ).address;

            const contract = new web3.eth.Contract(
              artifact.abi,
              contractAddress
            );

            contract.methods
              .ownerOf(id)
              .call({
                from: admin,
              })
              .then((data) => {
                db.ref("bhl-2022-1-blockheads")
                  .child(parseInt(id) - 1)
                  .update({
                    owner: data,
                  });
              });
          });
          res.status(200).json({ message: "done!" });
        });
    } catch (error) {}
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
