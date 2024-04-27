<template>
  <div class="hidden md:flex gap-3 items-center">
    <Navlinks
        text="Airbnb your home"
        :style="{
            'font-semibold': true,
            'text-black': true,
        }"
    />
    <div class="">
        <img
            src="@/assets/images/globe.svg"
            class="md:block cursor-pointer h-[18px]"
            alt="globe"
        />
    </div>
    <div class="relative z-50">
        <button
            class="cursor-pointer flex gap-1 justify-between items-center hover:drop-shadow-2xl rounded-full h-[40px] px-4 py-2 border border-gray-400 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            @click="isDropdownOpen = !isDropdownOpen"
        >
            <img
                src="@/assets/images/menu.svg"
                class="md:block h-[16px]"
                alt="menu"
            />
            <svg 
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1024 1024" >
                <path fill="#000" 
                    d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0"></path>
            </svg>
        </button>
        <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
        >
        <div class="py-2">
            <NuxtLink
                to=""
                class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                @click.prevent="openLoginModal"
                @click="isDropdownOpen = !isDropdownOpen"
                >Login</NuxtLink>
            <NuxtLink
                to=""
                class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                @click.prevent="openSignupModal"
                @click="isDropdownOpen = !isDropdownOpen"
                >Signup
            </NuxtLink>
            <div class="border-b w-full border-gray-200" />
            <NuxtLink
                @click="isDropdownOpen = !isDropdownOpen"
                to=""
                class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                >Get a Gift Card
            </NuxtLink>
            <NuxtLink
                @click="isDropdownOpen = !isDropdownOpen"
                to=""
                class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                >Airbnb your home
            </NuxtLink>
            <NuxtLink
                @click="isDropdownOpen = !isDropdownOpen"
                to=""
                class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                >Help Center
            </NuxtLink>
            </div>
        </div>
    </div>
    <LoginModal />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/utils/modal'
import { defineAsyncComponent, ref } from 'vue'

const Navlinks = defineAsyncComponent(() => import('./Navlinks.vue'))
const LoginModal = defineAsyncComponent(() => import('../../modals/login.vue'))

const isDropdownOpen = ref(false)
const modalStore = useModalStore()

const openLoginModal = () => {
  modalStore.openModal('Login')
}

const openSignupModal = () => {
  modalStore.openModal('Signup')
}
</script>