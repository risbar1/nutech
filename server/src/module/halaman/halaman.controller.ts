require("dotenv").config();
import { Request, Response } from "express";
import axios from 'axios';
import WsModelBanner from "./model_banner";
import bcrypt from  "bcryptjs";
import jwt from "jsonwebtoken";

export const Bannerontroller = async (
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