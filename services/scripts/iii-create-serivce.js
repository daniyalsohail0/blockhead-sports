"use strict";
import fs from "fs";
/**
 * Main Script Function for creating new IIInigence Next.js stack endPoints and apis
 * @param {*} apiName
 * @param {*} httpMethod
 * @returns
 */
const iiiCreateService = (apiName, httpMethod) => {
  const currentApis = JSON.parse(fs.readFileSync("../apis/configs/apis.json"));
  console.log("::: script starting :::");
  if (currentApis.find((item) => item.apiName === apiName))
    throw new Error(
      "::: apiName already exists, please choose a different apiName :::"
    );
  console.log("::: we can create this service! :::");
  /**
   * ::: Create new endPoint :::
   */
  console.log("::: creating new endpoint :::");
  const currentEndPoints = JSON.parse(
    fs.readFileSync("../apis/configs/endPoints.json")
  );
  let newEndPoints = [
    ...currentEndPoints,
    {
      apiName,
      endPoint: `/api/${apiName}`,
      httpMethod,
      guarded: false,
      testData: null,
    },
  ];
  newEndPoints = JSON.stringify(newEndPoints);
  fs.writeFileSync("../apis/configs/endPoints.json", newEndPoints);
  console.log("::: new endPoint set up :::");
  /**
   * ::: Create new api service :::
   */
  console.log("::: creating new service :::");
  let newApiServices = [
    ...currentApis,
    {
      apiName,
      httpMethod,
      endPoint: `/api/${apiName}`,
    },
  ];
  newApiServices = JSON.stringify(newApiServices);
  fs.writeFileSync("../apis/configs/apis.json", newApiServices);
  console.log("::: new service set up :::");
  /**
   * ::: Create new nextJS API Pages :::
   */
  console.log("::: creating new nextJS api pages :::");
  const dirPath = `../../pages/api/${apiName}`;
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  console.log(`::: new nextJS api directory created :::`);
  let apiTemplate = "";
  switch (httpMethod) {
    case "GET":
      apiTemplate = fs.readFileSync("../apis/templates/next-get.js");
      break;
    case "POST":
      apiTemplate = fs.readFileSync("../apis/templates/next-post.js");
      break;
    case "PUT":
      apiTemplate = fs.readFileSync("../apis/templates/next-put.js");
      break;
    case "PATCH":
      apiTemplate = fs.readFileSync("../apis/templates/next-patch.js");
      break;
    case "DELETE":
      apiTemplate = fs.readFileSync("../apis/templates/next-delete.js");
      break;
    default:
      break;
  }
  fs.writeFileSync(`${dirPath}/index.js`, apiTemplate);
  console.log("::: new nextJS api index.js created :::");
  /**
   * Create new service file and register to module index
   */
  const serviceTemplate = fs.readFileSync("../apis/templates/iii-service.js");
  const servicePath = "../";
  fs.writeFileSync(`${servicePath}/${apiName}.js`, serviceTemplate);
  fs.appendFileSync('../index.js', `export * from "./${apiName}.js";`)
  console.log("::: script complete! :::");
  console.log("::: script exiting :::");
};
/**
 * ::: Script Runner Block :::
 */
try {
  // First two args are reserved by NodeJS
  // process.argv[0] = node env path
  // process.argv[1] = process.cwd
  const apiName = process.argv[2];
  const httpMethod = process.argv[3];
  if (!apiName || !httpMethod)
    throw new Error("::: please provide required parameters :::");
  iiiCreateService(apiName, httpMethod);
} catch (error) {
  console.error("::: error occurred, script aborting! ::: \n", error);
}