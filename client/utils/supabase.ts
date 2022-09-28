import { createClient } from "@supabase/supabase-js";

const supabase_url = process.env.NEXT_SUPABASE_API_URL as string;
const supabase_anon_key = process.env.NEXT_SUPABASE_API_KEY as string;
const supabase = createClient("", "");
export default supabase;
