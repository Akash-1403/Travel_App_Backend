
import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username : {type: String, required:true},
  number : {type: String, required:true, unique:true},
  email: {type: String, required:true, unique:true},
  password : {type: String, required:true}
},
{
  timestamps : true,
// this timestamps uesd to genreate the time when the user created and its updation also.
}
)

const User = mongoose.model("User", userSchema);

export default User;
