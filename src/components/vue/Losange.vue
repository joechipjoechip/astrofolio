<script setup>

import { reactive, ref, watch } from 'vue';

const wording = reactive({
    descriptionDisplayed: false,
    descriptionText: {
        transparency: "wording to define 1",
        advocacy: "wording to define 2",
        insightfullness: "wording to define 3",
        accountability: "wording to define 4"
    },
    notions: ["transparency", "advocacy", "insightfullness", "accountability"],
    positions: {
        transparency: "top",
        advocacy: "left",
        insightfullness: "bottom",
        accountability: "right"
    }
})

const currentKey = ref("")
const currentBorderClass = ref("")

function letterEventHandler( event ){

    currentKey.value = event.target.dataset.text;

}

watch(currentKey, newVal => {
    currentBorderClass.value = `active-border-${wording.positions[newVal]}`;
})


</script>

<template>
	<div class="philosophy-container">

		<div class="philosophy-wrapper">

			<div class="philosophy-inner">

				<!-- Referential big square -->
				<div :class="['big-square', 'anim-shadow', currentBorderClass]">

					<!-- WORDINGS -->
					<div v-for="(notion, index, id) in wording.notions" :key="id" 
						:class="[
							'wording-' + (index + 1), 
							{ 'is-active': currentKey === notion }
						]"
						@mouseenter="letterEventHandler"
						:data-text="notion"
					>
						{{notion}}
					</div>

					<div class="description-wrapper">

						<div 
							v-for="(notion, index, id) in  wording.notions" :key="id"
							class="description-container">

							<transition name="transition-description">

								<div v-if="notion === currentKey"
									class="description">
									{{ wording.descriptionText[currentKey] }}
								</div>

							</transition>
							
						</div>

					</div>

					<!--  SQUARES -->
					<!-- Inside -->
					<div v-for="index in 2" :key="index"
						:class="[
							'little-square-inside-' + index
						]">
						{{ currentKey ? currentKey.substring(0, 1) : "" }}
					</div>

					<!-- Outside -->
					<div v-for="(notion, index, id) in wording.notions" :key="id" 
						:class="[
							'little-square-outside-' + (index + 1), 
							{ 'is-active': currentKey === notion },
							`${currentKey === notion ? currentBorderClass : ''}`
						]"
						@mouseenter="letterEventHandler"
						:data-text="notion"
					>
						{{ notion.substring(0,1) }}
					</div>

				</div>

			</div>

		</div>

	</div>
</template>

