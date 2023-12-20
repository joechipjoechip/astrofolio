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
		<SlotList 
			:slots="wording.slots"
			:stepIsActive="isActive"
			:stepColor="wording.color"
		/>
	</LayoutStep>

</template>