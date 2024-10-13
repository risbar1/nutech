import express from "express";


import {
  Bannerontroller,
} from "./halaman.controller";

const router = express.Router();

router
.route("/banner")
.get(Bannerontroller)

export default router;
