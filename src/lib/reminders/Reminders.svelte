<script lang="ts">
	import AddButton from "$lib/buttons/AddButton.svelte"
	import HistoryButton from "$lib/buttons/HistoryButton.svelte"
	import Reminder from "./Reminder.svelte"

    const reminders = [
        {
            name: "Go Grocery Shopping",
            desc: "I need to buy some eggs, milk, juice, toilet paper, medicine. I would also like to purchase a new chair, but I'm not sure if I will.",
            due: "2022/12/10"
        },
        {
            name: "Clean the Bathroom",
            desc: "The bathroom is getting absolutely filthy, we need to clean it. I really need to clean the bathtub as well.",
            due: "2022/12/12"
        },
        {
            name: "Get ready for Seina",
            desc: "Seina is coming on the 22nd so I need to clean the house, make sure work is all set, double check my hotel reservations, make sure I have money.",
            due: "2022/12/21"
        }
    ]
</script>

<div class="grid gap-6 mx-auto bg-neutral-800 w-80 p-6 rounded-lg md:w-4/5">
    <div class="w-full flex justify-between">
        <AddButton />
        <HistoryButton />
    </div>
    {#each reminders as reminder}
        <Reminder reminder={reminder} />
    {/each}
</div>