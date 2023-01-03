import mongoose from "mongoose"
const Schema = mongoose.Schema

const userSchema = new Schema({ 
    username: {
        type: String, 
        required: true,
        minLength: 3
    }, 
    email: {
        type: String,
        required: true
    },
    kota: {
        type: String,
        required: true
    }
})

export default mongoose.model("users", userSchema)

