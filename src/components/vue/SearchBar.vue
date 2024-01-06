<script setup>
import { ref } from "vue"
import UiSearch from './icons/uiSearch.vue'

import { 
	searchStore, 
	setCurrentSearch
} from "@/stores/searchStore.js"

import { useStore } from '@nanostores/vue';

const $store = useStore(searchStore)

const props = defineProps({
	color: {
		type: String,
		default: "currentColor"
	},
	placeholder: {
		type: String,
		default: "search somthing"
	},
	stepID: {
		type: String,
		required: true
	}
})

const textInputRef = ref(null)

function handleKeyUp(){
	setCurrentSearch({
		key: props.stepID,
		searchString: textInputRef.value.value
	})
}


</script>

<template>

	<div 
		class="search-wrapper"
		:class="{ isActive: $store[stepID].length > 1 }"
	>

		<div class="icon">
			<div class="icon-bg"></div>
			<UiSearch :color="color" />

		</div>

		<input 
			class="input"
			type="text"
			ref="textInputRef"
			:placeholder="placeholder"
			:value="$store[stepID]"
			@keyup="handleKeyUp"
		>

	</div>

</template>

<style lang="scss" scoped>

	.search {

		&-wrapper {
			background-color: var(--color-contrast-45);
			border-radius: 999px;
			backdrop-filter: blur(8px);
			border: 2px solid transparent;

			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
			align-items: center;
			padding: 0.25rem;
			cursor: pointer;

			transition: border var(--transitionDurationMediumPlus);

			&.isActive {
				border: 2px solid v-bind(color);
			}

			.icon {
				position: relative;
				z-index: 20;
				width: 3.5rem;
				height: 3.5rem;

				&-bg {
					width: 60%;
					height: 60%;
					display: block;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translateY(-50%) translateX(-50%);
					border-radius: 50%;

					background-color: white;
				}

				svg {
					display: block;
					width: 100%;
					height: 100%;
					position: relative;
				}

			}

			.input {
				font-size: 1.25rem;
				z-index: 10;
				outline: none;
				border: none;
				border-radius: 999px;
				background-color: transparent;
				width: 75%;

				cursor: pointer;
				
			
				color: var(--color-main-80);
				margin-left: 0.5rem;
				padding-right: 3rem;

				&::first-letter {
					margin-left: 1rem;
				}
				
				&::placeholder {
					color: var(--color-main-25);
				}

			}


		}

	}


</style>