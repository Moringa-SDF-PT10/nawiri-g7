// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Optional: Add a check to ensure variables are loaded in development
if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL or Anon Key is missing. Check your .env file.");
    // You might want to throw an error or handle this gracefully in a real app
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);