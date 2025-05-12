import { supabase } from "./client"

export async function isLoggedIn(): Promise<boolean> { // resolve to bool
  const {
    data: { session },
    error
  } = await supabase.auth.getSession()

  if (error) {
    console.error('Error checking session:', error.message)
    return false;
  }

  if (session && session.user) {
    return true;
  } else {
    return false;
  }
}
