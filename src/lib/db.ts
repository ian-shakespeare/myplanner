import { createClient } from '@supabase/supabase-js'
import { PUBLIC_API_URL, PUBLIC_API_KEY } from '$env/static/public'

export const supabase = createClient(PUBLIC_API_URL, PUBLIC_API_KEY)