<script setup>

import { ref, onMounted, watch, nextTick, computed } from "vue"

import IconsUiDoubleChevronDown from "./icons/uiDoubleChevronDown.vue"

import { uiConfig } from "@/assets/uiConfig.js"
import { random } from "@/assets/js/utils.js"

const props = defineProps({
	slotData: {
		type: Object,
		required: true
	},
	stepColor: {
		type: String,
		default: "currentColor"
	},
	slotIndex: {
		type: Number,
		required: true
	},
	soundEnabled: {
		type: Boolean,
		default: false
	}
})

// - - - - - - - - - - - - - 
// BASIC LOGIC - - - - -

const isHovered = ref(false)
const isExpanded = ref(false)

// - - - - - - - - - - - - - 


// - - - - - - - - - - - - - 
// EXPAND LOGIC - - - - -
const technosAreVisible = ref(true)
// initialized at true to trigger the loads of images
// ( see v-show and v-if at .technos-wrapper )

function handleExpand(){

	if( props.slotData.expand ){
		isExpanded.value = !isExpanded.value
	}

	
	// TODO : patch this , avoid click on grab
}

onMounted(() => {
	nextTick(() => {
		technosAreVisible.value = false
	})
})

watch(isExpanded, newVal => {
	if( newVal ){

		technosAreVisible.value = true

		nextTick(() => {
			technosWrapper.value.scrollTo(0,0)
			scrollSlotAtTop()
		})

	} else {
		technosAreVisible.value = false
	}
})

// - - - - - - - - - - - - - 


// - - - - - - - - - - - - - 
// SCROLLS LOGIC - - - - - -
const slotWrapperElement = ref(null)
const textsWrapper = ref(null)
const technosWrapper = ref(null)
const anchorWrapper = ref(null)

function scrollSlotAtTop(){
	slotWrapperElement.value.scrollIntoView({block: "start", behavior: "smooth"});
}

function handleAnchorClick( event ){

	const elementToScrollAt = textsWrapper.value.querySelector(`#${event.target.dataset.destination}`).closest(".text-block")

	const levelToScroll = elementToScrollAt.offsetTop - (parseInt(window.getComputedStyle(elementToScrollAt).marginTop.replace("px", ""))) - anchorWrapper.value.getBoundingClientRect().height - 20
	
	textsWrapper.value.scrollTo({
		top: levelToScroll,
		behavior: "smooth"
	})

}
// // - - - - - - - - - - - - - 

// // - - - - - - - - - - - - - 
// // ANIMATION LOGIC - - - - -
const speed = ref(0.2)
const idealDelay = computed(() => uiConfig.animation.short * props.slotIndex * 0.8)
const gradientDirection = "right"

const animationsAreFinished = ref(false)
const isVisible = computed(() => animationsAreFinished.value)

function handleInnerComplete(){
	animationsAreFinished.value = true
}

// function handleStart(){
	
// 	// createSound("bubble");
	
// 	setTimeout(() => {
// 		playSound()
// 	}, random(idealDelay.value, idealDelay.value * 1.6))

// }

// - - - - - - - - - - - - - 




</script>

