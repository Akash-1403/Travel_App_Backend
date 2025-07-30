
import Hotel from "../model/hotel.model.js";
import hotels from "../Data/hotels.js";



/* export const addHotelInDb = async (req , res) =>{
  try{
    // const hotels  = new Hotel(req.body);
    const hotelData = await Hotel.insertMany(hotels.data);
    //  await Hotel.insertMany({});
    res.status(200)
    .json({status: "success", errorMessage:null, data:`data Added to the database sussesfully :  ${hotelData}` })

  }catch(error){
    console.log(error)
      res.status(500)
    .json({status: "success", errorMessage:err, data:"Error occured in data Added to the database " })


  }
} */

  // post req for hotal 
export  const addHotelInDb = async (req,res)=>{
    try{
      await Hotel.deleteMany({});
      const hotelInDB = await Hotel.insertMany(hotels.data) ;
      res.json(hotelInDB)
    }catch(err){
      console.log(err);
      res.json({message : "could not added to database"})
    }
  }

export   const getHotelData = async (req,res)=>{
  const hotelCategory = req.query.category;
  // console.log(hotelCategory)

  //http://localhost:3500/api/hotels?category=national+park
 try{
    let hotels;
    if(hotelCategory){
      
      hotels = await Hotel.find({category:hotelCategory });
      
    }else{
        hotels = await Hotel.find({});

    }
     (hotels) ?
      res.status(200)
       .json({status: "success", errorMessage:null, data: hotels})

        :res.status(200)
       .json({status: "success", errorMessage:null, data: "data not found"})


   }catch(error){
         console.log(error);
  }
}

  
// export default  {addHotelInDb,getHotelData} ;

