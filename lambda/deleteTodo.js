const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { _id } = event;

  if (!_id) {
    throw new Error("Missing _id parameter");
  }

  try {
    const params = {
      TableName: "",
      Key: {
        _id: _id.toString(),
      },
    };

    await dynamoDB.delete(params).promise();

    return { _id };
  } catch (err) {
    return { error: err };
  }
};
