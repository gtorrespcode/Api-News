import express, { json } from "express";
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import connectToDataBase from "./src/database/db.js";
const app = express();
const port = process.env.PORT || 3000;

connectToDataBase();
app.use(json());
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(port, () => console.log("The server is running on port " + port));
