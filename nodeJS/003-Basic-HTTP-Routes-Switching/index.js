const http = require('http');
const url = require('url');
const {routes} = require('./routes');

http.createServer(function (request, response) {
  
  const {pathname,query} = url.parse(request.url);
  response  = routes(pathname, query);
  response.end();

}).listen(7000);