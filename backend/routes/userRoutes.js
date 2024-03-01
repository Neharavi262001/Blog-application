import express from 'express'
import { login, logout, register } from '../controllers/userController.js'
import { protectedRoutes } from '../middlewares/authenticationMiddleware.js'
import { deletePost, editPost, getPosts, getSinglePost, getUserPosts, newPost } from '../controllers/postController.js'


const router=express.Router()
router.post('/register', register);
router.post('/login', login);
router.post('/logout', protectedRoutes, logout);

router.get('/', getPosts);
router.get('/post/:id', getSinglePost);
router.get('/post', protectedRoutes, getUserPosts);


router.post('/post', protectedRoutes, newPost);

router.delete('/post/:id', protectedRoutes, deletePost);
router.put('/post/:id', protectedRoutes, editPost);

router.get('/hi', protectedRoutes, (req, res) => {
  res.json('hello');
});
export default router