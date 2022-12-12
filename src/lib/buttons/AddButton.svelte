<script lang="ts">
	import PopUp from "$lib/PopUp.svelte";

    let showPopUp = false

    const handleAddButton = () => {
        showPopUp = true
    }
</script>

<button class="w-10 h-10 block bg-none" on:click={handleAddButton}>
    <i class="fa-solid fa-plus fa-2x text-neutral-400 hover:text-white"></i>
</button>
{#if showPopUp}
    <PopUp closePopUp={() => {console.log('closing') ; showPopUp = false}} />
{/if}