// General validation helpers
const validateJSON = (req,res,next) =>{
    const ct = (req.headers['content-type'] || '').toLowerCase();
    if(!ct.startsWith('application/json')){
        return res.status(400).json({error:'Content-Type must be application/json'});
    }
    next();
};

const validateBody = (req,res,next) =>{
    if(!req.body || Object.keys(req.body).length === 0){
        return res.status(400).json({error:'Request body is required'})
    }
    next();
};

// Auth validation
const validateRegister = (req,res,next) =>{
    const {name,email,password} = req.body;

    if(!name||!password||!email){
        return res.status(400).json({error:'Name, email and password are required'})
    }
    if(password.length < 6){
        return res.status(400).json({error:'Password must be at least 6 characters'})
    }
    next();
};

const validateLogin = (req,res,next) =>{
    const {email,password} = req.body;

    if(!email||!password){
        return res.status(400).json({error:'Email and password are required'})
    }
    next();
};

// Credit scoring validation (for future use)
const validateCreditData = (req,res,next) =>{
    const {income,expenses,employment} = req.body;

    if(!income||!expenses||!employment){
        return res.status(400).json({error:'Income, expenses and employment data are required'})
    }
    if(income < 0 || expenses < 0){
        return res.status(400).json({error:'Income and expenses must be positive numbers'})
    }
    next();
};

module.exports = { 
    validateJSON,
    validateBody,
    validateRegister, 
    validateLogin,
    validateCreditData
};
