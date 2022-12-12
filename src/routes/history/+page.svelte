<script lang="ts">
    import type { PageData } from './$types'
    import LogIn from '$lib/auth/LogIn.svelte'
    import ReminderHistory from '$lib/reminders/ReminderHistory.svelte'

    export let data: PageData
    let loggedIn = true
</script>

<svelte:head>
    <title>Past Reminders - MyPlanner</title>
    <meta name="description" content="All of your past reminders">
</svelte:head>
{#if loggedIn}
    <ReminderHistory reminders={data.reminders} />
{:else}
    <LogIn />
{/if}
