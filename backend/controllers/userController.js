import asyncHandler from 'express-async-handler'
import passwordValidator from 'password-validator'
import User from '../models/userModel.js'
import {generateToken} from '../utils/generateToken.js'


const passwordSchema = new passwordValidator();
passwordSchema
    .is().min(8)                                  
    .is().max(100)                                 
    .has().uppercase()                              
    .has().lowercase()                            
    .has().digits()  
    

// REGISTER    
export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Strong password validation
    if (!passwordSchema.validate(password)) {
        res.status(400).json({
            error: 'Password must be at least 8 characters long and include uppercase, lowercase, and digits.',
        });
        return;
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400).json({ error: 'Email already in use' });
        return;
    }

    // Create user
    const user = await User.create({ name, email, password });

    if (user) {
        // Set the cookie using the response object of the route handler
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400).json({ error: 'Invalid credentials' });
    }
});


//LOGIN
export const login=asyncHandler(async(req,res)=>{
    const {email,password}=req.body

    //check for available user
    const user = await User.findOne({email})

    //check if password matches with the available user
    if (user &&(await user.matchPassword(password))){
        try {
            generateToken(res,user._id)
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
              });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }else{ 
        res.status(401)
        throw new Error('Invalid credentials') 
    }
})

//LOGOUT
export const logout=asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
       })
       res.status(200).json({message:"Logged out successfully"})
})