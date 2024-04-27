<template>
    <div class="hidden lg:flex gap-3">
        <Navlinks text="Stay" />
        <Navlinks text="Experience" />
        <Navlinks text="Online Experience" />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const Navlinks = defineAsyncComponent(() => import('./Navlinks.vue'))
</script>

<style scoped>
</style>
