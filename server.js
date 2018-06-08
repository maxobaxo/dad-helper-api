const app = require("./app");
const https = require("https");
const fs = require("fs");
const port = process.env.PORT || 3000;

app.set("port", port);

const options = {
  key: fs.readFileSync("./key/account-key.txt"),
  cert: fs.readFileSync("./key/domain-csr.txt")
};

const server = https.createServer(options, app);

server.listen(port, function() {
  console.log("HTTPS server listening on port " + port);
});
