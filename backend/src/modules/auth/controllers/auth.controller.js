const {register,login,refreshToken,getMe}=require("../services/auth.service")
const registerController=async(req,res)=>{
    const result=await register(req,res)
    if(result.user){
        return res.status(201).json({
            "user":result.user,
            "accessToken":result.accessToken,
            "refreshToken":result.refreshToken
        })
    }
}

const loginController=async(req,res)=>{
    const result=await login(req,res)
    if(result.user){
        return res.status(200).json({
            "user":result.user,
            "accessToken":result.accessToken,
            "refreshToken":result.refreshToken
        })
    }
}

const refreshTokenController=async(req,res)=>{
    const result=await refreshToken(req,res)
    if(result.accessToken){
        return res.status(200).json({
            "accessToken":result.accessToken
        })
    }
}

const getMeController=async(req,res)=>{
    const user=await getMe(req,res)
    if(user){
        return res.status(200).json({
            "user":user
        })
    }
}

module.exports={
    register: registerController,
    login: loginController,
    refreshToken: refreshTokenController,
    getMe: getMeController
}