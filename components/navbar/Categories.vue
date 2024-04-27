<template>
    <div class=" w-full p-4 bg-white shadow-xl flex relative">
        <CategoryNav 
            :categories="categories" 
        />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import categories from '../../utils/categories'

const CategoryNav = defineAsyncComponent(() => import('./CatContainer.vue'))
</script>