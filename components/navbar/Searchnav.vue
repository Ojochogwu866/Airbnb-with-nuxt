<template>
  <div
    class=" bg-gray-100 rounded-full relative justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    :class="{
      'grid grid-cols-4': !isScreenSmall && !props.isScrolled,
      'flex justify-between w-full items-center': isScreenSmall,
      'md:w-9/12 mx-auto': !props.isScrolled && !isScreenSmall,
      'mx-auto grid grid-cols-4 w-2/4': props.isScrolled && !isScreenSmall,
    }"
  >
    <SearchInput
      id="where"
      placeholder="Where to?"
      label="Where"
      :isInput="true"
      @toggle-modal="toggleModal"
      :activeModal="activeModal"
    />

    <SearchInput
      v-if="!isScreenSmall"
      id="checkin"
      label="Check In"
      border
      :isInput="false"
      @toggle-modal="toggleModal"
      :activeModal="activeModal"
      >Check In</SearchInput
    >

    <SearchInput
      v-if="!isScreenSmall"
      id="checkin"
      label="Any Week"
      border
      :isInput="false"
      @toggle-modal="toggleModal"
      :activeModal="activeModal"
      class="hidden"
      >Any Week</SearchInput
    >

    <SearchInput
      v-if="!isScreenSmall"
      id="checkout"
      label="Check Out"
      border
      :isInput="false"
      @toggle-modal="toggleModal"
      :activeModal="activeModal"
      >Check Out</SearchInput
    >

    <div v-if="!isScreenSmall" class="flex justify-between relative w-full">
      <SearchInput
        id="who"
        label="Who"
        border
        :isInput="false"
        @toggle-modal="toggleModal"
        :activeModal="activeModal"
        >Who</SearchInput
      >

      <div class="px-4 py-2 flex items-end justify-end">
        <button
          class="flex justify-center items-center rounded-full hover:bg-[#FF385C] transition-colors duration-300"
          :class="{
            'h-10 w-10 bg-[#FF385C] text-white': !isAnyTabActive,
            'bg-[#FF385C] text-white px-4 py-2': isAnyTabActive,
          }"
        >
          <span v-if="isAnyTabActive">Search</span>
          <img
            v-else
            src="@/assets/images/search.svg"
            class="md:block h-[16px]"
            alt="search"
          />
        </button>
      </div>
    </div>

    <div v-else class="flex justify-end items-end relative w-full">
      <div class="px-4 py-2 flex items-end justify-end">
        <button
          class="flex justify-center items-center rounded-full hover:bg-[#FF385C] transition-colors duration-300"
          :class="{
            'h-10 w-10 bg-[#FF385C] text-white': !isAnyTabActive,
            'bg-[#FF385C] text-white px-4 py-2': isAnyTabActive,
          }"
        >
          <span v-if="isAnyTabActive">Search</span>
          <img
            v-else
            src="@/assets/images/search.svg"
            class="md:block h-[16px]"
            alt="search"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref, computed, defineProps, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    isScrolled: {
        type: Boolean,
        required: true,
    },
});

const SearchInput = defineAsyncComponent(() => import('./SearchInput.vue'));
const activeModal = ref<string | null>(null);
const toggleModal = (id: string) => {
    activeModal.value = activeModal.value === id ? null : id;
};
const isAnyTabActive = computed(() => activeModal.value !== null);
const isScreenSmall = ref(false);

const handleResize = () => {
    isScreenSmall.value = window.innerWidth <= 768;
};

onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>