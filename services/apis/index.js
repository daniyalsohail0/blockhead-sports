import Axios from "axios";
import endPoints from "./endpoints";
import api from "./api";
import configs from "./configs/apis.json";

Axios.defaults.headers = { "Content-Type": "application/json" };

let apis = {};
try {
  configs?.map((item) => {
    apis[item.apiName] = (data) => api(endPoints[item.apiName], data);
  });
} catch (error) {
  console.error(error);
}

export default apis;