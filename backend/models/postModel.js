import mongoose from 'mongoose'

const Schema = mongoose.Schema
 const postSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   
},{timestamps:true})

export default mongoose.model('Post',postSchema)