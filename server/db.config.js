/*eslint-env node */
// connection configuration
var mongoose=require("mongoose");
var mongo = process.env.VCAP_SERVICES;
var port = process.env.PORT || 3030;
var conn_str = "";
// if bluemix service is defined
if (mongo) {
  var env = JSON.parse(mongo);
  if (env["mongodb"]) {
// get predefined credentials
// in order to get url information
    mongo = env["mongodb"][0]["credentials"];
    if (mongo.url) {
      conn_str = mongo.url;
    } else {
      console.log("No mongo found");
    }
// if no mongodb service bound to app
// set default local server path
  } else {
    conn_str = "mongodb://localhost:27017";
  }
// if no services found
// use local server path
} else {
  conn_str = "mongodb://localhost:27017";
}
mongoose.connect(conn_str);
