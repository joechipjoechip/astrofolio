<script setup>
import { ref } from "vue"
const message = ref("message de base")

function handleClick(){
    message.value = "un autre message qui prouve l'interactivité"
}

</script>

<template>
        <div class="hello-wrapper">
            <p>
                ceci est le composant vue Hello.vue
            </p>
            <p class="clickable" @click="handleClick">
                {{ message }}
            </p>
        </div>
</template>

<style lang="scss" scoped>
    .hello {
        &-wrapper {
            border: solid 5px orange;
        }
    }

    .clickable {
        cursor: pointer;
    }
</style>