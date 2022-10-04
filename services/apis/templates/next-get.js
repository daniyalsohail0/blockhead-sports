/**
 * IIInigence Example Template for GET requests
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
import { getUserId } from "../helperMethods";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const uid = getUserId(req?.headers?.cookie);

      res.status(200).json({ data: [] });
    } catch (error) {
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
 */
