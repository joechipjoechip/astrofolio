<script setup>
import { ref, computed } from 'vue';
import { useEmitter } from "@/composables/Emitter"
import { useGetEventPosition } from "@/composables/GetEventPosition"

const wording = {
	"top-left": {
		title: "clean code",
		text: "Rigourous respect of project guide lines. Proper and elegant code writing"
	},
	"top-right": {
		title: "transparency",
		text: "todo : find wording 2"
	},
	"bottom-left": {
		title: "team work",
		text: "todo : find wording 3"
	},
	"bottom-right": {
		title: "responsible",
		text: "todo : find wording 4"
	}
}

const currentPosition = ref("")
const currentBorderClass = computed(() => `active-border-${currentPosition.value}`)

const { on } = useEmitter()
on("main-touch-move", onTouchMove)

function onTouchMove( event ){
	const { x, y } = useGetEventPosition(event)

	if( x < window.innerWidth / 2 ){

		if( y < window.innerHeight / 2 ){

			currentPosition.value = "top-left"
			
		} else {
			
			currentPosition.value = "bottom-left"
		}

	} else {

		if( y < window.innerHeight / 2 ){

			currentPosition.value = "top-right"

		} else {

			currentPosition.value = "bottom-right"
		}

	}

}

</script>

<template>
	<div class="losange-wrapper">

		<div class="losange-inner">

			<!-- Referential big square -->
			<div 
				class="big-square anim-shadow"
				:class="currentBorderClass"
			>

				<!-- TITLES -->
				<div v-for="(key, index) in Object.keys(wording)" :key="index" 
					:class="[
						`wording-${key}`, 
						{ 'is-active': currentPosition === key }
					]"
				>
					{{ wording[key].title }}
				</div>

				<!-- TEXTS -->
				<div class="description-wrapper">

					<div 
						v-for="(key, index) in  Object.keys(wording)" :key="index"
						class="description-item"
					>

						<transition name="transition-description">

							<div 
								v-if="key === currentPosition"
								class="description-text"
							>
								{{ wording[key].text }}
							</div>

						</transition>
						
					</div>

				</div>

				
			</div>

		</div>

	</div>
</template>

<style lang="scss" scoped>
	.losange {
		$bigSquareSize: 35rem;
		$bigSquareBorderRadius: 7rem;
	
		$wordingFontSize: 2rem;
		$wordingDecay: 4rem;
		$calcWordingMargin: calc(($wordingFontSize * -1) - $wordingDecay);

		$activeBorderMainSize: 2rem;
		$activeBorderSecondSize: 0.5rem;

		&-wrapper {
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;
			width: inherit;
			height: inherit;
			position: absolute;
			width: 100%;
			height: 90%;
			overflow: hidden;
			
		}

		&-inner {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;

			transform-origin: center;
			transform: rotate(45deg);

			.big-square {
				position: relative;
				border: solid 1px var(--color-contrast-90);
				font-size: 2rem;
				border-radius: $bigSquareBorderRadius;

				background-color: var(--color-main-05);
				backdrop-filter: blur(30px);

				width: $bigSquareSize;
				height: $bigSquareSize;
				margin: 0 auto;
				box-sizing: border-box;

				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				align-items: center;

				// will-change: border-width;

				transition: border var(--transitionDurationMediumPlus);

				&.active-border {

					&-top-left {
						border-left-width: $activeBorderMainSize;
						border-top-width: $activeBorderSecondSize;
					}

					&-bottom-left {
						border-bottom-width: $activeBorderMainSize;
						border-left-width: $activeBorderSecondSize;
					}

					&-top-right {
						border-top-width: $activeBorderMainSize;
						border-right-width: $activeBorderSecondSize;
					}

					&-bottom-right {
						border-right-width: $activeBorderMainSize;
						border-bottom-width: $activeBorderSecondSize;
					}

				}

			}

			*[class^="wording"]{
				position: absolute;
				width: 100%;
				text-align: center;

				font-size: $wordingFontSize;
				font-weight: 500;
				text-transform: uppercase;
				letter-spacing: 0.25rem;
				color: var(--color-main-30);

				transition: color var(--transitionDurationMedium);

				&.is-active {
					color: var(--color-main-100);
				}

				&[class*="-top-right"]{
					top: $calcWordingMargin;
				}

				&[class*="-top-left"]{
					transform-origin: left;
					transform: rotate(-90deg);

					left: $calcWordingMargin;
					bottom: calc($wordingFontSize / -2);
				}

				&[class*="-bottom-left"]{
					bottom: $calcWordingMargin;
				}

				&[class*="-bottom-right"]{
					transform-origin: right;
					transform: rotate(-90deg);

					right: $calcWordingMargin;
					top: calc($wordingFontSize / -2);
				}

			}

			.description {

				&-wrapper {
					width: 100%;
					height: 100%;

					font-size: 2rem;
					color: var(--color-white);
					text-transform: none;

					display: flex;
					flex-flow: column nowrap;
					justify-content: center;
					align-items: center;		
				}

				&-item {
					transform-origin: center;
					transform: rotate(-45deg);
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					
					display: flex;
					flex-flow: column nowrap;
					justify-content: center;
					align-items: center;
				}

				&-text {
					// position: absolute;
					// top: 0;
					text-align: center;
					color: var(--color-white);
					font-size: 2rem;
					margin: 0 3rem;
				}


			}

		}

	}

	.transition-description {
		&-enter-active,
		&-leave-active {
			transform: translate3d(0,0,0);
			opacity: 1;
	
			
		}

		&-leave-active {
			transition: 
				opacity var(--transitionDurationMediumPlus),
				transform var(--transitionDurationMediumPlus) cubic-bezier(0,.72,.23,1.26);
		}

		&-enter-active {
			transition: 
				opacity var(--transitionDurationMedium),
				transform var(--transitionDurationMedium) cubic-bezier(0,.72,.23,1.26);
		}

		&-enter-from {
			opacity: 0;
			transform: translate3d(0,4rem,0);
		}

		&-leave-to {
			opacity: 0;
			transform: translate3d(0,-8rem,0);
		}
	}

</style>
