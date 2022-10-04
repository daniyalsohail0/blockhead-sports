import { db } from "../../../services/firebaseServicesAdmin";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const data = (await db.ref(`whitelist-switch`).get()).val();
      res.status(200).json({ data });
    } catch (error) {}
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
