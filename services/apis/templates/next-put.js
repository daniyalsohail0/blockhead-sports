/**
 * IIInigence Example Template for PUT requests
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
  if (req.method === "PUT") {
    try {
      const teacherId = getUserId(req?.headers?.cookie);
      const { classDescription, className, grade, classId } = req?.body?.params;

      let data = (await db.ref(`ce_classes/${teacherId}`).get()).val();
      if (data != null) {
        let filterData = _.values(data).find((el) => el.id === classId);
        await db.ref(`ce_classes/${teacherId}/${filterData.classNode}`).update({
          classDescription: classDescription || "",
          className,
          grade,
          updatedAt: serverTime,
        });
      }
      res.status(200).json({ message: "Class Updated Successfully!" });
    } catch (error) {
      console.log("🚀 ~ file: edit-class.js ~ line 23 ~ handler ~ error", error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
*/