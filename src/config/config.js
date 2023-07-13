
 import dotenv from "dotenv";
 dotenv.config();

 const dbUri = process.env.DB_URI;
 const secretJwt = process.env.SECRET_JWT;

export  {
    dbUri,
    secretJwt
};