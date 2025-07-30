import Category from "../model/category.model.js";
import categories from "../Data/category.js";

// post request for category
export const  addCategoryInDB = async(req , res)=>{
  try{
    await Category.deleteMany({});
    const category = await Category.insertMany(categories.data)
    res.status(200)
    .json({status:"success", errorMessage:null , data: category})

  }catch(error){
    console.log(error);
    res.status(500).json({message:"internal server error"})
  }
}

export const getCategoryFromDB = async(req , res)=>{
  try{
      const category = await Category.find({});
  res.status(200).json({status:"success", errorMessage:null , data: category})

  }catch(error){
    console.log(error);
    res.status(500).json({message:"could not get categories from DB "})

  }


}
