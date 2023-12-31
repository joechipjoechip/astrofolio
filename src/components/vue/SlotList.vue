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

watch(() => props.stepIsActive, newVal => newVal && nextTick(() => scrollListToTop()))

const focusedSlotIndex = ref(null)

function scrollListToTop(){
    listWrapper.value.scrollIntoView({block: "start", behavior: "smooth"})
}

function handleMouseMove( event ){
    focusedSlotIndex.value = event.target.closest(".slot-wrapper")?.dataset.slotIndex ? parseInt(event.target.closest(".slot-wrapper")?.dataset.slotIndex) : null
}

function handleMouseLeave(){
    focusedSlotIndex.value = null
}

// SEARCH LOGIC
const searchIsActive = computed(() => {
    if( $searchStore.value[props.stepID] !== "" ){
        scrollListToTop()
        return true
    } else {
        return false
    }
    
})
const rafinedData = computed(() => {

    if( !searchIsActive.value ){

        props.slots.forEach(slot => {
            slot.isDisplayed = true
        });

        return props.slots

    } else {

        props.slots.forEach(slot => {
            const returnThisSlot = 
                slot.expand?.technos?.filter(techno => techno.name.toLowerCase().includes($searchStore.value[props.stepID].toLowerCase())).length 
                || slot.description?.filter(descriptionLine => descriptionLine.toLowerCase().includes($searchStore.value[props.stepID].toLowerCase())).length 
     
            slot.isDisplayed = returnThisSlot
           
        });

        return props.slots

    }

})

</script>

<template>

    <div class="list"
        v-show="stepIsActive"
        ref="listWrapper"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
    >

        <!-- :soundEnabled="$searchStore.sound.enabled" -->
        <SlotItem
            v-for="(slotData, index) in rafinedData" :key="index"
            v-show="slotData.isDisplayed && stepIsActive"
            
            :stepColor="stepColor"
            :slotData="slotData"

            :stepIsActive="stepIsActive"
            :slotIndex="index"
            :isHovered="index === focusedSlotIndex"
            :searchIsActive="searchIsActive"
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