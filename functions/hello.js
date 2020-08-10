// https://functions-playground.netlify.app/
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello, World',
  })
}

/*
event = {
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name"
    "headers": {Incoming request headers}
    "queryStringParameters": {query string parameters }
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}

context = ( context in which the serverless function was called )

callback = error or response object: {
    "isBase64Encoded": true|false,
    "statusCode": httpStatusCode,
    "headers": { "headerName": "headerValue", ... },
    "body": "..."
}

ASYNC Hello World
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};
*/
