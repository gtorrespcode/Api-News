import jwt from "jsonwebtoken";
import { secretJwt } from "../config/config.js";
import userService from "../services/user.service.js";

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: "Not authorized" });
    }

    const parts = authorization.split(" ");
    const [schema, token] = parts;

    if (parts.length !== 2) {
      return res.send(401);
    }

    if (schema !== "Bearer") {
      return res.send(401);
    }

    jwt.verify(token, secretJwt, async (error, decoded) => {
      if (error) {
        res.status(401).send({ message: "Invalid Token" });
      }
      const user = await userService.findByIdService(decoded.id);

      if (!user || !user.id){
        return res.status(401).send({message: "Invalid Toekn"});
      }
      req.userId = user.id;
      return next();
    });

    
  } catch (err) {
    res.status(500).send(err.message);
  }
};
