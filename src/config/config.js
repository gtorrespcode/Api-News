
 import dotenv from "dotenv";
 dotenv.config();

 const dbUri = process.env.DB_URI;

export default {
    dbUri
};