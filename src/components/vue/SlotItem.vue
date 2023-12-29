<script setup>

import { ref, onMounted, watch, nextTick } from "vue"

import IconsUiDoubleChevronDown from "./icons/uiDoubleChevronDown.vue"
import IconUiPin from "./icons/uiPin.vue"

import { uiConfig } from "@/assets/uiConfig.js"
import SlotVideo from "@/components/vue/SlotVideo.vue";

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
	},
	isHovered: {
		type: Boolean,
		required: true
	}
})

// BASIC LOGIC
const isExpanded = ref(false)

// EXPAND LOGIC
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

// SCROLLS LOGIC
const slotWrapperElement = ref(null)
const technosWrapper = ref(null)

function scrollSlotAtTop(){
	// timeout because of misunderstanding block size because of margin animations
	setTimeout(() => {
		slotWrapperElement.value.scrollIntoView({behavior: "smooth", inline: "start", block: "start"});
	}, isPined.value ? 300 : 200)
}

// PIN LOGIC
const isPined = ref(props.slotData.pinable)
function handlePin(){
	isPined.value = !isPined.value

	if( isPined.value ){
		scrollSlotAtTop()
	}
}

// ANIMATION LOGIC
const speed = ref(0.2)
const idealDelay = ref(uiConfig.animation.short * (isPined.value ? 1 : (props.slotIndex +2)) * 0.8)

</script>

<template>

	<article 
		ref="slotWrapperElement"
		class="slot-wrapper"
		:class="{
			isHovered,
			isExpanded,
			isPined
		}"
		:data-slot-index="slotIndex"
		:style="{ order: isPined ? '01' : (slotIndex + 1) * 10 }"
	>

		<div class="slot-inner"
			v-motion
			:initial="{ 
				opacity: 0,
				y:  1000 * speed,
			}"
			:delay="idealDelay"
			:enter="{ 
				opacity: 1,
				y: 0,

				transition: {
					duration: uiConfig.animation.medium,
					ease: 'easeInOut'
				},
			}"
		>

			<SlotVideo 
				v-if="slotData.special?.video"
				:src="slotData.special.video"
				:isHovered="isHovered"
				:isExpanded="isExpanded"
			/>
			
			<div class="slot-head">

				<IconUiPin 
					v-if="slotData.pinable" 
					:color="isPined ? stepColor : 'currentColor'"
					class="pin"
					@click="handlePin"
				/>
		
				<time class="year">
					{{ slotData.date.year }}
				</time>
		
				<time class="duration" v-html="slotData.date.duration">
				</time>
		
			</div>
		
		
			<div class="slot-body">
				
				<div 
					class="level-1"
					@click="handleExpand"
					:style="{ cursor: slotData.expand ? 'pointer' : 'default' }"
				>
					<IconsUiDoubleChevronDown 
						v-if="slotData.expand"
						class="expand-button"
						color="white"
					/>
					<h5 class="title"
						v-motion
						style="will-change: transform;"
						:initial="{ 
							x: -1000 * speed,
						}"
						:enter="{ 
							x: 0,
	
							transition: {
								duration: uiConfig.animation.long,
								// onPlay: handleStart,
								delay: (idealDelay * 0.8) + 100,
								ease: 'backInOut'
							}
						}"
					>
						{{ slotData.title }}
						<span class="location">{{ slotData.location }}</span>
					</h5>
			
					<h4 class="name" v-html="slotData.body"></h4>
			
					<div class="description">
			
						<p v-for="sentence in slotData.description" :key="sentence.id" 
							v-html="sentence"
						></p>
			
					</div>
				</div>

				<div class="level-2" v-if="slotData.expand">

					<section 
						ref="technosWrapper" 
						class="technos-wrapper" 
						v-show="isExpanded"
					>

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

					<section class="texts-wrapper" v-if="isExpanded">

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




