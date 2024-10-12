import bcrypt from "bcryptjs"
import {User} from '../models/user.model.js'

export const register  = async (req,res)=>{
    try {
        const {username,password} = req.body
        const hashedPassword = bcrypt.hash(password,10)
        const newUser = new User({
            username,
            password:hashedPassword,
            isMfaActive:false
        })
        const user = await newUser.save()
        console.log(user)
        res.status(201).json({message:"user created successfully",user})


    } catch (error) {
        res.status(500).json({error:"Error registering user",message:error})
    }

}

export const login = async (req,res)=>{

}


export const authStatus = async (req,res)=>{

}


export const logout = async (req,res)=>{

}

export const setup2FA = async (req,res)=>{

}
export const verify2FA = async (req,res)=>{

}


export const reset2FA = async (req,res)=>{

}

