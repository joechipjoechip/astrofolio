<script setup>
import LayoutStep from './LayoutStep.vue';
import Losange from './Losange.vue';

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
		<Losange :isActive="isActive" />
	</LayoutStep>

</template>