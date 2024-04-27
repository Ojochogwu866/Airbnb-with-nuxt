<template>
    <main class="fixed z-50 top-0 w-full">
        <div class="w-full bg-white transition-all duration-300" :class="{ 'h-auto': !isScrolled, '': isScrolled }">
                <div class="py-[20px] px-[60px] flex flex-col transition-all duration-300">
                    <div class="flex items-center justify-between w-full mb-6">
                        <Logo />
                        <navmenu v-if="!isScrolled" />
                        <searchnav v-if="isScrolled" class="ml-auto" :class="{'hidden' : !isScrolled}" :isScrolled="isScrolled" />
                        <profile />
                    </div>
                <searchnav v-if="!isScrolled" :isScrolled="isScrolled" />
            </div>
            <categories :class="{'p-2' : !isScrolled}" />
        </div>
    </main>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from '@vue/composition-api';
import Logo from './TopNav/Logo.vue';
import Navmenu from './TopNav/Navmenu.vue';
import Profile from './TopNav/Profile.vue';
import Searchnav from './Searchnav.vue';
import Categories from './Categories.vue';

export default defineComponent({
components: {
        Logo,
        Navmenu,
        Profile,
        Searchnav,
        Categories,
},
setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return {
        isScrolled,
    };
  },
});
</script>