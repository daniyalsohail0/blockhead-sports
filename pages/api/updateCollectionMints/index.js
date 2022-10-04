import { db } from "../../../services/firebaseServicesAdmin";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // ::: Destructure body params :::
      const { updated } = req?.body?.params;

      await db.ref(process.env.MINT_COLLECTION_URL).update(updated);

      // ::: Add the Data to DB or run other logics :::
      res.status(200).json({ data: "success" });
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 13 ~ handler ~ error", error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
