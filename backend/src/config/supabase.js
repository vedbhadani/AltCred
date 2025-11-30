const {createClient}=require("@supabase/supabase-js");
const {supabaseUrl,supabaseSecretKey}=require("./env");

const supabase = createClient(supabaseUrl,supabaseSecretKey , {
  auth: { persistSession: false },
});

module.exports={supabase};