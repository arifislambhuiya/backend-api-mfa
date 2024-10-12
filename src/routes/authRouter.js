import  {Router} from 'express'
import passport from 'passport'

import {
    register,
    login,
    authStatus,
    logout,
    setup2FA,
    verify2FA,
    reset2FA} from "../controllers/authController.js"
    
const router = Router()



// Registration Route
router.post("/register",register)
// Login Route
router.post("/login",login)
// Auth Status Route
router.get("/stutus",authStatus)
// Logout Route
router.post("/logout",logout)

// 2FA setup
router.post("/2fa/setup", setup2FA)

// verify Rrote
router.post("/2fa/varify",verify2FA)

// reset Route
router.post("/2fa/reset", reset2FA)




export default router