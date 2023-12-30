<script setup>
import { ref, watch, computed, nextTick } from "vue"
import SlotItem from "@/components/vue/SlotItem.vue"
import { uiConfig } from "@/assets/uiConfig.js"
import { searchStore } from "@/stores/searchStore.js"

import { useStore } from '@nanostores/vue';

const $searchStore = useStore(searchStore)

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
    },

    stepID: {
        type: String,
        required: true
    }
})

// BASIC LOGIC
const listWrapper = ref(null)

watch(() => props.stepIsActive, newVal => newVal && nextTick(() => listWrapper.value.scrollIntoView({block: "start"})))

const focusedSlotIndex = ref(null)

function handleMouseMove( event ){
    focusedSlotIndex.value = event.target.closest(".slot-wrapper")?.dataset.slotIndex ? parseInt(event.target.closest(".slot-wrapper")?.dataset.slotIndex) : null
}

function handleMouseLeave(){
    focusedSlotIndex.value = null
}

// SEARCH LOGIC
// const searchIsActive = ref(false)
const rafinedSlots = computed(() => {
    console.log("computed triggered")

    if( props.stepIsActive ){
    
        if( $searchStore.value[props.stepID] === "" ){
            // searchIsActive.value = false
            return props.slots
        } else {
            // searchIsActive.value = true
            console.log("return : ")
            return props.slots.filter(slot => {
                
                const returnThisSlot = 
                    slot.expand?.technos?.filter(techno => techno.name.toLowerCase().includes($searchStore.value[props.stepID].toLowerCase())).length 
                    || slot.description?.filter(descriptionLine => descriptionLine.toLowerCase().includes($searchStore.value[props.stepID].toLowerCase())).length 
    
                
                if( returnThisSlot ){
                    return slot
                } else {
                    return
                }
            })
        }

    } else {
        return props.slots
    }
    
})


</script>

<template>

    <div class="list"
        v-if="stepIsActive"
        ref="listWrapper"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
    >

        <!-- :soundEnabled="$searchStore.sound.enabled" -->
        <SlotItem
            v-for="(slotData, index) in rafinedSlots" :key="index"

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
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    row-gap: 0.5rem;

    margin-left: 2.5%;
    margin-right: 2rem;
    direction: ltr;
    margin-bottom: 30rem;
}
</style>