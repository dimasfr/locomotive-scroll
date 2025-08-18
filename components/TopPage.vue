<template>
  <button
    v-show="showButton"
    class="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
    @click="scrollTop"
  >
    ↑ Top
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const nuxtApp = useNuxtApp()

interface LocomotiveScroll {
  scrollTo: (target: number | string | HTMLElement, options?: { duration?: number }) => void
}

const scrollTop = () => {
  (nuxtApp.$locomotive as LocomotiveScroll).scrollTo(0, { duration: 1 })
}

const handleScroll = () => {
  // kalau sudah scroll lebih dari 300px baru tombol muncul
  showButton.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
