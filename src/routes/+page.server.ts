import type { Reminder } from '$lib/types'
import type { PageServerLoad, Actions } from './$types'
import { supabase } from '$lib/db'

export const load = ( async () => {
    const { data: reminders, error } = await supabase.from('reminders')
        .select('*')
        .eq('is_completed', false)
        .order('due_date', { ascending: true })
    return {
        reminders: reminders as Reminder[]
    }
}) satisfies PageServerLoad

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData()
        const name = data.get('name')
        const description = data.get('description')
        const dueDate = data.get('due_date')

        if (!name || !description || !dueDate) return { success: false }

        await supabase.from('reminders').insert({
            name: name,
            description: description,
            due_date: dueDate
        })

        return { success: true }
    }
}