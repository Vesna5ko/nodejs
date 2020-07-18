const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((request, response) => {
    console.log("Recived an incoming request!");
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html",
    });
    let responseMassage = "<h1>Hello, Universe!</h1>";
    response.write(responseMassage);
    response.end();
    console.log(`Sent a response :${responseMassage}`);
  });
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
