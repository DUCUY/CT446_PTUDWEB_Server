import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";
import userRouter from "./routers/userRoutes.js";
import giayTamHoanRouter from './routers/giayTamHoanRouter.js'
import giayVayVonRouter from './routers/giayVayVonRouter.js'

import sendMailRouter from './routers/sendMailRouter.js'
env.config();

const app = express();
let PORT = process.env.PORT || 5000; // add your port
let URI = process.env.URI_BASE; // add your URI


app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use("/giayTamHoan", giayTamHoanRouter);
app.use("/giayVayVon", giayVayVonRouter);

app.use("/sendMail", sendMailRouter);
app.use("/user", userRouter);

mongoose
  .connect(
    "mongodb+srv://admin:CAmCUWc9CE1WCymh@cluster0.so3folb.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => { 
    app.listen(PORT, () => {
      console.log("SERVER RUN");
    });
    console.log("connected");
  })
  .catch((err) => {
    console.log(err); 
  });
