
<script setup>
defineProps({
    color: {
        type: String,
        default: "currentColor"
    }
})
</script>

<template>

    <svg width="1em" height="1em" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 15L0 8.28358L1.63333 6.71642L7 11.8377L12.3667 6.71642L14 8.28358L7 15ZM7 8.28358L0 1.56716L1.63333 0L7 5.12127L12.3667 0L14 1.56716L7 8.28358Z" :fill="color" fill-opacity="0.8"/>
    </svg>

</template>