<style lang="scss" scoped>


	.philosophy {

		// only css property (which can be override with an inline-style)
		$bigSquareSize: 38vh;

		// all relatives variables
		$littleSquareSize: 10%;
	
		$wordingFontSize: 1.8vh;
		$wordingDecay: 40px;
		$calcWordingMargin: calc($wordingFontSize * -1 - $wordingDecay);
	
	
		$calcDecayInside: calc($littleSquareSize / 2);
		$calcDecay1: calc(-50% - ($littleSquareSize / 2));
		$calcDecay2: calc(50% - ($littleSquareSize / 2));

		$borderColorWhiteFaded: rgba(255,255,255, 0.4);

		$delayTransition1: .3s;
		$delayTransition2: .5s;

		$activeBorderMainSize: 12px;
		$activeBorderSecondSize: 5px;

		$activeBorderMainSizeOutside: 6px;
		$activeBorderSecondSizeOutside: 3px;

		&-container {
			display: block;

			margin-top: 150px;
			margin-bottom: 200px;

			.logo-j {
				display: block;
				margin: 0 auto;
			}

		}

		&-wrapper {
			display: block;
			// here : if we need a global margin-top or bottom
		}

		&-inner {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;

			// width: $innerSize;
			// height: $innerSize;
			margin: 20vh auto 15vh auto;
			box-sizing: border-box;

			transform-origin: center;
			transform: rotate(45deg);

			// border: solid 1px white;

			.big-square {
				position: relative;
				border: solid 1px currentColor;
				font-size: 20px;

				width: $bigSquareSize;
				height: $bigSquareSize;
				margin: 0 auto;
				box-sizing: border-box;

				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				align-items: center;

				will-change: border-width;

				transition: border-width .7s;

				&.active-border {

					&-top {
						border-top-width: $activeBorderMainSize;
						border-right-width: $activeBorderSecondSize;
					}

					&-right {
						border-right-width: $activeBorderMainSize;
						border-bottom-width: $activeBorderSecondSize;
					}

					&-bottom {
						border-bottom-width: $activeBorderMainSize;
						border-left-width: $activeBorderSecondSize;
					}

					&-left {
						border-left-width: $activeBorderMainSize;
						border-top-width: $activeBorderSecondSize;
					}
				}

			}

			// font styles
			.description,
			*[class^="wording"],
			*[class^="little-square"] {
				font-family: "AktivGrotesk";
				font-size: $wordingFontSize;
				text-transform: uppercase;
				letter-spacing: 2.4px;
				color: $borderColorWhiteFaded;
			}

			*[class^="wording"]{
				position: absolute;
				width: 100%;
				text-align: center;
				cursor: pointer;

				will-change: color;

				transition: color $delayTransition1;

				&.is-active {
					color: currentColor;
				}

				&[class*="-1"]{
					top: $calcWordingMargin;
				}

				&[class*="-2"]{
					transform-origin: left;
					transform: rotate(-90deg);

					left: $calcWordingMargin;
					bottom: calc($wordingFontSize / -2);
				}

				&[class*="-3"]{
					bottom: $calcWordingMargin;
				}

				&[class*="-4"]{
					transform-origin: right;
					transform: rotate(-90deg);

					right: $calcWordingMargin;
					top: calc($wordingFontSize / -2);
				}

			}

			.description {
				text-align: center;
				color: var(--color-white);
				font-size: 1.5vh;
				line-height: 1.7em;

				&-container {
					transform-origin: center;
					transform: rotate(-45deg);
					position: absolute;
					width: 70%;
					height: 70%;
					top: 30%;
					left: 30%;
				}

				&-wrapper {
					width: 100%;
					height: 100%;

					font-size: 1.8vh;
					line-height: 30px;
					color: var(--color-white);
					text-transform: none;
				}


			}

			*[class^="little-square"] {
				width: $littleSquareSize;
				height: $littleSquareSize;
				border: solid 1px $borderColorWhiteFaded;

				display: flex;
				justify-content: center;
				align-items: center;

				transform-origin: center;
				transform: rotate(-45deg);
			}

			*[class^="little-square-inside"] {
				position: absolute;
				border-color: currentColor;
				color: currentColor;

				&[class*="-1"] {
					top: $calcDecayInside;
					left: $calcDecayInside;
				}

				&[class*="-2"] {
					bottom: $calcDecayInside;
					right: $calcDecayInside;
				}

			}

			*[class^="little-square-outside"] {
				position: absolute;
				cursor: pointer;

				will-change: color, border-color, border-width;

				transition: color $delayTransition1,
							border-color $delayTransition2,
							border-width .7s;

				&.is-active {
					color: currentColor;
					border-color: currentColor;
				}

				&.active-border {

					&-top {
						border-top-width: $activeBorderMainSizeOutside;
						border-right-width: $activeBorderSecondSizeOutside;
					}

					&-right {
						border-right-width: $activeBorderMainSizeOutside;
						border-bottom-width: $activeBorderSecondSizeOutside;
					}

					&-bottom {
						border-bottom-width: $activeBorderMainSizeOutside;
						border-left-width: $activeBorderSecondSizeOutside;
					}

					&-left {
						border-left-width: $activeBorderMainSizeOutside;
						border-top-width: $activeBorderSecondSizeOutside;
					}

				}

				&[class*="-1"] {
					top: $calcDecay1;
					left: $calcDecay2;
				}

				&[class*="-2"] {
					top: $calcDecay2;
					left: $calcDecay1;
				}

				&[class*="-3"] {
					bottom: $calcDecay1;
					right: $calcDecay2;
				}

				&[class*="-4"] {
					bottom: $calcDecay2;
					right: $calcDecay1;
				}

			}

		}

	}



</style>
