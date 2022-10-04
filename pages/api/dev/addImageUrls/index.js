import { db } from "../../../../services/firebaseServicesAdmin";
import Web3 from "web3";
import artifact from "../../../../contracts/abis/blockheadNFTs.json";
import axios from "axios";

const contractAddress = "0x0433f132Adf26Ef4368C55C8eC8582C88B35A5a5";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      db.ref(`bhl-2022-1-blockheads-dev`).on("child_added", async (data) => {
        const id = data.val().id;
        console.log(id);
        await axios(
          `https://iiinigence.mypinata.cloud/ipfs/QmPSd1zxQnBo3EJnDeiWscdazwRL7XwBtjus7pYVCQPT8u/${id}.json`
        )
          .then((response) => {
            console.log(response.data);
            let imageUrl = response.data.image
              .replace("gateway", "iiinigence")
              .replace("pinata", "mypinata");
            db.ref(`bhl-2022-1-blockheads-dev`)
              .child(id - 1)
              .update({
                imageUrl,
              });
          })
          .catch((err) => {
            console.log(
              "🚀 ~ file: addImageUrls/index.js ~ line 27 ~ db.ref ~ err",
              err
            );
          });
      });
      res.status(200).json({ message: "done!" });
    } catch (error) {
      console.log(
        "🚀 ~ file: addImageUrls/index.js ~ line 35 ~ handler ~ error",
        error
      );
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
