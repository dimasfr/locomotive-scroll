<template>
  <header 
    :class="[
      'sticky top-0 z-50 backdrop-blur-md transition-colors duration-300',
      isScrolled
        ? 'blur-custom'
        : 'dark-custom shadow'
    ]">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">

      <Button
        variant="ghost"
        class="px-1"
        @click="scrollTop">
        <div class="relative inline-block">
          <img src="/logo-black.png" alt="Logo" class="h-10 relative z-10">
          <img
            src="/logo-black.png"
            alt="Outline"
            class="h-10 absolute inset-0 z-0"
            style="filter: drop-shadow(0 0 1.5px white) drop-shadow(0 0 1.5px white);"
          >
        </div>
      </Button>

      <!-- Navigation -->
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <Button variant="ghost" @click="scrollTo('#about')">About</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <Button variant="ghost" @click="scrollTo('#experience')">Experience</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <Button variant="ghost" @click="scrollTo('#projects')">Projects</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button
        variant="outline"
        size="icon"
        class="relative"
        @click="toggleTheme"
      >
        <!-- Moon icon -->
        <Icon
          icon="radix-icons:moon"
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <!-- Sun icon -->
        <Icon
          icon="radix-icons:sun"
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#app'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark"
}

const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20 // lebih solid jika scroll > 20px
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})


interface LocomotiveScroll {
  scrollTo: (element: Element | string, options?: object) => void
}
const { $locomotive } = useNuxtApp() as unknown as { $locomotive: LocomotiveScroll }

const scrollTo = (target: string) => {
  const el = document.querySelector(target)
  if (el) {
    $locomotive.scrollTo(el)
  }
}

const scrollTop = () => {
  $locomotive.scrollTo('body', { duration: 1 })
}
</script>
