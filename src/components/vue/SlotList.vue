<script setup>
import { ref, watch, nextTick } from "vue"
import SlotItem from "@/components/vue/SlotItem.vue"
import { uiConfig } from "@/assets/uiConfig.js"

const props = defineProps({
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

const listWrapper = ref(null)

watch(() => props.stepIsActive, newVal => newVal && nextTick(() => listWrapper.value.scrollIntoView({block: "start"})))

const focusedSlotIndex = ref(null)

function handleMouseMove( event ){
    focusedSlotIndex.value = event.target.closest(".step-slot-wrapper")?.dataset.slotIndex ? parseInt(event.target.closest(".step-slot-wrapper")?.dataset.slotIndex) : null
}

function handleMouseLeave(){
    focusedSlotIndex.value = null
}

</script>

<template>

    <div class="list"
        ref="listWrapper"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
    >

        <!-- :soundEnabled="$store.sound.enabled" -->
        <SlotItem
            v-if="stepIsActive"
            v-for="(slotData, index) in slots" :key="index"

            :slotData="slotData"
            :stepColor="stepColor"
            :stepIsActive="stepIsActive"
            :slotIndex="index"
            :isHovered="index === focusedSlotIndex"
            
    
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
    row-gap: 0.5rem;

    
    margin-left: 2.5%;
    margin-right: 2rem;
    direction: ltr;
    margin-bottom: 30rem;

}
</style>