
import mongoose from "mongoose";
import User from "../model/user.model.js";
import { encryptText, decryptText } from "../utils/index.js";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";

// post request for user
export const addUsertoDB = async (req , res)=>{

  try{
    const userObject = {
      username: req.body.username,
      number : req.body.number,
      email : req.body.email,
      password : encryptText(req.body.password, process.env.Password_Secrect_key)
    }
  
    // it creates the new User schema model.
    const newUser = new User(userObject);
    // now we have to save the new user.
    const savedUser = await newUser.save();
    res.status(201).json({status:"success", errorMessage:null, data: `${savedUser.username} added to DB..`})

  }catch(error){
    console.log(error)
    .res(500).json({message: "the user could not add to DB.."})

  }

}

// check user is login or not 
export const loginUser = async (req , res)=>{
  try{
   
    // checking user is register or not.
    // this findOne method give an array of the user object where the number is matched with user req.body.number.
    const registerUser = await User.findOne({number:req.body.number});
    !registerUser && res.status(401).json({status:"error", errorMessage:err,data:"incorect number"})

    // checking password is correct or not
    // console.log(registerUser.password);
    const decodedPassword = decryptText(registerUser.password, process.env.Password_Secrect_key)
    
    // console.log(decodedPassword);

    req.body.password !== decodedPassword && res.status(401).json({message:"Incorrect password"});


    const {password, ...rest} = registerUser._doc;

    // adding jwt token
    const generateToken = jwt.sign({number : registerUser.number}, process.env.Access_token_key);

    // now token is generated for user unique number.
    
    
  
    res.status(201).json({...rest, generateToken} );

  }catch(err){
    console.log(err);
    res.json({ error: err})
  }

}

// export default addUsertoDB;