const validRegister =(req,res,next)=>{
    const {full_name,email,password}=req.body
    if(!full_name || full_name.trim() === ""){
        return res.status(400).json({"message":"name is incorrect or missing"})
    }
    if (!email || !validEmail(email)){
        return res.status(400).json({ message:"email missing or invalid format"})
    }
    if (!password){
        return res.status(400).json({ message:"password missing"})
    }
    next()
}

const validLogin=(req,res,next)=>{
    const {email,password}=req.body
    if (!email || !validEmail(email)){
        return res.status(400).json({ message:"email missing or invalid format"})
    }
    if (!password){
        return res.status(400).json({ message:"password missing"})
    }
    next()
}

const validEmail=(email)=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

module.exports={validRegister,validLogin}