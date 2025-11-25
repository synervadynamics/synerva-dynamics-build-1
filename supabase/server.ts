import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export function getServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Missing Supabase credentials");

  const cookieStore = cookies();
  return createClient(url, key, {
    global: { headers: { Cookie: cookieStore.toString() } },
  });
}
