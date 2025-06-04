import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

// console.log("SUPABSE_URL", process.env.SUPABASE_URL);


// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://cbienhdnluxgskdjtwet.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;