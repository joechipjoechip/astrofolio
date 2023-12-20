<script setup>
import Formation from './Formation.vue';
import { stepsWording } from "../../assets/wording/steps"

</script>

<template>
    <div class="shell">

        <Formation
			:wording="stepsWording"
			:isActive="true"
		/> 
       
        <p>test formation via shell</p>
    </div>
</template>
