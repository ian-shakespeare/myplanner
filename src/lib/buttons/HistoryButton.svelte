<script lang="ts">
    const handleHistoryButton = () => {
        console.log("History")
    }
</script>

<a href="/history" class="w-10 h-10 flex justify-center items-center bg-none" on:click={handleHistoryButton}>
    <i class="fa-solid fa-clock-rotate-left fa-2x text-neutral-400 hover:text-white"></i>
</a>