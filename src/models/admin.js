import mongoose from "mongoose"

const adminSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"admin"
        
    },
    email:{
        type:String,
        unique:true,
        required:true
    
    },
    password:{
        type:String,
      
    
    },
    otp:{
        type:String,
        required:true
    },
    emailVerified:{
        type:Boolean,
        default:false
    },
    otpExpires:{
        type:Date,
        default:null
    }

   
},{timestamps:true})
const Admin= mongoose.models.admin || mongoose.model('admin',adminSchema)
export default Admin