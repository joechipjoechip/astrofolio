<script setup>
import Stepper from './Stepper.vue';
import { useEmitter } from "@/composables/Emitter"
import { useUserInteractions } from "@/composables/UserInteractions"

useUserInteractions()

const { emit } = useEmitter()

function handleWheel( event ){

    if( event.target.classList.contains("shell") 
        || event.target.classList.contains("step-wrapper") 
        || event.target.classList.contains("step-head")
    ){
        emit("wheel-from-shell", event)
    }
}

</script>

<template>
    <div class="shell" @wheel="handleWheel">

        <Stepper />

    </div>
</template>

<style scoped>
.shell {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    overflow: hidden !important;
}
</style>
