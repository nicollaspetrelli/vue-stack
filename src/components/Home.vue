<template>
    <h1 class="mb-6 text-3xl font-extrabold">HOME</h1>

    <p class="mb-6">Name in store is: {{ name }}</p>

    <input
        v-model="newName"
        type="text"
        class="p-2 mr-4 border border-gray rounded"
    />

    <button @click="saveName" class="p-2 file:text-white bg-indigo-600 rounded">
        Submit
    </button>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useStore()

const name = computed(() => {
    return store.state.user.name
})

const newName = ref('')

function saveName() {
    store.dispatch('setName', newName.value)
    newName.value = ''
    router.push('/about')
}
</script>

<style>
</style>