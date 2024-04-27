<template>
    <main class="flex items-center px-6 scrollbar-hide overflow-auto">
        <div class="mx-auto sticky">
            <div class="relative flex">
                <div
                ref="scrollContainer"
                class="scrollbar-hide overflow-x-auto flex gap-8 justify-center items-center"
                @scroll="handleScroll"
            >
                <div
                    v-for="(category, index) in props.categories"
                    :key="category.title"
                    :class="[
                    'flex flex-col md:w-[120px] w-[80px] justify-center  items-center cursor-pointer',
                    activeIndex === index ? '' : 'border-b-2 border-transparent',
                    ]"
                    @click="handleCategoryClick(index)"
                >
                    <img
                        :src="category.icon"
                        :class="[
                            'w-5 h-5',
                            activeIndex === index ? 'grayscale-0' : 'grayscale',
                        ]"
                    />
                        <span
                            :class="[
                                'text-sm font-semibold mt-2',
                                activeIndex === index ? 'text-black border-b-2  border-black' : 'text-[#6c6c6c]',
                            ]"
                        >
                            {{ category.title }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="hidden md:flex absolute pr-6 right-0  items-center gap-4 z-40 h-full bg-white bg-gradient-to-r from-white via-white to-transparent"
        >
        <div
            class="w-6 h-6 border left-0 cursor-pointer border-gray-400 rounded-full px-2 py-2  flex items-center"
            
            @click="scrollLeft"
        >
            <img class="" src="@/assets/icons/chevron-right.svg" />
        </div>
    <div
        class="w-6 h-6 border cursor-pointer border-gray-400 rounded-full px-2 py-2 bg-white flex items-center"
        :class="{ 'opacity-0 pointer-events-none': !showLeftArrow }"
        @click="scrollRight"
    >
        <img class="-rotate-180" src="@/assets/icons/chevron-right.svg" />
    </div>
    <div class="flex items-center">
        <button
            class="text-sm border rounded-xl text-black hover:border hover:border-gray-400 p-[14px] flex items-center gap-2"
        >
            <img class="" src="@/assets/icons/filters.svg" />
            Filters
        </button>
        </div>
        <div class="flex items-center">
            <button
                class="text-sm border rounded-xl text-black hover:border hover:border-gray-400 p-3 flex items-center gap-2"
            >
                Discover total before taxes
                <div class="w-12 h-6 rounded-2xl flex p-1 items-center bg-gray-400">
                <div class="h-4 w-5 rounded-full bg-white" />
            </div>
            </button>
        </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
    categories: {
        icon: string
        title: string
    }[]
}>()

const scrollContainer = ref<HTMLDivElement | null>(null)
const showLeftArrow = ref(false)
let scrollTween: gsap.core.Tween | null = null
const activeIndex = ref(-1)

onMounted(() => {
    if (scrollContainer.value) {
        const scrollWidth = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth
        showLeftArrow.value = scrollWidth > 0
    }
})

const handleScroll = () => {
    if (scrollContainer.value) {
        const scrollWidth = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth
        showLeftArrow.value = scrollContainer.value.scrollLeft > 0 && scrollWidth > 0
    }
}

const handleCategoryClick = (index: number) => {
    activeIndex.value = index
}

const scrollLeft = () => {
    if (scrollContainer.value) {
            const currentScroll = scrollContainer.value.scrollLeft
            const targetScroll = Math.max(0, currentScroll - scrollContainer.value.clientWidth / 2)
            scrollTween = gsap.to(scrollContainer.value, {
            scrollLeft: targetScroll,
            duration: 0.5,
            ease: 'power2.inOut',
        })
    }
}

const scrollRight = () => {
    if (scrollContainer.value) {
            const currentScroll = scrollContainer.value.scrollLeft
            const targetScroll = Math.min(
            scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth,
            currentScroll + scrollContainer.value.clientWidth / 2
        )
        scrollTween = gsap.to(scrollContainer.value, {
            scrollLeft: targetScroll,
            duration: 0.5,
            ease: 'power2.inOut',
        })
    }
}

onUnmounted(() => {
    if (scrollTween) {
        scrollTween.kill()
    }
})
</script>