const app = require("./app");
const https = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

app.set("port", port);

const options = {
  key: fs.readFileSync("/keys/account-key.txt"),
  cert: fs.readFileSync("/keys/domain-csr.txt")
};

const server = https.createServer(options, app);

server.listen(port, function() {
  console.log("HTTPS server listening on port " + port);
});
