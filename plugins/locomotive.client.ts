// plugins/locomotive.client.ts
import LocomotiveScroll from 'locomotive-scroll'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    window.addEventListener('load', () => {
      const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement

      if (scrollContainer) {
        new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        })
      }
    })
  }
})
