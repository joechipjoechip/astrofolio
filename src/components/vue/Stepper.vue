<script setup>

import Bio from "./Bio.vue";
import Formation from "./Formation.vue";
import Experience from "./Experience.vue";

import { stepsWording } from "@/assets/wording/steps.js"

import { ref, computed } from "vue"

import { useEmitter } from "@/composables/Emitter"
import { useUserInteractions } from "@/composables/UserInteractions"
import { useGetEventPosition } from "@/composables/GetEventPosition"


import { 
	globalStore, 
	setStepsCount, 
	setStepGrabed,
	setIsCurrentlyManipulatedIndex,
	setCurrentStepIndexIncrement,
	setCurrentStepIndexDecrement
} from "@/stores/globalStore.js"

import { useStore } from '@nanostores/vue';

useUserInteractions()

const $store = useStore(globalStore);

const stepperWrapper = ref(null)

const goodSteps = [
	{
		name: "Bio",
        component: Bio
    },
	{
		name: "Formation",
        component: Formation
    },
    {
		name: "Experience",
        component: Experience
    }
]

setStepsCount(goodSteps.length)

// - - - - TOUCH LOGIC - - - -
const { on } = useEmitter()
on("main-touch-move", onTouchMove)
on("main-touch-start", onTouchStart)
on("main-touch-end", onTouchEnd)

const dynamicLeft = ref("0px")
const leftTransitionValue = ref("0s")
const touchOriginX = ref(null)
const threshold = 0.17

function onTouchStart( event ){
	const currentStepGrabed = event.target.closest(".slot")?.dataset.index
	const { x } = useGetEventPosition(event)

	setStepGrabed(true)

	touchOriginX.value = x
	decayX.value *= 0.82
	leftTransitionValue.value = "0s"
	
	currentStepGrabed && setIsCurrentlyManipulatedIndex(parseInt(currentStepGrabed)) 
}

function onTouchEnd(){
	touchOriginX.value = null
	decayX.value = baseDecayX
	leftTransitionValue.value = "0.4s"
	dynamicLeft.value = "0px"

	setStepGrabed(false)
	setIsCurrentlyManipulatedIndex(null)
}

function onTouchMove( event ){
	if( !$store.value.stepGrabed ){ 
		onTouchEnd()
		return
	} 

	const { x } = useGetEventPosition(event)
	const diffX = computePositionDiff(x)
	dynamicLeft.value = `${-diffX}px`
	
}

function computePositionDiff( movingX ){
	const diffX = touchOriginX.value - movingX

	if( Math.abs(diffX / window.innerWidth) < threshold ){

		return diffX

	} else {
		
		if( diffX < 0 ){
			// go left
			setCurrentStepIndexDecrement()
		} else {
			// go right
			setCurrentStepIndexIncrement()
		}

		onTouchEnd()
	}
}


// - - - - DYNAMIC STYLE LOGIC - - - -
const baseDecayX = 85
const decayX = ref(baseDecayX)
const decayXPositiveString = computed(() => `${decayX.value}%`)
const decayXNegativeString = computed(() => `${-decayX.value}%`)
const scaleRatio = ref(0.55)


// - - - COMPONENT STATUS / CLASS LOGIC - - - -
function defineIsActive(index){
	return index === $store.value.currentStepIndex
}

function defineDynamicClasses(index){
	return {
		name: goodSteps[index].name?.toLowerCase(),
		isActive: defineIsActive(index),
		isPrevious: index === $store.value.currentStepIndex - 1,
		isNext: index === $store.value.currentStepIndex + 1,
		isOutPrevious: $store.value.currentStepIndex - index > 1,
		isOutNext: index - $store.value.currentStepIndex > 1,
		isCurrentlyManipulated: $store.value.navigation.isCurrentlyManipulatedIndex === index
	}
}

</script>

<template>

	<div class="stepper-wrapper" ref="stepperWrapper">

		<component 
			v-for="(step, index) in goodSteps" :key="index"
			:is="step.component"
			
			class="step-slot"
			:class="[
				`step-${step.name.toLowerCase()}`,
				defineDynamicClasses(index),
				{ 'grabing-x': $store.navigation.isCurrentlyManipulatedIndex === index }
			]"

			:data-index="index"
			
			:isActive="defineIsActive(index)"
			:wording="stepsWording[step.name.toLowerCase()]"

			:style="{ 
				left: dynamicLeft
			}"
		/>

	</div>
	
</template>

<style lang="scss" scoped>
.stepper {
	&-wrapper {
		position: relative;
		width: 75%;
		max-width: 1400px;
		margin: 0 auto;
		height: 100vh;

		@media #{$mobile} {
			width: 90%;	
		}
	}
}

.step {

	&-slot {
		z-index: 10;
		position: absolute;
		width: 100%;
		height: var(--stepHeight);
		overflow: hidden;
		top: calc((100vh - var(--stepHeight)) / 2);
		transform: translateX(0) scale(1);
		border: solid 2px transparent;
		background-color: transparent;

		// will-change: opacity, transform, left, background-color, border-color;
		
		transition: 
			opacity 1.2s,
			transform var(--transitionDurationLong),
			left v-bind(leftTransitionValue),
			background-color .7s,
			border-color .4s;

		&.grabing-x {
			border-color: coral;
		}
	
		&.isActive {
			z-index: 100;
			// position: relative;
			transform: translateX(0) scale(1);
			background-color: var(--color-contrast-10);
			border-radius: var(--borderRadiusMedium) var(--borderRadiusBig) var(--borderRadiusSmall) var(--borderRadiusSmall);
		}
	
		&.isPrevious,
		&.isNext {
			z-index: 15;
			opacity: 1;
			z-index: 50;
			backdrop-filter: blur(25px);
			background-color: var(--color-contrast-10);

			:deep(.step-wrapper > *){
				display: none;
			}
		}
	
		&.isPrevious {
			transform: translateX(v-bind(decayXNegativeString)) scale(v-bind(scaleRatio));
			
			&:hover {
				transform: translateX(v-bind(decayXNegativeString)) scale(0.65);
			}
		}
	
		&.isNext {
			transform: translateX(v-bind(decayXPositiveString)) scale(v-bind(scaleRatio));
			
			&:hover {
				transform: translateX(v-bind(decayXPositiveString)) scale(0.65);
			}
		}
	
		&.isOutPrevious,
		&.isOutNext {
			opacity: 0;
			pointer-events: none;
		}
	
		&.isOutPrevious {
			transform: translateX(-150%) scale(0.25);
		}
	
		&.isOutNext {
			transform: translateX(150%) scale(0.25);
		}

	}

}

</style>