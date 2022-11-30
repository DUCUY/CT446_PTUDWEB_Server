import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true
  },
  name: {
    type: String,
  },
  mssv: {
    type: String,
  },
  type : {
    type:String,
    default:'user'
  }
});



export const users = mongoose.model("users", userSchema);