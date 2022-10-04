import { db } from "../../../../services/firebaseServicesAdmin";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { payouts } = req?.body?.params;
      payouts.map((payout) => {
        db.ref(`bhs-users/${payout.Owner.toUpperCase()}`).on(
          "child_added",
          (data) => {
            const currentVal = data.val();
            db.ref(`bhs-users/${payout.Owner.toUpperCase()}`).update({
              balance: currentVal + payout.Payout,
            });
          }
        );
      })
      res.status(200).json({ message: "done!" });
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 17 ~ handler ~ error", error);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
