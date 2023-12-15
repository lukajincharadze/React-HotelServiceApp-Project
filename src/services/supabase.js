import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kddvxvzkmhqoqurjbrig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZHZ4dnprbWhxb3F1cmpicmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4ODI3NjcsImV4cCI6MjAxNzQ1ODc2N30.c_5A7nOW1_ouUhafiYTPMNE7UxjXYQnXOMuqEzMHDlw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
