import { createClient } from "@supabase/supabase-js"

const supaUrl = import.meta.env.VITE_SUPABASE_URL;
const supaApiKey = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(supaUrl, supaApiKey);
