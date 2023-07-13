import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { secretJwt } from "../config/config.js";

const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

const generateToken = (id) =>
  jwt.sign({ id: id }, secretJwt, { expiresIn: 49 });

export { loginService, generateToken };
