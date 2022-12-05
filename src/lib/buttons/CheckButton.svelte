<script lang="ts">
    const handleCheckButton = () => {
        console.log("check")
    }
</script>

<button class="w-10 h-10 block bg-none" on:click={handleCheckButton}>
    <i class="fa-regular fa-circle-check fa-2x text-green-500" />
</button>