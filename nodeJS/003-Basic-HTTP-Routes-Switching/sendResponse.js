const writeResponseHead = (responseObject, statusCode, headerContent) => {
    responseObject.writeHead(statusCode, headerContent);
    return responseObject;
}

const writeData = (data) => {
    responseObject.write(data);
}


const sendResponse = (responseObject) => {
    responseObject = writeResponseHead(responseObject, 200, {
        'Content-type': 'application/json'
    });
    responseObject = writeData(responseObject, "Hello from Node.js");
    
    return responseObject;
}

module.exports = sendResponse;