<script lang="ts">
    import type { Reminder } from '$lib/types'
    import BackButton from '$lib/buttons/BackButton.svelte'

    export let reminders: Reminder[]
</script>

<div class="grid gap-6 mx-auto bg-neutral-800 w-80 p-6 rounded-lg md:w-4/5">
    <div class="w-full flex">
        <BackButton styleClass="justify-self-start" />
    </div>
    {#each reminders as reminder}
        <hr class="border-neutral-700" />
        <div class="flex justify-between items-center flex-col md:flex-row">
            <section>
                <h1 class="text-xl font-bold">{reminder.name}</h1>
                <p class="hidden md:inline">
                    {reminder.description}
                </p>
            </section>
            <span class="text-neutral-500">
                {`${new Date(reminder.due_date).toDateString()}`}
            </span>
        </div>
    {/each}
</div>