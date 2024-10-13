import express from "express";


import {
  BannerController,
  Servicescontroller,
  Profilecontroller,
  Profileputcontroller,
  Imageputcontroller,
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

router
.route("/image")
.put(Imageputcontroller)

export default router;
