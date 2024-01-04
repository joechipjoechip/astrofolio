
<script>
    import { 
        globalStore, 
        setCurrentStepIndex,
        setColorMode,
    } from "@/stores/globalStore.js"

    const message = "hello, imma wip svelte component"

</script>

<nav class="nav-wrapper">
    <!-- <h2>store data - {globalStore.value.name}</h2> -->
    <h2>message : {message}</h2>
    <button 
        class="nav-item"
        on:click={() => setCurrentStepIndex(1) }
    >
        go formation
    </button>

    <button 
        class="nav-item"
        on:click={() => window.toggleColorMode() }
    >
        switch dark/light
    </button>
</nav>

<style lang="scss">
    .nav {
        &-wrapper {
            z-index: 999; 
            position: absolute;
            right: 0;
        }

        &-item {
            border: solid 5px orange;
        }
    }
</style>