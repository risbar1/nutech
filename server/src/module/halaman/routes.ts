import express from "express";


import {
  BannerController,
  Servicescontroller,
  Profilecontroller,
} from "./halaman.controller";

const router = express.Router();

router
.route("/banner")
.get(BannerController)

router
.route("/services")
.get(Servicescontroller)

router
.route("/profile")
.get(Profilecontroller)

export default router;
