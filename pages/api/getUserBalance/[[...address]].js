import { db } from "../admin-config";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { address } = req?.query;
      const data = (await db.ref(`bhs-users/${address}`).get()).val();
      res.status(200).json({ data });

      res.status(200).json({ data: [] });
    } catch (error) {}
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
