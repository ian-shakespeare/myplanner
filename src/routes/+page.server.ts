import { API_KEY } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'
import type { PageLoad } from './$types'


const SUPABASE_URL = 'https://kzotwudfgfvjmfjqxsso.supabase.co'
const supabase = createClient(SUPABASE_URL, API_KEY)

const loadData = async () => {
    const { data: reminders, error } = await supabase.from('reminders').select('*')
    console.log(error)
    console.log(reminders)
}

export const load: PageLoad = (() => {
    console.log(API_KEY) // secret
    loadData()
    return {
        reminders: [
            {
                id: 1,
                name: 'Test',
                description: 'This is a test',
                due: '2022/12/29'
            }
        ]
    }
})