import { db } from "../../../services/firebaseServicesAdmin";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      let bhlList = (await db.ref(process.env.MINT_COLLECTION_URL).get()).val();
      res.status(200).json({ data: bhlList });
    } catch (error) {}
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
