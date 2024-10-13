require("dotenv").config();
import { Request, Response } from "express";
import axios from 'axios';
import WsModelBanner from "./model_banner";
import WsModelServices from "./model_services";
import WsModel from "../../module/login/model";
import bcrypt from  "bcryptjs";
import jwt from "jsonwebtoken";

export const BannerController = async (
  req: Request,
  res: Response
) => {
  try {
    
    const data = await WsModelBanner.findAll({});
    res.status(200).json({
      status: "0",
      message:'Sukses',
      data: data
    });
    
} catch (err) {
    res.status(500).json({
      status: "500",
      message:'Error in registering user',
    });
}
};

export const Servicescontroller = async (
  req: Request,
  res: Response
) => {
  try {
    
    const data = await WsModelServices.findAll({});
    res.status(200).json({
      status: "0",
      message:'Sukses',
      data: data
    });
    
} catch (err) {
    res.status(500).json({
      status: "500",
      message:'Error in registering user',
    });
}
};


export const Profilecontroller = async (
  req: Request,
  res: Response
) => {
  try {
    const authHeader = req.header('authorization');
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || authHeader && authHeader.split(' ')[1];
    const user = jwt.decode(token)
    const data = await WsModel.findAll({
      where: {
        email: user.email,
      }});
    res.status(200).json({
      status: "0",
      message:'Sukses',
      data: data
    });
    
} catch (err) {
    res.status(500).json({
      status: "500",
      message:'Error in registering user',
    });
}
};