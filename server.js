var app = require("./public/app");
var http = require("http");
var port = process.env.PORT || 3000;

app.set("port", port);

var server = http.createServer(app);
server.listen(port, function() {
  console.log("Express server listening on port " + port);
});
