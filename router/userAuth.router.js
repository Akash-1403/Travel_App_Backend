
import express from "express";

import {addUsertoDB, loginUser} from "../controller/auth.controller.js"
const router = express.Router();

router.route("/register") // localhose:3500/api/auth/register
        .post(addUsertoDB)
        
router.route("/login")
       .post(loginUser)      

export default router;        
