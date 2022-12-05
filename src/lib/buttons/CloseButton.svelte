<script lang="ts">
    const handleCloseButton = () => {
        console.log("Close")
    }
</script>

<button class="w-10 h-10 block bg-none" on:click={handleCloseButton}>
    <i class="fa-solid fa-xmark fa-2x text-red-500"></i>
</button>
