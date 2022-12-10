<script lang="ts">
	import AddButton from "$lib/buttons/AddButton.svelte"
	import HistoryButton from "$lib/buttons/HistoryButton.svelte"
	import Reminder from "./Reminder.svelte"
	import { onMount } from "svelte";

    type Reminder = {
        id: number
        name: string
        desc: string
        due: string
    }

    export let reminders: Reminder[]
</script>

<div class="grid gap-6 mx-auto bg-neutral-800 w-80 p-6 rounded-lg md:w-4/5">
    <div class="w-full flex justify-between">
        <AddButton />
        <HistoryButton />
    </div>
    <!-- {#each reminders as reminder}
        <Reminder reminder={reminder} />
    {/each} -->
</div>