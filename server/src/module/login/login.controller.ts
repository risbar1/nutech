require("dotenv").config();
import { Request, Response } from "express";
import axios from 'axios';
import WsModel from "./model";
import {LocalStorage} from 'node-localstorage'; 
var localStorage = new LocalStorage('./scratch');

export const LoginController = async (
  req: Request,
  res: Response
) => {
  try {

    try {
        
        res.status(200).json({
          
        });

      } catch (error) {
        console.log(error)
      }

  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
