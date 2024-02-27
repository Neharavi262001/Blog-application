import express from 'express'
import { login, logout, register } from '../controllers/userController.js'
import { protectedRoutes } from '../middlewares/authenticationMiddleware.js'


const router=express.Router()
router.post('/register',register)
router.post('/login',login)
router.post('/logout',protectedRoutes,logout)

router.get('/hi',protectedRoutes,(req,res)=>{
    res.json('hello')
})

export default router