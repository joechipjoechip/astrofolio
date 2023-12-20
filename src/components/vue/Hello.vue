<script setup>
import { ref } from "vue"

import { globalStore, setName } from "../../stores/globalStore.js"
import { useStore } from '@nanostores/vue';

const $store = useStore(globalStore);


const message = ref("message de base")

function handleClickTest(){
    message.value = "un autre message qui prouve l'interactivité"
}

function handleClickStoreTest(){
    setName("Billy")
}

</script>

<template>
    <div class="hello-wrapper">
        <p>
            ceci est le composant vue Hello.vue
        </p>
        <p class="clickable" @click="handleClickTest">
            {{ message }}
        </p>
        <p @click="handleClickStoreTest">
            {{ $store.name }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .hello {
        &-wrapper {
            border: solid 5px orange;

            p {
                border: solid 1px green;
            }
        }
    }

    .clickable {
        cursor: pointer;
    }
</style>