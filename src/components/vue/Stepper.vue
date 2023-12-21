<script setup>

import Formation from "./Formation.vue";

import { ref, watch, onMounted } from "vue"

import { useEmitter } from "@/composables/Emitter"
import { useUserInteractions } from "@/composables/UserInteractions"

import { stepsWording } from "@/assets/wording/steps.js"

import { globalStore, setStepsCount, setIsCurrentlyManipulatedIndex } from "@/stores/globalStore.js"
import { useStore } from '@nanostores/vue';

const $store = useStore(globalStore);

useUserInteractions()

const stepperWrapper = ref(null)

const goodSteps = [
	// {
	// 	name: "Bio",
    //     component: resolveComponent('Bio')
    // },
	{
		name: "Formation",
        component: Formation
    },
    // {
	// 	name: "Experience",
    //     component: resolveComponent('Experience')
    // }
]

setStepsCount(goodSteps.length)

// - - - - TOUCH LOGIC - - - -
const dynamicLeft = ref("0px")
const leftTransitionValue = ref("0s")

const { on } = useEmitter()

// on("main-touch-move", onTouchMove)
on("main-touch-start", onTouchStart)
on("main-touch-end", onTouchEnd)

function onTouchStart( event ){

	const currentStepGrabed = event.target.closest(".step-item")?.dataset.index

	console.log("au start : ", $store.value.navigation.navbar.isMoving, currentStepGrabed)

	if( $store.value.navigation.navbar.isMoving ){ return }

	decayX.value *= 0.92

	leftTransitionValue.value = "0s"
	
	currentStepGrabed && setIsCurrentlyManipulatedIndex(parseInt(currentStepGrabed)) 
}

function onTouchEnd(){
	
	decayX.value = baseDecayX

	leftTransitionValue.value = "0.4s"
	
	dynamicLeft.value = "0px"

	setIsCurrentlyManipulatedIndex(null)

}

function onTouchMove( {diffX} ){
	console.log("on touch move tiggered dans le stepper")

	if( $store.value.navigation.navbar.isMoving ){ 
		onTouchEnd()
		return 
	}

	dynamicLeft.value = `${diffX * -1}px`

}
// - - - - - - - - - - - - -


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
// - - - - - - - - - - - -


// - - - - DYNAMIC STYLE LOGIC - - - -
const baseDecayX = 105
const decayX = ref(baseDecayX)
const decayXPositiveString = ref(`${baseDecayX}%`)
const decayXNegativeString = ref(`${-baseDecayX}%`)

watch(decayX, newVal => {
	decayXPositiveString.value = `${decayX.value}%`
	decayXNegativeString.value = `${-decayX.value}%`
})

const scaleRatio = ref(0.9)

</script>

<template>

	<div class="stepper-wrapper" ref="stepperWrapper">

		<!-- { 'grabing-x': store.navigation.isCurrentlyManipulatedIndex === index } -->
		<component 
			v-for="(step, index) in goodSteps" :key="index"
			:is="step.component"
			
			class="step-item isActive"
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
		width: 65%;
		max-width: 1200px;
		margin: 0 auto;

		cursor: grab;

		@media #{$mobile} {
			width: 90%;	
		}
	}
}

.step {

	&-item {
		z-index: 10;
		position: relative;
		width: 100%;
		height: var(--stepHeight);
		overflow: hidden;
		position: absolute;
		top: 0;
		transform: translateX(0) scale(1);
		background-color: var(--bg-white-05);
		border: solid 2px transparent;

		will-change: opacity, transform, left, background-color, border-color;
		
		transition: 
			opacity 1.2s,
			transform 0.55s,
			left v-bind(leftTransitionValue),
			background-color .7s,
			border-color .4s;

		&::after {
			content: "";
			z-index: 20;
			display: block;
			position: absolute;
			width: 95%;
			height: 95%;

			top: 50%;
			left: 50%;
			transform: translate3d(-50%, -50%, 0);

			border-radius: var(--borderRadiusBig);

			background-color: var(--bg-white-05);


			will-change: background-color;

			transition: background-color .7s;

		}

		&.grabing-x {
			border-color: coral;
		}
	
		&.isActive {
			z-index: 100;
			position: relative;
			transform: translateX(0) scale(1);
			background: linear-gradient(405deg, var(--bg-white-65) -140%, transparent 50%);
			
			&::after {
				border-radius: var(--borderRadiusBig) var(--borderRadiusMedium) var(--borderRadiusBig) var(--borderRadiusBig);
				background: transparent;
			}
		}
	
		&.isPrevious,
		&.isNext {
			z-index: 15;
			opacity: 1;
			z-index: 50;
			backdrop-filter: blur(5px);
			background-color: var(--bg-white-05);

			:deep(.step-wrapper > *){
				display: none;
			}

			&:hover {

				&::after {
					background-color: var(--bg-black-65);
				}

			}

		}
	
		&.isPrevious {
			transform: translateX(v-bind(decayXNegativeString)) scale(v-bind(scaleRatio));
			
			&:hover {
				transform: translateX(v-bind(decayXNegativeString)) scale(0.97);
			}
		}
	
		&.isNext {
			transform: translateX(v-bind(decayXPositiveString)) scale(v-bind(scaleRatio));
			
			&:hover {
				transform: translateX(v-bind(decayXPositiveString)) scale(0.97);
			}
		}
	
		&.isOutPrevious,
		&.isOutNext {
			opacity: 0;
			pointer-events: none;
		}
	
		&.isOutPrevious {
			transform: translateX(-70%) scale(0.75);
		}
	
		&.isOutNext {
			transform: translateX(70%) scale(0.75);
		}

	}

}

</style>