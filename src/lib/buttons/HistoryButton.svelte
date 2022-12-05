<script lang="ts">
    const handleHistoryButton = () => {
        console.log("History")
    }
</script>

<button class="w-10 h-10 block bg-none" on:click={handleHistoryButton}>
    <i class="fa-solid fa-clock-rotate-left fa-2x"></i>
</button>