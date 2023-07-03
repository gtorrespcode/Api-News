const express = require("express");
const userRoute = require("./src/routes/user.route");
const app = express();
const port = 3000;
app.use(express.json());
app.use("/users", userRoute);

app.listen(port, () => console.log("The server is running on port " + port));
