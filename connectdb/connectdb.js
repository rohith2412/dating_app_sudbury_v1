import mongoose from "mongoose"

export const connectdb = async() => {
    try {
        if(mongoose.connection = true) {
            mongoose.connect(process.env.MONGODB_CONNECTION)
           
            return new Response(200)
        }   else    {
            return new Response(401)
        }
    } catch (error) {
        console.log(error)
    }
}