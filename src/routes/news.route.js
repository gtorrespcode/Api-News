import { Router } from "express";
import {create, findAll} from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);

export default router;