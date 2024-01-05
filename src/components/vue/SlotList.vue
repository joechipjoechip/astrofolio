<script setup>
import { ref, watch, computed, nextTick } from "vue"
import SlotItem from "@/components/vue/SlotItem.vue"
import { searchStore } from "@/stores/searchStore.js"
import { useDefineSlotVisibility } from "@/composables/searchParser"

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
    listWrapper.value && listWrapper.value.scrollIntoView({block: "start", behavior: "smooth"})
}

function handleMouseMove( event ){
    focusedSlotIndex.value = event.target.closest(".slot-wrapper")?.dataset.slotIndex ? parseInt(event.target.closest(".slot-wrapper")?.dataset.slotIndex) : null
}

function handleMouseLeave(){
    focusedSlotIndex.value = null
}

// SEARCH LOGIC
const searchRegEx = computed(() => new RegExp(escapeRegExp($searchStore.value[props.stepID]), "gi"))
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    //.replaceAll(/\s/g, "");
}

const searchIsActive = computed(() => {
    scrollListToTop()

    if( $searchStore.value[props.stepID].length > 1 ){
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
            
            slot.isDisplayed = useDefineSlotVisibility(slot, searchRegEx)
           
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
            :searchRegEx="searchRegEx"
        />

    </div>

</template>

<style lang="scss" scoped>
.list {
    width: 100%;
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