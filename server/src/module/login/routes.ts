import express from "express";
import { validate } from "../..//middleware/validate";
import {
  LoginController,
} from "./login.controller";

const router = express.Router();

router
  .route("/")
  .get(LoginController)

export default router;
