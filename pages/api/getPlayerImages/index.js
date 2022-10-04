import { db } from "../../../services/firebaseServicesAdmin";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { ids } = req?.body?.params;
      let images = [];
      ids.map((id) => {
        db.ref(`bhl-2022-1-blockheads-dev/${parseInt(id) - 1}`).on(
          "value",
          (snapshot) => {
            if (snapshot.exists()) {
              snapshot.forEach((data) => {
                if (data.key === "imageUrl") {
                  images.push(data.val());
                }
              });
            }
          }
        );
      });
      console.log(images);
      res.status(200).json({ data: images });
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 25 ~ handler ~ error)", error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