<template>

	<article 
		ref="slotWrapperElement"
		class="step-slot-wrapper"
		:class="{
			isHovered,
			isExpanded
		}"
		@mouseenter="isHovered = true"
		@mouseleave="isHovered = false"
	>

		<div class="step-slot-inner"
			:class="{ isVisible }"
			style="will-change: opacity, transform;"
			v-motion
			:initial="{ 
				opacity: 0,
				y:  800 * speed,
			}"
			:delay="idealDelay"
			:enter="{ 
				opacity: 1,
				y: 0,

				transition: {
					duration: uiConfig.animation.medium,
					onComplete: handleInnerComplete,
					ease: 'easeInOut'
				},
			}"
		>
			
			<div class="step-slot-head">
		
				<time class="year">
					{{ slotData.date.year }}
				</time>
		
				<time class="duration">
					{{ slotData.date.duration }}
				</time>
		
			</div>
		
		
			<div class="step-slot-body">
				
				<div 
					class="level-1"
					@click="handleExpand"
				>
					<IconsUiDoubleChevronDown 
						v-if="slotData.expand"
						class="expand-button"
					/>
					<h5 class="title"
						v-motion
						style="will-change: opacity, transform;"
						:initial="{ 
							x: random(-4000, -800) * speed,
							opacity: 0.2
						}"
						:enter="{ 
							x: 0,
							opacity: 1,
	
							transition: {
								duration: uiConfig.animation.long,
								// onPlay: handleStart,
								delay: idealDelay + 100,
								ease: 'backInOut'
							}
						}"
					>
						{{ slotData.title }}
						<span class="location">{{ slotData.location }}</span>
					</h5>
			
					<h4 class="name" v-html="slotData.body"></h4>
			
					<div class="description"
						v-motion
						style="will-change: opacity, transform;"
						:initial="{ 
							y: 300,
							opacity: 0
						}"
						:delay="idealDelay * 0.5"
	
						:enter="{ 
							y: 0,
							opacity: 1,
	
							transition: {
								duration: uiConfig.animation.medium,
								ease: 'backInOut'
							}
						}"
					>
			
						<p v-for="sentence in slotData.description" :key="sentence.id" 
							v-html="sentence"
						></p>
			
					</div>
				</div>

				<div class="level-2" v-if="slotData.expand" 
					:class="{ 
						'asymetric': slotData.expand.asymetric,
						'withAnchors': slotData.expand.anchorLinks
					}"
				>

					<section ref="technosWrapper" class="technos-wrapper" v-show="isExpanded">

						<div 
							v-if="technosAreVisible"
							v-for="(techno, technoIndex) in slotData.expand.technos" :key="technoIndex"
							class="techno-slot"
							v-motion
							style="will-change: opacity, transform;"
							:initial="{ 
								opacity: 0,
								x:  -800 * speed,
							}"
							:delay="technoIndex * 70"
							:enter="{ 
								opacity: 1,
								x: 0,

								transition: {
									duration: uiConfig.animation.medium,
									ease: 'backOut'
								},
							}"
						>

							<img 
								class="techno-logo"
								:src="techno.logoSrc" 
								alt=""
							>

							<p class="techno-name">
								{{  techno.name }}
							</p>

						</div>
					</section>

					<section ref="textsWrapper" class="texts-wrapper" v-if="isExpanded">

						<div ref="anchorWrapper" class="anchor-wrapper" v-if="slotData.expand.anchorLinks">

							<span 
								class="anchor-item"
								v-for="anchorObj in slotData.expand.anchorLinks" 
								:key="anchorObj.id"
								v-html="anchorObj.label"
								:data-destination="anchorObj.anchor"
								@click="handleAnchorClick"
							>
							</span>

						</div>

						<div v-for="block in slotData.expand.texts" :key="block.id" class="text-block">

							<div 
								v-for="text in block" 
								:key="text.id" 
								class="text-item"
							>

								<h6 :id="text.id"
									v-motion
									style="will-change: opacity, transform;"
									:initial="{ 
										opacity: 0,
										x:  -280 * speed,
									}"
									:delay="175"
									
									:enter="{ 
										opacity: 1,
										x: 0,

										transition: {
											duration: uiConfig.animation.medium,
											ease: 'backOut'
										},
									}"
								>{{ text.title }}</h6>

								<p 	v-for="line in text.lines" :key="line.index"
									v-motion
									style="will-change: opacity, transform;"
									:initial="{ 
										opacity: 0,
										y:  350 * speed,
									}"
									:delay="100"
									:enter="{ 
										opacity: 1,
										y: 0,

										transition: {
											duration: uiConfig.animation.medium,
											ease: 'backOut'
										},
									}"

									v-html="line"
								></p>

							</div>

						</div>

					</section>

				</div>
		
			</div>
			
		</div>


	</article>

</template>

<style lang="scss" scoped>


