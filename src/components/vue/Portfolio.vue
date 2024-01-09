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

			<div v-if="isActive">

				<div style="text-align: left; font-size: 12rem;">here portfolio</div>

			</div>


		</Transition>
	</LayoutStep>

</template>