
<script>
    import { 
        globalStore, 
        setCurrentStepIndex,
        setColorMode,
    } from "@/stores/globalStore.js"

    const message = "hello there, it's svelte"

    function handleColorModeSwitch(){
        window.toggleColorMode()
    }
</script>
<div style="z-index: 999; position: absolute;">
    <h2>message - {message}</h2>
    <h2>store data - {globalStore.value.name}</h2>
    <button on:click={() => setCurrentStepIndex(1) }>
        go formation
    </button>
    <button on:click={() => handleColorModeSwitch() }>
        switch dark/light
    </button>
</div>