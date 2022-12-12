<script lang="ts">
    export let closePopUp: EventHandler
</script>

<div on:click={closePopUp} on:keydown={closePopUp} class="grid justify-center items-center fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm">
    <div on:click={(e) => e.stopPropagation()} on:keydown={(e) => e.stopPropagation()} class="relative bg-neutral-800 w-80 p-8 rounded-lg">
        <button on:click={closePopUp} class="absolute top-1 right-3">
            <i class="fa-solid fa-xmark hover:text-red-400"></i>
        </button>
        <form method="POST" autocomplete="off" class="grid gap-4">
            <label class="grid gap-2 text-xl font-bold">
                Title
                <input required={true} name="name" type="text" class="bg-transparent focus:bg-neutral-700 border-neutral-700 border-2 rounded-lg px-1 text-base font-normal">
            </label>
            <label class="grid gap-2 text-xl font-bold">
                Description
                <textarea required={true} name="description" type="text" class="bg-transparent focus:bg-neutral-700 border-neutral-700 border-2 rounded-lg h-24 p-1 resize-none text-base font-normal"></textarea>
            </label>
            <label class="grid gap-2 text-xl font-bold">
                Due Date
                <input required={true} name="due_date" type="date" class="bg-transparent focus:bg-neutral-700 border-neutral-700 border-2 rounded-lg px-1 text-base font-normal">
            </label>
            <input type="submit" class="border-neutral-700 border-2 rounded-lg mt-6 p-2 cursor-pointer hover:bg-neutral-700">
        </form>
    </div>
</div>