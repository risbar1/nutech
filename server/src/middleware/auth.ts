require("dotenv").config();
import { Request, Response, NextFunction } from 'express';

import jwt from "jsonwebtoken";

export const auth = async (
  req: Request,
  res: Response,
  next:NextFunction
) => {
  try {


    const authHeader = req.header('authorization');
   
    if (!authHeader) return res.status(401).send({  status: "108",
      message:'Token tidak tidak valid',
      data:null });

      const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || authHeader && authHeader.split(' ')[1];
  

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      // console.log(err)
      return res.status(401).send({  status: "108",
        message:'Invalid Token',
        data:null });
    }
    return next();
    
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

