<script setup>

import SearchBar from './SearchBar.vue'

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

function handleClick(){
    window.toggleColorMode()
}

</script>

<template>
    <div class="layout-step-wrapper">

        <section class="layout-step-inner">

            <div class="step-wrapper">

                <div class="step-head">

                    <h2 class="step-head-title"
                        v-if="isActive"
                        @click="handleClick"
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
                    </h2>

                    <SearchBar 
                        v-if="isActive"
                        class="step-head-search"
                        :color="wording.color" 
                        :placeholder="wording.placeholder"

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

                <div class="step-body">
                    
                    <!-- here comes : Formation.vue || Bio.vue || Experience.vue > -->
                    <slot :stepIsActive="isActive" />

                </div>

            </div>

        </section>

    </div>

</template>

<style lang="scss" scoped>

.layout-step {

    &-wrapper {

        border-radius: var(--borderRadiusBig);
        overflow: hidden;

        :deep(.step-slot-wrapper){
    
            &:first-of-type {
                margin-top: 0.25rem;
            }
        
            &:last-of-type {
                margin-bottom: 2rem;
            }
        }

    }

    &-inner {
        z-index: 30;
        position: relative;
        height: 100%;

        will-change: background;
        transition: background 2s;

        .step {
        
            &-wrapper {
                position: relative;
                height: 100%;
            }
        
            &-head {
                z-index: 30;
                position: relative;
                margin-bottom: -0.3rem;
                height: 9rem;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                
                & > * {
                    margin: 0;
                    margin-top: 2rem;
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
                    right: 0;
                    margin-right: 2rem;
                }
        
            }
        
            &-body {
                z-index: 50;
                @include scrollbar;
                position: relative;
                height: 90%;
                // padding-right: 2rem;
                overflow-y: scroll;
                overflow-x: hidden;

                direction: rtl;
            }
        
            &-footer {
                // border: solid 1px orange;
            }
        
        }

    }

}

</style>
