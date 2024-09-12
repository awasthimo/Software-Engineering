import express from "express";
import dotenv from "dotenv";
import connectDB from "./dbConfig/dbConfig.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import studentRouter from "./routes/routes.students.js"

const app = express()
dotenv.config();
connectDB().then(()=>{
  console.log('connection successful');
}
).catch((err)=>{
  console.log('no connection');
})


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/students",studentRouter);


app.listen(8000,()=>{
    console.log("Server is running");
})