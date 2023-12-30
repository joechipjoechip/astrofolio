<script setup>
import LayoutStep from './LayoutStep.vue';
import SlotList from './SlotList.vue';

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
			:stepID="wording.id"
		/>
	</LayoutStep>

</template>