.step {

	&-slot {

		&-wrapper {
			
			width: 100%;
			height: 9rem;
			box-sizing: border-box;
			margin-top: 0;

			transition: 
				margin-top var(--transitionDurationMedium),
				height var(--transitionDurationMedium);

			&.isHovered {
				height: 14rem;

				.step-slot-inner {
					margin: 2rem 0;
				}

				& + .step-slot-wrapper {
					margin-top: 4rem;
				}

				.level-1 {

					// .name,
					// .description {
					// 	//
					// }

					.description {
						margin-right: 1.5rem;
						margin-left: 0.2rem;	
						letter-spacing: 0.075rem;					
					}
					
				}

			}

			&.isExpanded {
				height: 75vh;

				.step-slot-body {
					.level-1 {

						.expand-button {
							transform: translateY(-50%) rotate(-90deg);
						}

					}
				}

				@media #{$desktop} {
					.step-slot {
	
						&-inner {
							border-radius: 0 14rem var(--borderRadiusSmallest) 14rem;
							padding-bottom: 0;
						}
	
					}

				}

				.level-1 {
					height: 20%;

					@media #{$desktop} {
						.name {
							font-size: 2rem;
						}
					}

					.description {
						opacity: 0 !important;
					}
					
					.description,
					.name {
						background: none;
						background-color: transparent;
						box-shadow: none;
					}
				}

				.level-2 {
					display: flex;
					height: calc(80% - 2rem);
					opacity: 1;
				}

			}

			&.isHovered,
			&.isExpanded {

				.step-slot-inner {	
					background-color: var(--bg-black-75);
				}

				.level-1,
				.step-slot-head,
				.step-slot-body {

					.year {
						color: var(--bg-white-55);
					}
	
					.duration,
					.location {
						opacity: 1;
						transform: translateX(0) translateY(0);
					}

					.name {
						color: var(--bg-white-75);
					}
					
				}

			}

		}

		&-inner {
			@include glassMorph;
			overflow: hidden;
			width: 100%;
			height: 100%;
			backdrop-filter: blur(15px);
			border-radius: 0 0 85rem 0;
			background-color: var(--bg-black-40);
			

			box-sizing: border-box;

			margin: 0;
			padding: 0;
			
			transition: 
				background-color var(--transitionDurationMedium),
				margin var(--transitionDurationLong),
				padding var(--transitionDurationMedium),
				border-radius var(--transitionDurationLong);

				@media #{$mobile} {
					border-radius: var(--borderRadiusSmallest);
				}

		}

		&-head {
			position: absolute;
			top: 0.8rem;
			left: 0;
			margin-left: 4.1rem;

			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
			align-items: center;

			.year,
			.duration {
				font-style: italic;
				font-weight: 300;
				color: var(--bg-white-45);

				will-change: color;
				
				transition: color var(--transitionDurationMedium);
			}
			
			.duration {
				font-style: normal;
				opacity: 0;
				margin-left: 1rem;
				transform: translateX(2rem);

				will-change: opacity, transform;

				transition: 
					opacity var(--transitionDurationLong),
					transform var(--transitionDurationLong);
			}

		

		}

		&-body {

			width: calc(100% - 9rem);
			height: 100%;
			padding-left: 7rem;

			flex-direction: column;
			justify-content: flex-start;

			.level-1 {
				position: relative;
				width: 100%;
				height: 100%;

				text-align: center;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;

				transition: height var(--transitionDurationMedium);

				@media #{$mobile} {
					flex-flow: row wrap;
				}

				.expand {

					&-button {
						width: 1.25rem;
						height: 1.25rem;
						cursor: pointer;
						padding: 0.5rem;
						border-radius: 50%;
						background-color: v-bind(stepColor);

						position: absolute;
						top: 50%;
						left: -4rem;
						transform: translateY(-50%) rotate(0deg);

						transition: transform var(--transitionDurationMedium);
					}

				}

				.title {
					position: relative;
					font-weight: 300;
					font-size: 2rem;
					width: 35%;
					text-align: left;
					text-transform: capitalize;
				}
	
				.location {
					position: absolute;
					top: 2.25rem;
					left: 0;
					font-size: 1.3rem;
					color: var(--bg-white-45);
	
					opacity: 0;
					transform: translateY(1rem);
	
					will-change: opacity, transform;
	
					transition: 
						opacity var(--transitionDurationMedium),
						transform var(--transitionDurationMedium);
				}
				
				.name {
					width: 25%;
					font-size: 1.5rem;
					font-weight: bold;
					text-transform: uppercase;
					text-align: right;
					line-height: 2rem;
					// color: var(--bg-white-100);
					color: currentColor;
					border-radius: 0 56rem var(--borderRadiusSmallest) 85rem;
					padding-right: 3rem;
					color: var(--bg-white-90);

					text-shadow: 0 0 18px var(--bg-white-25);
	
					background: linear-gradient(to left top, var(--bg-black-15) 25%, transparent 70%);

					transition: 
						font-size var(--transitionDurationLong),
						color var(--transitionDurationVeryLong),
						background var(--transitionDurationVeryLong);
				
	
					span {
						display: block;
					}
				}
				
				.description {
					display: block;
					font-size: 1.25rem;
					width: 40%;
					font-weight: 300;
					text-align: left;
					// line-height: 0.75rem;
					border-radius: 56rem 0 85rem 0;
					margin-left: 1.4rem;
					margin-right: 0rem;
					letter-spacing: 0.005rem;
					transform: translateY(0);
					
					background: linear-gradient(to right top, var(--bg-black-15) 25%, transparent 70%);

					transition:
						opacity var(--transitionDurationMedium),
						margin-right var(--transitionDurationLong),
						margin-left var(--transitionDurationVeryVeryLong) cubic-bezier(.12,1.24,.1,1.08),
						letter-spacing var(--transitionDurationVeryVeryLong) cubic-bezier(.12,1.24,.1,1.08);

					p {
						color: var(--bg-white-70);
						margin-top: 0;
						margin-left: 3rem;
						margin-bottom: 0.15rem;

						transition: color var(--transitionDurationVeryLong);
						
						&:last-of-type {
							margin-bottom: 0;
						}
					}
				}
	
				.name,
				.description {
					background-color: var(--bg-black-15);
					display: flex;
					flex-flow: column nowrap;
					justify-content: center;
					height: 80%;
				}

				.title,
				.name {
					@media #{$mobile} {
						width: 45%;
					}
				}

			}

			.level-2 {
				// @include glassMorph;
				// width: 0%;
				width: 100%;
				height: 0%;
				// max-height: 30rem;
				opacity: 0;
				overflow: hidden;
				display: flex;
				flex-flow: row nowrap;
				column-gap: 1.5rem;

				padding: 2rem 0;


				// background-color: var(--bg-black-15);

				border-radius: 0;
				
				transition: 
					height var(--transitionDurationMedium),
					border-radius var(--transitionDurationLong);

					&.asymetric {

						.technos-wrapper {
							width: 30%;

							.techno-slot {
								width: 26%;
							}

						}


						.texts-wrapper {
							
							width: 70%;

							.text-block {
								margin-top: 0rem;
							}
							
						}

					}

					&.withAnchors {

						.texts-wrapper {

							.text-block {
								margin-top: 26%;
							}
							
						}
						
					}

				.technos,
				.texts {
					&-wrapper {
						display: flex;
						width: 50%;
					}
				}

				.technos-wrapper {
					@include scrollbar;
					overflow-y: scroll;

					flex-flow: row wrap;
					column-gap: 2rem;
					row-gap: 2rem;

					justify-content: flex-start;
					align-content: flex-start;
					padding-right: 1.5rem;
					padding-left: 0.5rem;

					.techno {

						&-slot {
							position: relative;
							width: 20%;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: flex-start;

							&:last-of-type {
								margin-bottom: 2rem;
							}
						}

						&-logo {

							width: 100%;
							border-radius: 50%;
							padding: 0.5rem;
							opacity: 0.75;

							overflow: hidden;
							background-color: var(--bg-white-100);

							cursor: default;

							transition: 
								opacity var(--transitionDurationMedium);

							&:hover {
								opacity: 1;
							}
						}

						&-name {
							margin-bottom: 0;
							font-size: var(--font-size-medium-minus);
							text-align: center;
							white-space: nowrap;
						}

					}

				}

				.texts-wrapper {
					@include scrollbar;
					flex-direction: column;
					
					overflow-y: scroll;
					
					// padding-bottom: 2rem;

					// &:last-of-type {
						
					// 	// .text-item:last-of-type {
					// 	// 	padding-bottom: 5rem;
					// 	// }
					// }
					
					* {
						margin: 0;
						padding: 0;
					}

					

					.anchor-wrapper {
						z-index: 15;
						position: fixed;
						display: flex;
						flex-flow: row wrap;
						row-gap: 1rem;
						justify-content: center;
						width: calc(70% - 10rem);
						right: 3rem;
						
						padding: 1rem 0.5rem;
						background-color: var(--bg-black-55);
						border-radius: var(--borderRadiusSmall) var(--borderRadiusSmall);
						backdrop-filter: blur(15px);

						text-transform: uppercase;

						span {
							font-size: var(--font-size-medium-minus);
							cursor: pointer;
							margin: 0 1rem;
							padding: 0.25rem 0.75rem;

							background-color: var(--bg-white-15);
							border-radius: var(--borderRadiusSmallest);

							&:first-of-type {
								margin-left: 0;
							}

							&:last-of-type {
								margin-right: 0;
							}
						}

						& + .text-block {
							margin-top: 29%;
						}

					}

					.text-block {
						z-index: 10;
						margin-top: 0rem;
						position: relative;
						display: block;

						&:last-of-type {
							padding-bottom: 2.5rem;
						}

						.text-item {

							&:nth-of-type(1){
								h6 {
									margin-top: 0;
								}
							}

							h6 {
								margin-top: 2.5rem;
							}
						}

						&:not(:last-of-type):before {
							content: "";
							position: absolute;
							bottom: -5rem;
							left: 50%;
							transform: translateX(-50%);
							height: 1px;
							width: 70%;
							background-color: var(--bg-white-15);
						}
					}
					
					.text-item {
						position: relative;

						h6 {
							font-size: var(--font-size-big);
							font-weight: bold;
							font-style: italic;
							margin-bottom: var(--font-size-small);
							margin-left: 1rem;
						}
						
						p {
							font-size: var(--font-size-medium);
							font-weight: 100;
							margin: 0 2rem 0 3rem;
						}
						
						:deep(
							a,
							a:link,
							a:visited,
							a:active
						 ) {
							z-index: 10;
							position: relative;
							display: inline-block;
							color: v-bind(stepColor);
							text-decoration: none;
							text-transform: uppercase;
							font-weight: bold;
						}

					}

				}
				
			}

		}

	}

}

</style>