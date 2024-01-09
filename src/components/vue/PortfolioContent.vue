<script setup>

const props = defineProps({
	isActive: {
		type: Boolean,
		required: true
	},
})

</script>

<template>
    <div 
        v-if="isActive"
        class="portfolio-wrapper"
    >
        <div class="portfolio-curtain"></div>

        <div class="portfolio-inner">
            <div style="text-align: center; font-size: 12rem;">here portfolio</div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

.portfolio {

    &-wrapper {
        z-index: 20;
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        border-radius: 0;
    }

    &-curtain {
        
        z-index: 30;
        
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: #f5f5f5;
        pointer-events: none;

        animation: animation-curtain var(--transitionDurationLong) linear;
        
    }

    &-inner {
        position: relative;
        z-index: 40;
        * {
            z-index: 40;
        }
    }

}



@keyframes animation-curtain {
    0% {
        height: 0%
    }
    100% {
        height: 100%
    }
}

</style>