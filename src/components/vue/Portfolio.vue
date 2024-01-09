<script setup>
import LayoutStep from './LayoutStep.vue';

const props = defineProps({
	isActive: {
		type: Boolean,
		required: true
	},
	wording: {
		type: Object,
		required: true
	}
})

</script>

<template>

	<LayoutStep
		:isActive="isActive" 
		:wording="wording"
	>
		<Transition name="transition-step-change">

			<div 
				v-if="isActive"
				class="portfolio-wrapper"
			>

				<div style="text-align: left; font-size: 12rem;">here portfolio</div>

			</div>


		</Transition>
	</LayoutStep>

</template>

<style lang="scss" scoped>
.portfolio-wrapper {
	z-index: 40;
	width: 100%;
	height: 100%;
	position: relative;
	top: 0;
	border-radius: 0;
	
	&::after {
		z-index: 30;
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background-color: #f5f5f5;
		pointer-events: none;

		animation: animation-bg-enter var(--transitionDurationLong);

		@keyframes animation-bg-enter {
			0% {
				height: 0%
			}
			100% {
				height: 100%
			}
		}
	}
}

</style>