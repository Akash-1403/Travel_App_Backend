
import express from "express";
import mongoose from "mongoose";
import  connectDB  from "./config/dbconfig.js";
import dotenv from "dotenv"; 
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

// import posthoteldatainDBRouter from "./router/dataimport.router.js"
import hotelRouter from "./router/Hotels.router.js";
import posthoteldatainDBRouter from "./router/Hotels.router.js";
import singleHotelRouter from "./router/singleHotel.router.js"

import CategoryRouter from "./router/category.router.js";
import postCategorydatainDBRouter from "./router/category.router.js"
import authRouter from "./router/userAuth.router.js"

import wishlistRouter from "./router/wishlist.router.js"

const PORT = 3500;


app.get("/", (req,res)=>{
  res.send("hello world")
})

/**Hotel API */
app.use("/api/postDatahotels", posthoteldatainDBRouter );
app.use("/api/hotels", hotelRouter );
app.use("/api/hotels",singleHotelRouter);

/**category api */
app.use("/api/categorydata",postCategorydatainDBRouter )
app.use("/api/category", CategoryRouter);

/** User login Api */
app.use("/api/auth", authRouter);

/** Wishlist API */
app.use("/api/Wishlist", wishlistRouter);

connectDB();

mongoose.connection.once("open",()=>{
  console.log("connect to DB...")
  app.listen(process.env.PORT || PORT,() =>{
    console.log("Server is up and running");
  
  })
})


