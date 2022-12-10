<script lang="ts">
    import type { PageData } from './$types'
    import LogIn from '$lib/auth/LogIn.svelte'
    import ReminderList from '$lib/reminders/ReminderList.svelte'

    export let data: PageData
    let loggedIn = true
</script>

{#if loggedIn}
    <ReminderList reminders={data.reminders} />
{:else}
    <LogIn />
{/if}
