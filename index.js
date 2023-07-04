const express = require("express");
const userRoute = require("./src/routes/user.route");
const connectToDataBase = require("./src/database/db");
const app = express();
const port = 3000;

connectToDataBase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log("The server is running on port " + port));
