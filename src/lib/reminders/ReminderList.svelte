<script lang="ts">
	import AddButton from '$lib/buttons/AddButton.svelte'
	import HistoryButton from '$lib/buttons/HistoryButton.svelte'
	import ReminderSection from './ReminderSection.svelte'
	import type { Reminder } from '$lib/types'

    export let reminders: Reminder[]
</script>

<div class="grid gap-6 mx-auto bg-neutral-800 w-80 p-6 rounded-lg md:w-4/5">
    <div class="w-full flex justify-between">
        <AddButton />
        <HistoryButton />
    </div>
    {#each reminders as reminder}
        <ReminderSection reminder={reminder} />
    {/each}
</div>