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
    listWrapper.value && listWrapper.value.scrollIntoView({block: "start", behavior: "smooth"})
}

function handleMouseMove( event ){
    focusedSlotIndex.value = event.target.closest(".slot-wrapper")?.dataset.slotIndex ? parseInt(event.target.closest(".slot-wrapper")?.dataset.slotIndex) : null
}

function handleMouseLeave(){
    focusedSlotIndex.value = null
}

// SEARCH LOGIC
const searchRegEx = computed(() => new RegExp($searchStore.value[props.stepID], "gi"))
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
            
            slot.isDisplayed = defineSlotVisibility(slot)
           
        });

        return props.slots

    }

})

function defineSlotVisibility( slot ){
    return parseObject(slot)
}

function parseObject( objectToParse ){
    let isVisible = false

    Object.keys(objectToParse).forEach(key => {

        if( key !== "isDisplayed" && !key.toLowerCase().includes("src") ){
    
            if( typeof objectToParse[key] === "string" ){
    
                isVisible = isVisible || parseString(objectToParse[key])
    
            } else if( typeof objectToParse[key] === "object" ){
    
                if( objectToParse[key].length ){
                    isVisible = isVisible || parseArray(objectToParse[key])
                } else {
                    isVisible = isVisible || parseObject(objectToParse[key])
                }
    
            }

        }

    })

    return isVisible
}

function parseArray( arrayToParse ){
    let isVisible = false

    arrayToParse.filter(element => {
        if( typeof element === "string" ){
            isVisible = isVisible || element.match(searchRegEx.value)?.length
        } else {
            if( element.length ){
                isVisible = isVisible || parseArray(element)
            } else {
                isVisible = isVisible || parseObject(element)
            }
        }
    })

    return isVisible
}

function parseString( stringToParse ){
    return stringToParse.match(searchRegEx.value)
}





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