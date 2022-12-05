<script lang="ts">
    import CheckButton from "$lib/buttons/CheckButton.svelte"
    import CloseButton from "$lib/buttons/CloseButton.svelte"

    type Reminder = {
        name: string
        desc: string
        due: string
    }
    
    export let reminder: Reminder
</script>

<hr class="border-neutral-700" />
<section class="grid gap-2">
    <h1 class="text-xl text-center font-bold">
        {reminder.name}
    </h1>
    <p>
        {reminder.desc}
    </p>
    <div class="text-neutral-500">
        {`${new Date(reminder.due).toDateString()}`}
    </div>
    <div class="w-full flex justify-around gap-8">
        <CheckButton />
        <CloseButton />
    </div>
</section>