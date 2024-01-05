
<script>
    import IconMain from "./icons/uiMenu.svelte"

    import { 
        globalStore, 
        setCurrentStepIndex,
        setColorMode,
    } from "@/stores/globalStore.js"

    const message = "hello, imma wip svelte component"
    let menusAreOpen = false

    function handleMainMouseEnter(){
        console.log("mouse enter menu")
        menusAreOpen = true
    }
    
    function handleSubMouseLeave(){
        menusAreOpen = false
    }

</script>

<nav class="nav-wrapper">
    
    <!-- <h2>store data - {globalStore.value.name}</h2> -->
    <!-- <h2>message : {message}</h2>
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
</button> -->

    <div class="nav-inner">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
            class="nav-main"
            on:mouseenter={() => handleMainMouseEnter()}
        >
            <svelte:component 
                this={IconMain} 
                width={'2.5rem'}
                height={'2.5rem'}
            />
        </div>
    
        <!-- HORIZONTAL -->
        {#if menusAreOpen}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
            class="nav-sub-horizontal"
            on:mouseleave={() => handleSubMouseLeave()}
        >
            <p>horizontal</p>
        </div>
        {/if}

        <!-- VERTICAL -->
        {#if menusAreOpen}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
        class="nav-sub-vertical"
        on:mouseleave={() => handleSubMouseLeave()}
        >
            
            <p>vertical</p>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <button 
                class="nav-item"
                on:click={() => window.toggleColorMode() }
            >
                switch dark/light
            </button>
        </div>
        {/if}

    </div>
</nav>

<style lang="scss">
    $subEdgeFromMain: 6rem;
    .nav {
        &-wrapper {
            z-index: 999; 
            position: absolute;
            top: 2rem;
            right: 2rem;
        }

        &-inner {
            position: relative;
            border: solid 1px red;
        }

        &-main {
            padding: 0.75rem;
            background-color: var(--color-contrast-25);
            border-radius: 50%;
        }

        &-sub {
            &-horizontal {
                position: absolute;
                right: $subEdgeFromMain;
                top: 0;
                height: 100%;
            }
            &-vertical {
                position: absolute;
                top: $subEdgeFromMain;
                width: 100%;
            }

            &-horizontal,
            &-vertical {
                border: solid 1px lime;
            }
        }
    }
</style>