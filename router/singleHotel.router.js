
import express from "express";
import Hotel from "../model/hotel.model.js";

const router = express.Router();

//  http://localhost:3500/api/hotel/68886ec5c7e52ed54a83ceff
router.route("/:id")
        .get(async (req , res)=>{
          try{
            const {id} = req.params;
            // console.log(id)
            const hotelData = await Hotel.findById(id);
           
            res.status(200).json({status:"success", errorMessage:null,data:hotelData})

          }catch(error){
            console.log(error);
            res.status(500).json({message:"id not found"})

          }
        })
     
export default router;        
