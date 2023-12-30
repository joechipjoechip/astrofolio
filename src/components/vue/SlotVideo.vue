<script setup>
import { onMounted } from 'vue';

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

onMounted(() => {
    console.log("onMounted de video : ", props.src)
})

</script>

<template>
    <div 
        class="video-wrapper"
        :class="{ isExpanded, isHovered }"
    >
        <video 
            muted loop autoplay playsinline
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
            background: linear-gradient(170deg, var(--color-contrast-80) 0%, transparent 75%);

            opacity: 0;
            transition: 
                opacity var(--transitionDurationMedium),
                background var(--transitionDurationMedium);
        }

        &.isHovered {

            &::before {
                opacity: 0.25;
            }

            .video-player {
                opacity: 0.75;
            }
        }
        &.isExpanded {

            &::before {
                background: linear-gradient(170deg, var(--color-contrast-80) -25%, transparent 60%);
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
        pointer-events: none;
    }
}
</style>
