const express= require("express");
const router=express.Router();
const { register, login, refreshToken, getMe }=require("../controllers/auth.controller");
const {validRegister,validLogin} = require("../validators/auth.validator");
const {authGaurd} = require("../middlewares/auth.guard");

router.post("/register",validRegister,register);
router.post("/login",validLogin,login);
router.post("/refresh",refreshToken);
router.get("/me",authGaurd,getMe);

module.exports=router;
