<template>
  <div class="flex flex-col">
    <div class="rounded-2xl snap-mandatory snap-x flex flex-col overflow-auto scrollbar-hide">
      <div class="relative snap-start  bg-gray-200">
        <img
            :src="currentImage"
            :alt="title"
            class="w-full transition-transform delay-200 h-[300px] rounded-2xl"
        />
            <div class="absolute top-1/2 left-0 flex justify-between w-full px-4">
            <button
                class="bg-white bg-opacity-50 flex justify-center items-center rounded-full h-8 w-8 shadow-md focus:outline-none"
                :disabled="currentImageIndex === 0"
                @click="prevImage"
                aria-label="Previous Image"
            >
            <img class="-rotate-180" src="@/assets/icons/chevron-right.svg" />
          </button>
            <button
                class="bg-white bg-opacity-50 flex justify-center items-center rounded-full h-8 w-8 shadow-md focus:outline-none"
                :disabled="currentImageIndex === images.length - 1"
                @click="nextImage"
                aria-label="Next Image"
            >
            <img class="" src="@/assets/icons/chevron-right.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-3">
      <div class="flex justify-between items-center">
        <div class="text-black text-sm font-semibold">{{ location }}</div>
        <div class="flex text-sm items-center">
          <p>{{ rating }}</p>
          <img class="" src="@/assets/icons/star.svg" />
        </div>
      </div>
      <div class="text-gray-600 text-sm">{{ distance }}</div>
      <div class="text-gray-600">{{ availabilityDates }}</div>
      <div class="flex flex-col">
        <div class="text-sm text-gray-800 font-semibold">{{ price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
    id: string
    title: string,
    images: Array<string>,
    rating: number | string,
    location: string,
    price: string,
    availabilityDates: string,
    distance: string
}>()


const currentImageIndex = ref(0);
const currentImage = computed(() => props.images[currentImageIndex.value]);

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const nextImage = () => {
  if (currentImageIndex.value < props.images.length - 1) {
    currentImageIndex.value++;
  }
};
</script>