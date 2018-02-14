var app = require("./app");
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log("Express server listening on port " + port);
  console.log("go to http://localhost:3000/graphiql to run a test query");
});
