<script setup>

import { uiConfig } from "../../assets/uiConfig.js"

import { globalStore } from "../../stores/globalStore.js"
import { useStore } from '@nanostores/vue';
const $store = useStore(globalStore);

defineProps({
	slots: {
		type: Object,
		required: true
	},

    stepIsActive: {
        type: Boolean,
        required: true
    },

    stepColor: {
        type: String,
        required: true
    }
})

</script>

<template>

    <div class="list">

        <SlotItem
            v-if="stepIsActive"
            v-for="(slotData, index) in slots" :key="index"

            :slotData="slotData"
            :stepColor="stepColor"
            :stepIsActive="stepIsActive"
            :slotIndex="index"
            :soundEnabled="$store.sound.enabled"
    
            v-motion
            :initial="{ 
                y: 500,
                scale: 0.001,
            }"
            :enter="{ 
                y: 0,
                scale: 1,
    
                transition: {
                    duration: uiConfig.animation.long,
                    ease: 'backInOut',
                }
            }"
        />

    </div>

</template>

<style lang="scss" scoped>
.list {
    // width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    row-gap: 0.65rem;

    
    margin-left: 2.5%;
    margin-right: 2rem;
    direction: ltr;
    margin-bottom: 30rem;

}
</style>