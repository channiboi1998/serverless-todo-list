const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  if (!event.label || event.label.trim() === "") {
    throw new Error("Label cannot be empty");
  }

  const params = {
    TableName: "",
    Item: {
      _id: Date.now().toString(),
      label: event.label,
      checked: false,
      createdAt: new Date().toISOString(),
    },
  };

  try {
    await dynamoDB.put(params).promise();
    return params.Item;
  } catch (err) {
    return { error: err };
  }
};
