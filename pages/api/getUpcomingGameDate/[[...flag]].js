import { db } from "../../../services/firebaseServicesAdmin";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { flag } = req?.query;
      if (flag[0] === "hockey") {
        const data = (await db.ref(`upcomingGames/hockey`).get()).val();
        res.status(200).json({ data });
      }

      res.status(200).json({ data: [] });
    } catch (error) {}
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
