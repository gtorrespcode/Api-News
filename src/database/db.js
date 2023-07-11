import mongoose from "mongoose";
import config from "../config/config.js";

const connectToDataBase = () => {
  () => console.log("Waiting for connections");
  mongoose
    .connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("You are connected to the Database"))
    .catch((err) => console.log(err));
};

export default connectToDataBase;
