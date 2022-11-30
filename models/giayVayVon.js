import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
    email: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true
    },
    mssv: {
        type: String,
    }
},{timestamps:true})

export const giayVayVonModel = mongoose.model('dsGiayVayVon',schema)