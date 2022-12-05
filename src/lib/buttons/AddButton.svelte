<script lang="ts">
    const handleAddButton = () => {
        console.log("add")
    }
</script>

<button class="w-10 h-10 block bg-none" on:click={handleAddButton}>
    <i class="fa-solid fa-plus fa-2x"></i>
</button>