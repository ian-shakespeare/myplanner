<script lang="ts">
    import LogIn from "$lib/auth/LogIn.svelte";
    import Reminders from "$lib/reminders/Reminders.svelte";

    let loggedIn = true
</script>

{#if loggedIn}
    <Reminders />
{:else}
    <LogIn />
{/if}
