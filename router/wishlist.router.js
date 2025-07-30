
import express from "express";
import { addWishlistToDB,getWishlistDataFromDB,deleteWishlistFromDB } from "../controller/wishlist.controller.js";
const router = express.Router();
import verifyUser from "../middleware/verifyuser.js";

router.route("/")
        .post(verifyUser,addWishlistToDB)
        .get(verifyUser,getWishlistDataFromDB)
    

       
router.route("/:id")
        .delete(verifyUser,deleteWishlistFromDB)        
        



export default router;        