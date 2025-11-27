import Admin from "@/models/admin"
import { connectDb } from "@/utils/dbConnect"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    // take incomin data
    const { email, otp } = await req.json()
    // call database connection
    try {
        await connectDb()
        const user = await Admin.findOne({ email })
        if (!user) {
            return Response.json({ msg: "Invaid operation" }, { status: 500 })


        }
        // check if otp is expired
        // const expiredtime=user.otpExpires + Date.now() +50000
        // if(user.otpExpires>Expiredtime){
        // return Response.json({msg:"Otp xpired"}, {status:500})

        // }

        // check if user is already verified`

        if (user.emailVerified) {
            return Response.json({ msg: "user already verified" }, { status: 500 })

        }

        else{

            // check if user opt matches db otp
            if (otp == user.otp) {
                // verify user email address
                user.emailVerified = true
                // user.otp = null
                
                await user.save()
                return Response.json({ msg: "email verified" }, { status: 200 })
            }
            
            
            
        else {
            
            return Response.json({ msg: "InvalidOtp" }, { status: 500 })
        }
    }


    }

    catch (err) {
        console.log(err.message)
        return Response.json({ msg: "server Error" }, { status: 500 })

    }
}