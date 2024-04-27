<template>
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black w-full bg-opacity-45 h-auto pb-4">
        <div class="relative w-1/2 bg-white rounded-lg shadow-lg p-6">
            <div class="flex justify-between items-center py-3">
                <button class="text-gray-500 hover:text-gray-700 text-2xl" @click="closeModal">
                    <svg
                        class="w-6 h-6 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                        />
                    </svg>
                </button>
                <h3 class="text-base font-semibold">{{ modalTitle }}</h3>
                <div></div>
            </div>
            <div class="border-b border-gray-300 mb-4"></div>
            <p class="text-base font-semibold text-black mb-4">Welcome to Airbnb</p>
            <div class="flex flex-col items-center mb-4">
                <span class="border-2 border-black h-[50px] mt-4 rounded-md px-3 py-1 w-full flex items-center">+234</span>
                <input
                    type="text"
                    class="border outline-none border-gray-300 h-[54px] rounded-md px-3 py-2 w-full"
                    placeholder="Phone number"
                    v-model="phoneNumber"
                />
            </div>
        <p class="pb-2 text-xs text-black">We'll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
        <button
            class="bg-[#FF385C] h-[50px] w-full text-white rounded-md px-4 py-2 hover:bg-red-600"
            @click="handleLogin"
        >
            Continue
        </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/utils/modal'
import { ref } from 'vue'

const modalStore = useModalStore()
const { isModalOpen, modalTitle } = storeToRefs(modalStore)
const phoneNumber = ref('')

const closeModal = () => {
    modalStore.closeModal()
}

const handleLogin = () => {
    modalStore.handleLogin(phoneNumber.value)
}
</script>