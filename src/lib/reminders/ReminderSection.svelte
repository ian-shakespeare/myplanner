<script lang="ts">
    import type { Reminder } from '$lib/types'
    import { supabase } from '$lib/db'

    export let reminder: Reminder
    let showReminder = true

    const handleUpdate = async () => {
        showReminder = false
        await supabase.from('reminders').update({ is_completed: true }).eq('id', reminder.id)
    }

    const handleDelete = async () => {
        showReminder = false
        await supabase.from('reminders').delete().eq('id', reminder.id)
    }
</script>

{#if showReminder}
<hr class="border-neutral-700" />
<div class="grid gap-2 md:grid-cols-[1fr_auto]">
    <section class="grid gap-2">
        <h1 class="text-xl text-center font-bold">
            {reminder.name}
        </h1>
        <p>
            {reminder.description}
        </p>
        <div class="text-neutral-500">
            {`${new Date(reminder.due_date).toDateString()}`}
        </div>
    </section>
    <div class="w-full flex md:flex-col justify-around gap-8">
        <button class="w-10 h-10 block bg-none" on:click={handleUpdate}>
            <i class="fa-regular fa-circle-check fa-2x text-green-500 hover:text-green-400" />
        </button>
        <button class="w-10 h-10 block bg-none" on:click={handleDelete}>
            <i class="fa-solid fa-xmark fa-2x text-red-500 hover:text-red-400"></i>
        </button>
    </div>
</div>
{/if}