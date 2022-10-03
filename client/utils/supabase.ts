import { createClient } from "@supabase/supabase-js";

const supabase_url = process.env.NEXT_SUPABASE_API_URL as string;
const supabase_anon_key = process.env.NEXT_SUPABASE_API_KEY as string;
const supabase = createClient(
  "https://hgpzumerjsphfdvadbao.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhncHp1bWVyanNwaGZkdmFkYmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQyOTU1NjksImV4cCI6MTk3OTg3MTU2OX0.ALvTvkpZW9ypKFqlO8XUQULBp4NYDwJc6AzqiRQtqZQ"
);
export default supabase;
