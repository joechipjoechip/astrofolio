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

// incroyable mais vrai :
// watch last 2 previous commit from here
// and https://stackoverflow.com/questions/60415580/vue-js-this-nexttick-doesnt-seems-to-wait-for-dom-rendering

// instead of
// watch(() => props.stepIsActive, newVal => newVal && nextTick(() => scrollListToTop()))
// do
nextTick(() => watch(() => props.stepIsActive, (newVal) => newVal && scrollListToTop() ))
// and sizes bugys computations are now good
// (which is crazy and interesting)

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

    <Transition name="transition-step-change">

        <div class="list"
            v-show="stepIsActive"
            ref="listWrapper"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
        >

            <!-- :soundEnabled="$searchStore.sound.enabled" -->
            <SlotItem
                v-for="(slotData, index) in rafinedData" :key="index"
                v-show="slotData.isDisplayed"
                
                :stepColor="stepColor"
                :slotData="slotData"

                :stepIsActive="stepIsActive"
                :slotIndex="index"
                :isHovered="index === focusedSlotIndex"
                :searchIsActive="searchIsActive"
                :searchRegEx="searchRegEx"
            />

        </div>

    </Transition>

</template>

<style lang="scss" scoped>
.list {
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    row-gap: 0.5rem;

    margin-left: 1rem;
    margin-right: 1rem;
    direction: ltr;
    margin-bottom: 30rem;
}

</style>