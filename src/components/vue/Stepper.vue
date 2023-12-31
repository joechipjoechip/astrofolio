<script setup>

import Bio from "./Bio.vue";
import Formation from "./Formation.vue";
import Experience from "./Experience.vue";
import Portfolio from "./Portfolio.vue";

import { stepsWording } from "@/assets/wording/steps.js"

import { ref, computed, nextTick } from "vue"

import { useEmitter } from "@/composables/Emitter"
import { useGetEventPosition } from "@/composables/GetEventPosition"


import { 
	globalStore, 
	setStepsCount, 
	setStepGrabed,

	navigationStore,
	setIsCurrentlyManipulatedIndex,
	setCurrentStepIndexIncrement,
	setCurrentStepIndexDecrement,

	mouseStore, 
	setMousePosition,

	setStepCoords
} from "@/stores/globalStore.js"

import { useStore } from '@nanostores/vue';



const $store = useStore(globalStore);
const $navigationStore = useStore(navigationStore);
const $mouseStore = useStore(mouseStore);

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
    },
    {
		name: "Portfolio",
        component: Portfolio
    }
]

setStepsCount(goodSteps.length)

// - - - - TOUCH LOGIC - - - -
const { on } = useEmitter()
on("main-touch-move", onTouchMove)
on("main-touch-start", onTouchStart)
on("main-touch-end", onTouchEnd)
on("main-resize", onResize)

const dynamicLeft = ref("0px")
const leftTransitionValue = ref("0s")
const touchOriginX = ref(null)
const threshold = 0.17

function onTouchStart( event ){
	const currentStepGrabed = event.target.closest(".step-slot")?.dataset.index
	const { x } = useGetEventPosition(event)

	setStepGrabed(true)

	touchOriginX.value = x
	decayX.value *= 0.82
	leftTransitionValue.value = "0s"
	
	nextTick(() => {
		currentStepGrabed && setIsCurrentlyManipulatedIndex(parseInt(currentStepGrabed)) 
	})
}

function onTouchEnd(){
	touchOriginX.value = null
	decayX.value = baseDecayX
	leftTransitionValue.value = "1s"
	dynamicLeft.value = "0px"

	setStepGrabed(false)
	setIsCurrentlyManipulatedIndex(null)
}

function onTouchMove( event ){
	const { x, y } = useGetEventPosition(event)
	updateMouseStore({x,y})

	if( !navigationStore.value.stepGrabed ){ 
		onTouchEnd()
		return
	} else {
		// updateStepCoords()
		const diffX = computePositionDiff(x)
		dynamicLeft.value = `${-diffX}px`
	}
}

function onResize(){
	updateStepCoords()
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

function updateMouseStore({x,y}){
	setMousePosition({
		x: Math.min(1,
			Math.max(
				-1,
				(((x) / window.innerWidth) - 0.5) * 2
			)
		),
		y: Math.min(1,
			Math.max(
				-1,
				(((y) / window.innerHeight) - 0.5) * -2
			)
		)
	})
}

function updateStepCoords(){
	setStepCoords(stepperWrapper.value.querySelector(".isActive").getBoundingClientRect())
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
		isCurrentlyManipulated: $navigationStore.value.isCurrentlyManipulatedIndex === index
	}
}

</script>

<template>

	<div 
		ref="stepperWrapper"
		class="stepper-wrapper" 
		:class="{ 
			'isWideStep': stepsWording[goodSteps[$store.currentStepIndex].name.toLowerCase()].isWideStep,
			'isGrabed': $navigationStore.stepGrabed 
		}"
	>

		<component 
			v-for="(step, index) in goodSteps" :key="index"
			:is="step.component"
			
			class="step-slot"
			:class="[
				`step-${step.name.toLowerCase()}`,
				defineDynamicClasses(index)
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

		transition: 
			width var(--transitionDurationMediumPlus) var(--transitionDurationMediumPlus),
			max-width var(--transitionDurationMediumPlus) var(--transitionDurationMediumPlus);

		@media #{$mobile} {
			width: 90%;	
		}

		&.isWideStep {
			width: 100%;
			max-width: 100vw;

			&.isGrabed {

				width: 80%;
				max-width: 70vw;

				transition: 
					width var(--transitionDurationMediumPlus),
					max-width var(--transitionDurationMediumPlus);
				
				.step-slot {
					height: 90%;
					top: calc((100vh - 90%) / 2);
					border-radius: var(--borderRadiusMedium);
					background-color: var(--color-contrast-10);
				}

			}

			.step-slot {
				height: 100vh;
				top: 0;
				background-color: transparent;
			}

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
		background-color: transparent;

		// will-change: opacity, transform, left, background-color;
		
		transition: 
			opacity 1.2s,
			transform var(--transitionDurationLong),
			left v-bind(leftTransitionValue),
			background-color var(--transitionDurationVeryLong),
			border-radius var(--transitionDurationMediumPlus),
			height var(--transitionDurationMediumPlus) var(--transitionDurationLong),
			top var(--transitionDurationMediumPlus) var(--transitionDurationLong);

	
		&.isCurrentlyManipulated {
			transition: 
				top var(--transitionDurationMediumPlus),
				height var(--transitionDurationMediumPlus);
		}
		&.isActive {
			z-index: 100;
			// position: relative;
			transform: translateX(0) scale(1);
			background-color: var(--color-contrast-10);
			border-radius: var(--borderRadiusMedium) var(--borderRadiusMedium) var(--borderRadiusSmall) var(--borderRadiusSmall);
		}
	
		&.isPrevious,
		&.isNext {
			z-index: 15;
			opacity: 1;
			z-index: 50;
			backdrop-filter: blur(25px);
			background-color: var(--color-contrast-10);

			:deep(.withScrollbar) {
				overflow: hidden !important;
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