import { API_URL, API_KEY } from '$env/static/private'
import type { Reminder } from '$lib/types'
import { createClient } from '@supabase/supabase-js'
import type { PageServerLoad } from './$types'

const supabase = createClient(API_URL, API_KEY)

export const load: PageServerLoad = ( async () => {
    const { data: reminders, error } = await supabase.from('reminders').select('*')
    return {
        reminders: reminders as Reminder[]
    }
})