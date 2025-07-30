
import jwt from "jsonwebtoken";

const verifyUser  = (req,res,next)=>{
  const token = req.headers.authorization;
  if(token){
    jwt.verify(token, process.env.Access_token_key, (error,user)=>{
      if(error){
        res.status(500).json({message:"invalid Token"})
      }
      req.user = user;
      next();
    })
  }
}

export default verifyUser;
