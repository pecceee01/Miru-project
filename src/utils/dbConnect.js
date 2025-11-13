import mongoose from "mongoose"

export const connectDb= async ()=>{
    try{
        const dbConnection= await mongoose.connect(process.env.MONGODB_URL)
        if(dbConnection){
            console.log("Dabase connected")
        }
        
        return dbConnection
    }

    catch(err){
        console.log(err.message)
    }

    // finally {
    //     mongoose.close()
    // }
}