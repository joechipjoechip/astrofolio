<script setup>
import Formation from './Formation.vue';
import { stepsWording } from "../../assets/wording/steps"

</script>

<template>
    <div>

        <Formation client:load
			:wording="stepsWording"
			:isActive="true"
		/> 
       
        <p>test formation via shell</p>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/main.scss";
</style>