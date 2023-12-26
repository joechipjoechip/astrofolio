<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    isHovered: {
        type: Boolean,
        default: false
    },
    isExpanded: {
        type: Boolean,
        default: false
    }
})

console.log("video slot triggered : src : ", props.src)
</script>

<template>
    <div 
        class="video-wrapper"
        :class="{ isExpanded, isHovered }"
    >
        <video 
            muted autoplay loop
            class="video-player"
        >
            <source :src="src" type="video/mp4" />
        </video>
    </div>
</template>

<style lang="scss" scoped>
.video {
    &-wrapper {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: inherit;

        &::before {
            z-index: 20;
            content: "";
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            // background-color: var(--color-contrast-25);
            background: linear-gradient(170deg, var(--color-contrast-100) 0%, transparent 40%);
            // backdrop-filter: blur(15px);

            opacity: 0;
            transition: opacity var(--transitionDurationMedium);
        }

        &.isHovered {

            .video-player {
                opacity: 0.25;
            }
        }
        &.isExpanded {

            &::before {
                height: 100%;
                opacity: 1;
            }

            .video-player {
                opacity: 1 !important;
            }
        }
    }
    
    &-player {
        z-index: 15;
        width: 100%;
        height: inherit;
        object-fit: cover;
        opacity: 0;
        transition: opacity var(--transitionDurationMedium);
    }
}
</style>