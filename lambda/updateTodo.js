const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { _id, label, checked } = event;

  if (!_id) {
    throw new Error("Missing _id parameter");
  }

  const updateExpressionParts = [];
  const expressionAttributeValues = {};

  if (label && label.trim() !== "") {
    updateExpressionParts.push("label = :label");
    expressionAttributeValues[":label"] = label.trim();
  }

  if (typeof checked === "boolean") {
    updateExpressionParts.push("checked = :checked");
    expressionAttributeValues[":checked"] = checked;
  }

  if (updateExpressionParts.length === 0) {
    throw new Error("No valid update parameters provided");
  }

  const updateExpression = "SET " + updateExpressionParts.join(", ");

  const params = {
    TableName: "",
    Key: {
      _id: _id.toString(),
    },
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues,
    ReturnValues: "ALL_NEW",
  };

  try {
    const result = await dynamoDB.update(params).promise();
    return result.Attributes;
  } catch (err) {
    return { error: err };
  }
};
