/**
 * IIInigence Example Template for POST requests
 * version: 0.0.2
 * created: 8/21/2021 
 * author: @judescripts
 * lastEdited: 8/21/2021 
 * editor: @judescripts
 * 
 * ::: Modify code below to satisfy your requirement :::
 * 
import { v4 as uuIdv4 } from "uuid";
import { nanoid } from "nanoid";
import { db } from "../admin-config";
import { serverTime } from "../helpingMethods";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // ::: Destructure body params :::
      const { sampleData } = req?.body?.params;
      // ::: Add the Data to DB or run other logics :::
      res.status(200).json({ data: "sampleData"});
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 13 ~ handler ~ error", error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
 */