.slot {

	&-wrapper {
		
		width: 100%;
		height: 9rem;
		box-sizing: border-box;
		margin-top: 0;

		will-change: margin, height;

		transition: 
			margin var(--transitionDurationMedium),
			height var(--transitionDurationMedium);

		&.isHovered {
			margin: 2rem 0;
			height: 14rem;
		}

		&.isExpanded {
			height: 45rem;
			margin: 0;

			@media #{$desktop} {
				.slot {
					&-inner {
						border-radius: 0 var(--borderRadiusSmallest) var(--borderRadiusSmallest) 0;
						padding-bottom: 0;
						margin: 0;
					}
				}

			}

			.slot-body {
				.level-1 {
					height: 10rem;
					cursor: pointer;

					@media #{$desktop} {
						.name {
							font-size: 2rem;
						}
					}

					.expand-button {
						transform: translateY(-50%) rotate(-90deg);
					}

					.description {
						width: 0%;
						margin: 0;
					}
					
					.name {
						width: 100%;
						padding: 0;
					}
					
					.description,
					.name {
						background-color: transparent;
					}

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

			.slot-inner {	
				background-color: var(--color-contrast-55);
			}

			.level-1,
			.slot-head,
			.slot-body {

				.duration,
				.location {
					opacity: 1;
					transform: translateX(0) translateY(0);
				}
			}

		}

	}

	&-inner {
		z-index: 10;
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: var(--color-contrast-40);
		backdrop-filter: blur(15px);
		border-radius: 0 0 85rem 0;

		margin: 0;
		padding: 0;

		will-change: background-color, padding, border-radius, transform, opacity, margin;
		
		transition: 
			background-color var(--transitionDurationMedium),
			margin var(--transitionDurationLong),
			padding var(--transitionDurationMedium),
			border-radius var(--transitionDurationMedium);

			@media #{$mobile} {
				border-radius: var(--borderRadiusSmallest);
			}

	}

	&-head {
		z-index: 20;
		position: absolute;
		top: 0.85rem;
		left: 0;
		margin-left: 3rem;

		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;

		.pin {
			position: absolute;
			// top: 0.01rem;
			left: -2.4rem;
			width: 1.2rem;
			height: 1.2rem;
			background-color: var(--color-contrast-30);
			padding: 0.35rem;
			border-radius: 50%;
			cursor: pointer;
			color: var(--color-main-25);
		}

		.year,
		.duration {
			font-size: var(--font-size-medium-minus);
			font-style: italic;
			font-weight: 300;
			color: var(--color-main-80);
			pointer-events: none;

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
		z-index: 30;
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
					z-index: 40;
					width: 1.25rem;
					height: 1.25rem;
					cursor: pointer;
					padding: 0.5rem;
					border-radius: 50%;
					background-color: v-bind(stepColor);

					position: absolute;
					top: 51%;
					left: -4rem;
					transform: translateY(-50%) rotate(0deg);

					transition: transform var(--transitionDurationMedium);
				}

			}

			.title {
				z-index: 40;
				position: relative;
				font-weight: 300;
				font-size: 2rem;
				width: 35%;
				text-align: left;
				text-transform: capitalize;
				color: var(--color-main-90);
			}

			.location {
				position: absolute;
				top: 2.25rem;
				left: 0;
				font-size: 1.3rem;
				color: var(--color-main-65);

				opacity: 0;
				transform: translateY(1rem);

				will-change: opacity, transform;

				transition: 
					opacity var(--transitionDurationLong),
					transform var(--transitionDurationLong);
			}
			
			.name {
				width: 25%;
				font-size: var(--font-size-medium);
				font-weight: bold;
				text-transform: uppercase;
				text-align: right;
				color: currentColor;
				border-radius: 0 56rem var(--borderRadiusSmallest) 85rem;
				padding-right: 3rem;
				color: var(--color-main-65);

				transition: 
					width var(--transitionDurationShort),
					font-size var(--transitionDurationMedium);
			

				span {
					display: block;
				}
			}
			
			.description {
				display: block;
				font-size: var(--font-size-medium);
				width: 40%;
				font-weight: 300;
				text-align: left;
				border-radius: 56rem 0 85rem 0;
				margin-left: 1.4rem;
				margin-right: 0rem;
				transform: translateY(0);

				transition:
					width var(--transitionDurationShort),
					opacity var(--transitionDurationMedium),
					margin-right var(--transitionDurationLong),
					margin-left var(--transitionDurationVeryVeryLong) cubic-bezier(.12,1.24,.1,1.08),
					letter-spacing var(--transitionDurationVeryVeryLong) cubic-bezier(.12,1.24,.1,1.08);

				p {
					color: var(--color-main-65);
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
				z-index: 40;
				background-color: var(--color-contrast-40);
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
			z-index: 40;
			position: relative;
			width: 100%;
			height: 0%;
			opacity: 0;
			overflow: hidden;
			display: flex;
			flex-flow: row nowrap;
			column-gap: 1.5rem;

			border-radius: 0;
			
			transition: 
				height var(--transitionDurationMedium),
				border-radius var(--transitionDurationLong);

			.technos,
			.texts {
				&-wrapper {
					display: flex;
					width: 50%;
				}
			}

			.technos-wrapper {
				@include scrollbar;
				overflow-y: auto;
				overflow-x: hidden;
				width: 45%;

				flex-flow: row wrap;
				column-gap: 2rem;
				row-gap: 2rem;

				justify-content: flex-start;
				align-content: flex-start;
				// padding-right: 1.5rem;
				// padding-left: 0.5rem;

				.techno {

					&-slot {
						position: relative;
						width: 18%;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: flex-start;

						&:hover {
							.techno {
								&-logo {
									opacity: 1;
								}

								&-name {
									background-color: var(--color-contrast-95);
								}
							}
						}
					}

					&-logo {

						width: 100%;
						border-radius: 50%;
						opacity: 0.75;
						overflow: hidden;
						cursor: default;

						transition: 
							opacity var(--transitionDurationMedium);
					}

					&-name {
						margin-bottom: 0;
						font-size: var(--font-size-medium-small);
						line-height: var(--font-size-medium-small);
						text-align: center;
						white-space: nowrap;
						background-color: var(--color-contrast-30);
						padding: 0.25rem 0.75rem 0.45rem 0.75rem;
						border-radius: 9rem;

						transition: background-color var(--transitionDurationMedium);
					}

				}

			}

			.texts-wrapper {
				@include scrollbar;
				flex-direction: column;
				width: 65%;
				
				overflow-y: auto;
				overflow-x: hidden;
				
				* {
					margin: 0;
					padding: 0;
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
						background-color: var(--color-main-15);
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
						color: var(--color-main-65);
					}
					
					p {
						color: var(--color-main-85);
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



</style>
