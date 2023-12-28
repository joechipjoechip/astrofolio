<script setup>
import { ref, watch, nextTick, shallowRef, onMounted } from "vue"
import SlotItem from "@/components/vue/SlotItem.vue"
import { uiConfig } from "@/assets/uiConfig.js"
import { useEmitter } from "@/composables/Emitter"

const props = defineProps({
	slots: {
		type: Object,
		required: true
	},

	slotName: {
		type: String,
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

const pinLogicIsEnabled = ref(props.slots.find(slot => slot.pinable) ? true : false)

const savedPinableSlotIndex = ref(null)

const relevantSlots = ref(parseAndOrder(props.slots))

const listWrapper = ref(null)

watch(() => props.stepIsActive, newVal => newVal && nextTick(() => listWrapper.value.scrollIntoView({block: "start"})))

onMounted(() => {
    pinLogicIsEnabled.value && on("slot-pin", onSlotPin)
})


// FOCUS LOGIC
const focusedSlotIndex = ref(null)
function handleMouseMove( event ){
    focusedSlotIndex.value = event.target.closest(".step-slot-wrapper")?.dataset.slotIndex ? parseInt(event.target.closest(".step-slot-wrapper")?.dataset.slotIndex) : null
}

function handleMouseLeave(){
    focusedSlotIndex.value = null
}

// PARSE SLOTS TO HANDLE PIN
function parseAndOrder(arrayToParse){
    if( !pinLogicIsEnabled.value ){
        return arrayToParse
    } else {
        
        arrayToParse.forEach((slot, index) => {
            if( slot.pinable ){
                savedPinableSlotIndex.value = index
            }
        });
        return actPin(arrayToParse, savedPinableSlotIndex.value)
    }
}

function actPin( arrayToReOrder, indexToPutUp ){
    const slotToMove = arrayToReOrder[indexToPutUp]
    slotToMove.isPined = true
    arrayToReOrder.splice(indexToPutUp, 1)
    arrayToReOrder.splice(0, 0, slotToMove)
    return arrayToReOrder
}

function actUnPin( arrayToReOrder, indexToBack ){
    const slotToMoveBack = arrayToReOrder[0]
    slotToMoveBack.isPined = false
    arrayToReOrder.splice(indexToBack + 1, 0, slotToMoveBack)
    arrayToReOrder.shift()
}

// PIN LOGIC
const { on, emit } = useEmitter()
function onSlotPin( event ){
    if( pinLogicIsEnabled.value ){

        const { isPined, slotIndex } = event
    
        if( isPined ){
            actUnPin(relevantSlots.value, savedPinableSlotIndex.value)
        } else {
            actPin(relevantSlots.value, slotIndex)
        }   
    }
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
            v-for="(slotData, index) in relevantSlots" :key="index"

            :slotData="slotData"
            :stepColor="stepColor"
            :stepIsActive="stepIsActive"
            :slotIndex="index"
            :isHovered="index === focusedSlotIndex"
            :emiter="pinLogicIsEnabled ? emit : null"
            
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