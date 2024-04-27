<template>
    <div
        @click="onClick"
        :class="[style]"
        class="px-4 py-2 text-gray-600 hover:bg-neutral-100 transition-all
        hover:rounded-full  font-normal cursor-pointer hover:text-black"
    >
        {{ text }}
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { ref } from 'vue';

const props = defineProps({
    onClick: {
        type: Function as PropType<(event: MouseEvent) => void>,
    },
    text: {
        type: String,
        required: true,
    },
    style:{
        type: Object as PropType<{ [key: string]: string | boolean }>
    },
})

const style = ref(props.style); 
</script>