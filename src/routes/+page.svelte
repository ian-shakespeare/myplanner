<script lang="ts">
    import type { PageData } from './$types';
    import LogIn from "$lib/auth/LogIn.svelte";
    import Reminders from "$lib/reminders/Reminders.svelte";

    type Reminder = {
        id: number
        name: string
        desc: string
        due: string
    }

    export let data: PageData
    let loggedIn = true
</script>

{#if loggedIn}
    <Reminders reminders={data.reminders} />
{:else}
    <LogIn />
{/if}
