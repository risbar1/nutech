import express from "express";


import {
  BannerController,
  Servicescontroller,
  Profilecontroller,
  Profileputcontroller,
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

router
.route("/profile")
.put(Profileputcontroller)

export default router;
