<template>
  <div v-if="render">
    <NuxtLayout>
      <main>
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup>
const render = ref(false);

onBeforeMount(() => {
  setTimeout(() => {
    render.value = true
  }, 1000);
})
</script>