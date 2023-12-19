<script setup>

defineProps({
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

    <NuxtLayout name="layout-step" 
		:isActive="isActive" 
		:wording="wording"
	>

		<SlotList 
			:slots="wording.slots"
			:stepIsActive="isActive"
			:stepColor="wording.color"
		/>

    </NuxtLayout>
	
</template>