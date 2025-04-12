import mongoose from "mongoose"

export const connectdb = async() => {
    if(mongoose.connection = true) {
        mongoose.connect(process.env.MONDODB_CONNECTION)
        console.log("connected")
        return new Response(200)
    }   else    {
        return new Response(401)
    }
}