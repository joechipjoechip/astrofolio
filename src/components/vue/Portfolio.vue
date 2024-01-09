<script setup>
import LayoutStep from './LayoutStep.vue';
import PortfolioContent from './PortfolioContent.vue';

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

			<PortfolioContent
				:isActive="isActive" 
			/>

		</Transition>
	</LayoutStep>

</template>
