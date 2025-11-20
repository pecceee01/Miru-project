import Admin from "@/models/admin"
import {generateOtp, sendOtpMail} from "@/utils/apiHelpers"
import { connectDb } from "@/utils/dbConnect"

import bcrypt from 'bcryptjs'

export const POST= async(req)=>{

    try{

        // generate otp
        const otp=generateOtp()
        // take incoming data
        const {email,password}=await req.json()
        if(!email || !password){
            return new Response.json("Provide email and password details")
        }
        
        // call database connection
        connectDb()
        // /hash admin password
        const salt=bcrypt.genSaltSync(16)
        const hashedPassword=bcrypt.hashSync(password, salt)
        const admin=await  Admin.create({
        email:email,
        password:hashedPassword,
        otp:otp
    })
    if(!admin){
        return Response.json(JSON.stringify({msg:"Trouble regsierting admin"}), {status:400})
    }
        sendOtpMail(email,otp)
        return Response.json(JSON.stringify({msg:"admin regisered"}), {status:201})

        
        // const admin= new Admin
        
    }

    catch(err){
        console.log(err.message)
        return Response.json(JSON.stringify({msg:"Server Error"}), {status:500})

    }
        
    }