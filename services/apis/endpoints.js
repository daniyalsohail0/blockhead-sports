import configs from "./configs/endpoints.json";

function endPoint(address, type, guarded, testData) {
  this.address = address;
  this.type = type;
  this.guarded = guarded;
  this.testData = testData;
}
let endPoints = {};
try {
  configs?.map((item) => {
    {
      endPoints[item.apiName] = new endPoint(item.endPoint, item.httpMethod, item.guarded, item.testData);
    }
  });
} catch (error) {
  console.error(error);
}
export default endPoints;