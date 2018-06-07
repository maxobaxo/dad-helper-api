var app = require("./app");
var fs = require("fs");
var https = require("https");
var port = process.env.PORT || 3000;

var key = fs.readFileSync("encryption/private.key");
var cert = fs.readFileSync("encryption/primary.crt");
var ca = fs.readFileSync("encryption/intermediate.crt");

var options = {
  key: key,
  cert: cert,
  ca: ca
};

app.set("port", port);

var server = https.createServer(options, app);
server.listen(port, function() {
  console.log("Express server listening on port " + port);
});
