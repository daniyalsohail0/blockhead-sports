import { db } from "../admin-config";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // ::: Destructure body params :::
      const { flag, playerName } = req?.body?.params;
      // ::: Add the Data to DB or run other logics :::
      console.log(flag, playerName);
      res.status(200).json({ data: "sampleData" });
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 13 ~ handler ~ error", error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
