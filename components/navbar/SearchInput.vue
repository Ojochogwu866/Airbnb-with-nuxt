<template>
    <div class="relative cursor-pointer ">
      <div
          class="flex items-center rounded-full"
          :class="{
          'bg-white hover:w-full border border-gray-300 rounded-full': isActive,
          'bg-transparent hover:bg-gray-200 rounded-full': !isActive,
          }"
      >
        <div
            class="flex-1 px-4 py-2 flex flex-col justify-center"
            :class="{
              'border-l border-gray-300': border,
              'bg-white shadow-lg rounded-full': isActive,
            }"
            @click="toggleModal"
        >
          <h1 class="font-medium text-sm text-black">{{ label }}</h1>
          <input
              v-if="isInput"
              :placeholder="placeholder"
              class="text-sm outline-none placeholder:text-gray-400 bg-transparent text-black font-normal"
          />
        <p v-else class="text-sm text-gray-400 bg-transparent font-normal">
          <slot></slot>
        </p>
      </div>
    </div>
    <div
      v-if="isModalActive"
      class="absolute top-full md:min-w-[500px] w-[300px] min-h-[400px] left-0 mt-2 bg-white rounded-2xl shadow-lg z-50"
    >
      <div class="px-4 py-2">
        <p>{{ label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
  label: string
  placeholder?: string
  border?: boolean
  isInput: boolean
  activeModal: string | null
}>()

const emit = defineEmits(['toggle-modal'])

const isModalActive = computed(() => props.id === props.activeModal)
const isActive = computed(() => isModalActive.value)
const toggleModal = () => {
  emit('toggle-modal', props.id)
}
</script>