var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
  response.writeHead(200, {
    'Content-type': 'text/plan'
  });
  response.write('Hello Node JS Server Response');
  response.end();

  const {pathname,query} = url.parse(request.url);

  console.log("pathname", pathname);
  console.log("queryParameters", query);

}).listen(7000);