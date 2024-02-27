import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        isUnique:true
    },
    password:{
        type:String,
        required:true,
        
    },
},{
    timestamps:true
})

userSchema.pre('save',async function(next){
    if (!this.isModified('password')){
     next()
    } 
 
    const salt = await bcrypt.genSalt(10)
     const hash=await bcrypt.hash(this.password,salt)
     this.password=hash
 })

userSchema.methods.matchPassword = async function (enteredPassword) {
    try {
   const isMatch = await bcrypt.compare(enteredPassword, this.password);
   return isMatch;
 } catch (error) {
   console.error('Password comparison error:', error);
   return false;
 }
 };

 export default mongoose.model('User',userSchema)