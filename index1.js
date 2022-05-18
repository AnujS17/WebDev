const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");

//set up an express app
const app = express();

mongoose.connect("mongodb://localhost/pampergo");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use("/api", routes);

//listen to a port
app.listen(process.env.port || 4000, () => {
  console.log("Now listening for requests");
});
