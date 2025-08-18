<template>
  <header class="sticky top-0 z-50 bg-white shadow">
    <div 
      class="container mx-auto px-4 py-4 flex justify-between items-center
      bg-white text-gray-900 
      dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <!-- Logo + DarkMode -->
      <!-- <div class="flex items-center gap-2 cursor-pointer" @click="scrollTop">
        <img src="/logo-black.png" class="h-10" alt="Logo">
      </div> -->
      <Button
        variant="outline"
        class="px-1 bg-white dark:bg-gray-800 hover:dark:bg-gray-100 transition-colors duration-300"
        @click="scrollTop">
        <img src="/logo-black.png" class="h-10" alt="Logo">
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
          <NavigationMenuItem>
            <NavigationMenuLink as-child>
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
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
</template>

<script setup lang="ts">
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
