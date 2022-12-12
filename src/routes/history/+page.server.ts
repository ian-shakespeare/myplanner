import type { Reminder } from '$lib/types'
import type { PageServerLoad } from './$types'
import { supabase } from '$lib/db'

export const load: PageServerLoad = ( async () => {
    const { data: reminders, error } = await supabase.from('reminders')
        .select('*')
        .eq('is_completed', true)
        .order('due_date', { ascending: false })
    return {
        reminders: reminders as Reminder[]
    }
})