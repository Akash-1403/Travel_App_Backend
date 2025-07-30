
import express from "express"

/* 
import hotels from "../Data/hotels.js"
import Hotel from "../model/hotel.model.js"
// import addHotelInDb from "../controller/hotel.controler.js"
// import hotelController from "../controller/hotel.controler.js";
*/

import {getHotelData,addHotelInDb} from "../controller/hotel.controler.js"


const router = express.Router();
router.route("/")
       .get(getHotelData)
       .post(addHotelInDb)
//         .get(hotelController.getHotelData)
//  .post(hotelController.addHotelInDb);
       
export default router;



/* // router.route("/")  //http://localhost:3500/api/hotels
//   .get (async(req, res)=> {
    
//   try {
//     const hotels = await Hotel.find({});
//     (hotels) ?
//       res.status(200)
//         .json({ status: "success", errorMessage: null, data: hotels })
 
//       :res.status(200)
//         .json({ status: "success", errorMessage: null, data: "no data found " })

  
//   } catch (error) {
//     console.log(error);
//   }
// })
 */