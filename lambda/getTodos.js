const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
  
  const params = {
    TableName: "",
  };

  try {
    const result = await docClient.scan(params).promise();
    return result.Items;
  } catch (err) {
    return { error: err };
  }
};
