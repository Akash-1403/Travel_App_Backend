
import mongoose from "mongoose";
import Wishlist from "../model/wishlist.model.js";

//post request;
export const addWishlistToDB = async (req , res) =>{
  const newWishlist = new Wishlist(req.body);
  try{
    const savedWishlist = await newWishlist.save();
    res.status(201).json({message:"Hotel is successfully added to wishlist ", data: savedWishlist })

}catch(error){
  console.log(error);
  res.status(500).json({message:e`rror occured in added to wishlist `})

  }
}

export const getWishlistDataFromDB =  async (req , res) =>{
  try{
    const wishlistfromDb = await Wishlist.find({});
    wishlistfromDb ? 
    res.status(201).json({data:wishlistfromDb})
    : res.json({message:"nothing found in wishlist"})


  }catch(error){
    res.json({message:"internal server error"})

  }
}

export const deleteWishlistFromDB = async (req , res) =>{
  try{
    
     await Wishlist.findByIdAndDelete(req.params.id);
     res.json({message: "hotel is deleted from the wishlist"})


  }catch(error){
    console.log(error)
    res.json({message: "hotel is not deleted from the wishlist"})

  }
}