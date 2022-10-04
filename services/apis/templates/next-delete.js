/**
 * IIInigence Example Template for DELETE requests
 * version: 0.0.1
 * created: 8/21/2021 
 * author: @judescripts
 * lastEdited: 8/21/2021 
 * editor: @judescripts
 * 
 * ::: Modify code below to satisfy your requirement :::
 * 
import _ from "lodash";
import { db } from "../admin-config";
import { serverTime, getUserId } from "../helpingMethods";

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    try {
      const { classId } = req?.body?.params;
      const teacherId = getUserId(req?.headers?.cookie);
      let data = (await db.ref(`ce_classes/${teacherId}`).get()).val();
      if (data != null) {
        var filterData = _.values(data)?.find((el) => el.id === classId);
        await db.ref(`ce_classes/${teacherId}/${filterData.classNode}`).update({
          updatedAt: serverTime,
          isActive: false,
          isDeleted: true,
          deletedAt: serverTime,
        });
      }
      res.status(200).json({ message: "Class deleted successfully!" });
    } catch (error) {
      console.log("🚀 ~ file: delete-class.js ~ line 22 ~ handler ~ error", error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
*/