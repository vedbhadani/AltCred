const jwt =require("../utils/auth.utils")

const authGaurd=(req,res,next)=>{
    const header = req.headers.authorization
    if (!header || !header.startsWith("Bearer")){
    return res.status(401).json({message: "invalid token"})
    }
    const token=header.split(" ")[1]
    try{
        const decoded=jwt.verifyAccessToken(token)
        req.user=decoded
        next()
    }
    catch(err){
        return res.status(401).json({message: "Invalid or expired token"})
    }
}

module.exports={authGaurd}