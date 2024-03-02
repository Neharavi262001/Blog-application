import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

//get all posts
export const getPosts=asyncHandler(async(req,res)=>{
    try {
        const posts = await Post.find().sort({createdAt:-1}).populate({
            path: 'user',
            select: 'name',
        }) 
        res.status(200).json(posts) 
    } catch (error) {
        res.status(500).json({error:"Internal Server error"})
    }
})

//get single post 
export const getSinglePost= async(req,res)=>{
    const {id}=req.params
    try {
        const post = await Post.findById(id).populate({
            path: 'user',
            select: 'name',
        }) 

        if(!post){
            res.status(404).json('Post not found')
            return
        }
        res.status(200).json(post)
    } catch (error) {
        
    }

}

//create new post
export const newPost=asyncHandler(async(req,res)=>{
    const {title,description}=req.body
    if (!title || !description){
        res.status(400)
        throw new Error("Title and description required")
    }

    try {
       const post = await Post.create({
            title,
            description,
            user:req.user.id,
       }) 
       res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal Server error"}) 
    }
})

//delete post
export const deletePost=asyncHandler(async(req,res)=>{
    const {id}=req.params
    try {
        const post = await Post.findOneAndDelete({_id: id, user: req.user.id})

        if (!post){
            res.status(404).json({error:"Post not found !"})
            return
        }
        res.status(200).json(post)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:"Internal Server error"}) 
    }
})

//edit post
export const editPost=asyncHandler(async(req,res)=>{
    const { id } = req.params;
    const { title, description } = req.body;
    // if (!title || !description){
    //     res.status(400)
    //     throw new Error("Title and description required")
        
    // }
    try {
        //const post = await Post.findOneAndUpdate({ _id: id, user: req.user.id }, { title, description,}, { new: true })
        const post =await Post.findByIdAndUpdate(id,{title,description},{new:true})
        if (!post){
            res.status(404)
            throw new Error("Post not found !")
            
        }
        res.status(200).json(post)
        
    } catch (error) {
        console.log(error.message)
        res.status(500)
        throw new Error("Internal server error")
    }
})

//get user's posts
export const getUserPosts=asyncHandler(async(req,res)=>{
    try {
        const posts = await Post.find({ user: req.user._id }).sort({createdAt:-1}).populate({
            path: 'user',
            select: 'name',
        }) 
        
        res.status(200).json(posts) 
    } catch (error) {
      
        res.status(500).json({error:"Internal Server error"})
    }
})





