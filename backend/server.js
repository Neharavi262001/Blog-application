import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { db } from './config/db.js'
import { errorHandler, notFound } from './middlewares/errorHandler.js'
import routes from './routes/userRoutes.js'



dotenv.config()
const app =express()
const PORT =process.env.PORT || PORT
db()
const corsOptions={
    origin: 'https://bloggle-topaz.vercel.app', 
    credentials: true 
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/user',routes)




app.use(notFound)
app.use(errorHandler)



app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})