require("dotenv").config();
import { Request, Response } from "express";
import axios from 'axios';
import WsModel from "./model";
import bcrypt = require("bcryptjs");
import jwt = require("jsonwebtoken");

export const LoginController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;
    const user = await WsModel.findOne({
        where: {email}
    });
    if (!user) {
        res.status(401).json({
          status: "103",
          message:'Email tidak ditemukan',
          data:null
        });
    }


    // Verify password
    const passwordValid = await bcrypt.compare(password, user?.dataValues.password);
    if (!passwordValid) {
        res.status(401).json({
          status: "103",
          message:'Email atau password salah',
          data:null
        });
    }

    // Authenticate user with jwt
    const token = jwt.sign({ email: user?.dataValues.email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_REFRESH_EXPIRATION
    });

    res.status(200).json({
      status: "0",
      message: "Login Sukses",
      data:{
        token: token,
      }
    });

  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const RegistrasiController = async (
  req: Request,
  res: Response
) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    // Check if the email exists
    const userExists = await WsModel.findOne({
        where: {email}
    });
    if (userExists) {
        res.status(400).json({
          status: "102",
          message:'Email sudah ada',
          data: null
        });
    }

    await WsModel.create({
      first_name,
      last_name,
      email,
      password: await bcrypt.hash(password, 15),
    });

    res.status(200).json({
      status: "200",
      message:'Registrasi berhasil silahkan login',
      data: null
    });
} catch (err) {
    res.status(200).json({
      status: "500",
      message:'Error in registering user',
    });
}
};

