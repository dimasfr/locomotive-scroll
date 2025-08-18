import { defineNuxtPlugin } from '#app'
import LocomotiveScroll from 'locomotive-scroll'

export default defineNuxtPlugin((nuxtApp) => {
  const locomotive = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]') as HTMLElement,
    smooth: true,
    multiplier: 1,
  })

  // supaya bisa diakses di komponen
  nuxtApp.provide('locomotive', locomotive)
})
