
import express from "express"

import hotels from "../Data/hotels.js"
import Hotel from "../model/hotel.model.js"


import addHotelInDb from "../controller/hotel.controler.js"

const router = express.Router();

// router.route("/")  // /api/hotels/
//   .post(async (req, res) => {
//     try {
//       await Hotel.deleteMany({});
//       const hotelInDB = await Hotel.insertMany(hotels.data);
//       res.json(hotelInDB)
//     } catch (error) {
//       console.log(error);
//       res.json({ message: "could not added to database" })
//     }
//   })

router.route("/")
      .post(addHotelInDb)

export default router;