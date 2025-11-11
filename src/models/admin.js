import mongoose from "mongoose"

const adminSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        unique:true,
    
    },
    otp:{
        type:Number,
    }
})