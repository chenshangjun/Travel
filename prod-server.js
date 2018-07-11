const express = require("express");

const axios = require("axios");

const config = require("./config/index");

const port = process.env.PORT || config.build.port;

const app = express();

const apiRouters = express.Router();



app.use("/api", apiRouters);

app.use(express.static("./dist"));

module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening at http://localhost" + port + "\n");
});
