const mongoose = require("mongoose");
const config = require("../config/config")

const connectToDataBase = () => {
  () => console.log("Waiting for connections");
  mongoose
    .connect(
      config.dbUri,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("You are connected to the Database"))
    .catch((err) => console.log(err));
};

module.exports = connectToDataBase;
