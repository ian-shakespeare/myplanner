<script lang="ts">
    import CheckButton from '$lib/buttons/CheckButton.svelte'
    import CloseButton from '$lib/buttons/CloseButton.svelte'
    import type { Reminder } from '$lib/types'
    
    export let reminder: Reminder
</script>

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
        <CheckButton id={reminder.id} />
        <CloseButton id={reminder.id} />
    </div>
</div>