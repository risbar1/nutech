import express from "express";


import {
  BannerController,
  Servicescontroller,
} from "./halaman.controller";

const router = express.Router();

router
.route("/banner")
.get(BannerController)

router
.route("/services")
.get(Servicescontroller)

export default router;
