<script setup>
import SearchBar from './SearchBar.vue'

import { ref } from 'vue';
import { useEmitter } from "@/composables/Emitter"
import { uiConfig } from '@/assets/uiConfig';

const props = defineProps({
	isActive: {
		type: Boolean,
		required: true
	},
	wording: {
		type: Object,
		required: true
	}
})

const stepBody = ref(null)
const outsideScrollAmount = 200

// SCROLL PROCURATION
if( uiConfig.scroll.procuration ){
    const { on } = useEmitter()
    on("wheel-from-shell", handleWheelFromShell)
    
    function handleWheelFromShell( event ){
        if( props.isActive ){
            stepBody.value.scroll({
                top: stepBody.value.scrollTop + (event.deltaY > 0 ? outsideScrollAmount : -outsideScrollAmount),
                left: 0,
                behavior: "smooth"
            });
        }
    }
}


</script>

<template>
    <div 
        class="layout-step-wrapper"
        :class="{ 
            isActive,
            isWideLayout: wording.isWideStep 
        }"
    >

        <section class="layout-step-inner">

            <div 
                class="step-wrapper" 
                :class="{ 
                    headIsEnabled: wording.searchEnabled
                }"
            >

                <div class="step-head">

                    <!-- <h2 class="step-head-title"
                        v-if="isActive"
                        v-motion
                        :initial="{ y: 335, opacity: 0 }"
                        :delay="100"
                        :enter="{ 
                            y: 0,
                            opacity: 1,

                            transition: {
                                duration: 650,
                                ease: 'backInOut'
                            }
                        }"

                    >
                        {{ wording.title }}
                    </h2> -->

                    <SearchBar 
                        v-if="isActive && wording.searchEnabled"
                        class="step-head-search"
                        :color="wording.color" 
                        :placeholder="wording.placeholder"
                        :stepID="wording.id"

                        v-motion
                        :initial="{ 
                            y: 480,
                            opacity: 0
                        }"
                        :enter="{ 
                            y: 0,
                            opacity: 1,

                            transition: {
                                duration: 650,
                                delay: 400,
                                ease: 'backInOut'
                            }
                        }"
                    />

                </div>

                <div 
                    class="step-body"
                    ref="stepBody"
                    :class="{ withScrollbar: wording.withScrollbar }"
                >
                    
                    <!-- here comes the <SlotList> of : Formation.vue || Bio.vue || Experience.vue > -->
                    <slot :stepIsActive="isActive" />

                </div>

            </div>

        </section>

    </div>

</template>

<style lang="scss" scoped>

$headHeight: 6rem;

.layout-step {

    &-wrapper {

        border-radius: var(--borderRadiusBig);

        transition: border-radius var(--transitionDurationLong);
        
        &.isActive {
            border-radius: 0;
        }

        &.isWideLayout {
            &.step-slot.isActive{
                border-radius: 0;
            }
        }

        :deep(.slot-wrapper){
    
            &:last-of-type {
                margin-bottom: 2rem;
            }
        }

    }

    &-inner {
        z-index: 30;
        position: relative;
        height: 100%;

        .step {
        
            &-wrapper {
                position: relative;
                height: 100%;

                &.headIsEnabled {

                    .step-head {
                        display: flex;
                    }
                    .step-body {
                        height: calc(100% - $headHeight);
                    }

                }

               

            }
        
            &-head {
                z-index: 30;
                position: relative;
                // margin-bottom: -0.3rem;
                height: $headHeight;
                display: none;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                
                & > * {
                    margin: 0;
                    // margin-top: 2rem;
                }
                
                &-title {
                    // width: 40%;
                    font-weight: 100;
                    font-style: italic;
                    text-align: center;
                    text-transform: uppercase;
                    font-size: 2.7rem;
                    color: var(--color-main-55);

                    background-color: var(--color-contrast-45);
                    padding: 0.5rem 3rem;
                    border-radius: 999px;
                    backdrop-filter: blur(8px);
                }

                &-search {
                    position: absolute;
                    left: 0;
                    margin-left: 1rem;
                    width: 30%;
                }
        
            }
        
            &-body {
                z-index: 50;
                position: relative;
                height: 100%;
                // padding-right: 2rem;
                
                
                direction: rtl;
                
                &.withScrollbar {
                    @include scrollbar;
                    overflow-y: scroll;
                    overflow-x: hidden;
                }
            }
        
            &-footer {
                // border: solid 1px orange;
            }
        
        }

    }

}

</style>
