import { db } from "../../../services/firebaseServicesAdmin";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { ids } = req?.body?.params;
      let players = [];
      ids.map((id) => {
        db.ref(`bhl-2022-1-blockheads-dev/${parseInt(id) - 1}`).on(
          "value",
          (snapshot) => {
            if (snapshot.exists()) {
              let player = {};
              snapshot.forEach((data) => {
                player[data.key] = data.val();
              });
              players.push(player);
            }
          }
        );
      });
      console.log(players);
      res.status(200).json({ data: players });
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 25 ~ handler ~ error)", error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
