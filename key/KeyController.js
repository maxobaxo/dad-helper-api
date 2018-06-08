var express = require("express");
var fs = require("fs");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

var key = fs.readFileSync("./account-key.txt");
var cert = fs.readFileSync("./domain-csr.txt");

router.get("/", function(res, err) {
  if (err) return res.status(500).send("There was a problem return the keys.");
  res.status(200).send(key, cert);
});

module.exports = router;
