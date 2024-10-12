require("dotenv").config();
import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB, sequelize } from "./db";
import loginRouter from "./module/login/routes";
import helmet from "helmet";
var bodyParser = require('body-parser')

const app = express();

app.use(express.json({ limit: "100000mb" }));
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(helmet());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get("/api/riskyakbar", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Webservice",
  });
});

// app.use("/api/notes", noteRouter);

//  npm install -g ts-node
// npm run start

app.use("/", loginRouter);



app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: "GAGAL",
    message: `Route: ${req.originalUrl} tidak ada di server ini`,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log("🚀Server dimulai dengan sukses");
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log("✅Database Hidup..");
  });
});
