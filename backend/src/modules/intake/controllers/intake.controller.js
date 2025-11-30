const {intakeData} = require("../services/intake.service")
const {supabase} =require("../../../config/supabase")

async function saveAnswers(req,res,next){
  try {
    const {data: user,error:userError}= await supabase
      .from('users')
      .select('id')
      .eq('id', req.user.id)
      .single();

    if (userError || !user){
      return res.status(404).json({ 
        success: false, 
        message: 'User not found',
        userId: req.user.id
      })
    }

    const stored = await intakeData(req.user.id, req.body.answers);
    res.status(201).json({success: true,stored})
  } catch (err) {
    console.error('Error in saveAnswers:',err)
    next(err)
  }
}

module.exports ={saveAnswers};
