import express from "express";
import { validate } from "../..//middleware/validate";
import {
  LoginController,
  RegistrasiController
} from "./login.controller";

const router = express.Router();

router
  .route("/login")
  .post(LoginController)

router
.route("/registration")
.post(RegistrasiController)

export default router;
