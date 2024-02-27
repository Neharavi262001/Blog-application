import express from 'express'
import { deletePost, editPost, getPosts, newPost } from '../controllers/postController.js'
import { protectedRoutes } from '../middlewares/authenticationMiddleware.js'

const router=express.Router()
router.get('/posts',getPosts)
router.post('/posts',protectedRoutes,newPost)
router.delete('/posts/:id',protectedRoutes,deletePost)
router.put('/posts/:id',protectedRoutes,editPost)

export default router