var app = require("./app");
var port = process.env.PORT || 3000;

app.set("port", port);

var server = https.createServer(app);
server.listen(port, function() {
  console.log("Express server listening on port " + port);
});
