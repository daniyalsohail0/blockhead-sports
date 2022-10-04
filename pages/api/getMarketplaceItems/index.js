import { db } from "../../../services/firebaseServicesAdmin";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      let items = [];
      db.ref(`marketplace`).on("value", (snapshot) => {
        if (snapshot.exists()) {
          let item = {};
          snapshot.forEach((data) => {
            item[data.key] = data.val();
          });
          items.push(Object.values(item));
        }
      });
      res.status(200).json({ data: items });
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 25 ~ handler ~ error)", error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
