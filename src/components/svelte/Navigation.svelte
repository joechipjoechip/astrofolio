
<script>
import { stepsWording } from "@/assets/wording/steps.js"
import IconMain from "./icons/uiMenu.svelte"

import { 
    globalStore, 
    setCurrentStepIndex,
    setColorMode,
} from "@/stores/globalStore.js"

let menusAreOpen = false

function handleMainMouseEnter(){
    menusAreOpen = true
}

function handleSubMouseLeave(){
    menusAreOpen = false
}

</script>

<nav class="nav-wrapper">

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
        
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
            class="nav-sub-horizontal-wrapper"
            class:opened={menusAreOpen}
            on:mouseleave={() => handleSubMouseLeave()}
        >
            {#each Object.keys(stepsWording) as sectionName, index }
                <button 
                    class="nav-sub-horizontal-item"
                    on:click={() => setCurrentStepIndex(index)}
                >
                    {sectionName}
                </button>
            {/each}
        </div>
        

        <!-- VERTICAL -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
            class="nav-sub-vertical-wrapper"
            class:opened={menusAreOpen}
            on:mouseleave={() => handleSubMouseLeave()}
        >
            
            <p>vertical</p>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <button 
                class="nav-sub-vertical-item"
                on:click={() => window.toggleColorMode() }
            >
                switch dark/light
            </button>
        </div>
        

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
                &-wrapper {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-end;
                    align-items: center;
                    column-gap: 1rem;

                    position: absolute;
                    right: $subEdgeFromMain;
                    top: 0;
                    height: 100%;
                    width: 0%;
    
                    transition: width var(--transitionDurationMediumPlus);
    
                    &.opened {
                        width: 20rem;
                    }
                }

                &-item {
                    //
                }
            }
            &-vertical {
                &-wrapper {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: flex-start;
                    align-items: center;

                    position: absolute;
                    top: $subEdgeFromMain;
                    width: 100%;
                    height: 0%;
    
                    transition: height var(--transitionDurationMediumPlus);
    
                    &.opened {
                        height: 100%;
                    }
                }

                &-item {
                    //
                }
            }

            &-horizontal,
            &-vertical {
                &-wrapper {
                    border: solid 1px lime;
                    overflow: hidden;
                }

                &-item {
                    text-transform: uppercase;
                }
            }
        }
    }
</style>