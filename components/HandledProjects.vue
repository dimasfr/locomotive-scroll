<template>
  <div class="container mx-auto px-4 py-16">
    <h3 class="text-3xl font-bold mb-8 text-center">Projects</h3>

    <div class="relative">
      <Swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="30"
          navigation
          :pagination="{ el: '.custom-pagination', clickable: true }"
        >
          <SwiperSlide 
            v-for="(project, index) in projects" 
            :key="index" 
            @click="openModal(project)"
          >
            <div class="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-48 object-cover"
              >
              <div class="p-4">
                <h4 class="font-bold text-lg">{{ project.title }}</h4>
                <p class="text-gray-600">{{ project.description }}</p>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>

      <div class="custom-pagination mt-4 flex justify-center" />
    </div>

    <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg max-w-4xl w-[90%] p-8 relative">
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          @click="selectedProject = null"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-x-icon lucide-square-x"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        </button>

        <!-- Isi modal -->
        <img
          :src="selectedProject.image"
          :alt="selectedProject.title"
          class="w-full h-80 object-cover rounded-md"
        >
        <h4 class="text-2xl font-bold mt-4">{{ selectedProject.title }}</h4>
        <p class="text-gray-600 mt-2">{{ selectedProject.description }}</p>

        <!-- language bisa ditambahkan nanti -->
        <p class="mt-2 text-sm text-blue-600 italic">
          Language: {{ selectedProject.language || 'Coming soon' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]

const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
}

const projects = [
  { 
    title: 'Eprocurement', 
    description: 'Landing', 
    image: '/portfolio/eprocurement.png',
    language: "Vue, Express"
  },
  { 
    title: 'Smile', 
    description: 'LAnding.', 
    image: '/portfolio/smile.png',
    language: "-"
  },
  { 
    title: 'Inoac', 
    description: 'Online store.', 
    image: '/portfolio/inoac.png',
    language: "-"
  },
  { 
    title: 'DevConnector', 
    description: 'Blogging platform.', 
    image: '/portfolio/devconnector.png',
    language: "-"
  },
  { 
    title: 'Schoolease', 
    description: 'Analytics dashboard.', 
    image: '/portfolio/schoolease.png',
    language: "-"
  },
  { 
    title: 'School Datastore', 
    description: 'Realtime chat.', 
    image: '/portfolio/datastore.png',
    language: "-"
  },
  { 
    title: 'Medeva', 
    description: 'Marketing landing page.', 
    image: '/portfolio/medeva.png',
    language: "-"
  },
  { 
    title: 'Statistical Process Control', 
    description: 'Marketing landing page.', 
    image: '/portfolio/spc.png',
    language: "-"
  },
  { 
    title: 'Manufacture Quality', 
    description: 'Marketing landing page.', 
    image: '/portfolio/man-qlt.png',
    language: "-"
  },
  { 
    title: 'Manufacture Production', 
    description: 'Marketing landing page.', 
    image: '/portfolio/man-prd.png',
    language: "-"
  },
  { 
    title: 'Fishing Vessel Recording System', 
    description: 'Marketing landing page.', 
    image: '/portfolio/pondokdadap.png',
    language: "-"
  },
  { 
    title: 'Edsen', 
    description: 'Marketing landing page.', 
    image: '/portfolio/edsen.png',
    language: "-"
  },
  { 
    title: 'SIDukcapil', 
    description: 'Marketing landing page.', 
    image: '/portfolio/sidukcapil.png',
    language: "-"
  },
  { 
    title: 'Academic Information System', 
    description: 'Marketing landing page.', 
    image: '/portfolio/siakad.png',
    language: "-"
  },
  { 
    title: 'MasterITN', 
    description: 'Marketing landing page.', 
    image: '/portfolio/masteritn.png',
    language: "-"
  },
  { 
    title: 'ChatBot Whatsapp', 
    description: 'Marketing landing page.', 
    image: '/portfolio/chatbot.png',
    language: "-"
  },
  { 
    title: 'SILab', 
    description: 'Marketing landing page.', 
    image: '/portfolio/silab.png',
    language: "-"
  },
  { 
    title: 'Konco Kost', 
    description: 'Marketing landing page.', 
    image: '/portfolio/konco-kost.png',
    language: "-"
  },
  { 
    title: 'Al Manahij', 
    description: 'Marketing landing page.', 
    image: '/portfolio/al-manahij.png',
    language: "-"
  },
  { 
    title: 'Masail Fiqhiyyah', 
    description: 'Marketing landing page.', 
    image: '/portfolio/masail.png',
    language: "-"
  },
]
</script>

<style scoped>
:deep(.swiper-pagination) {
  bottom: 0 !important;
  text-align: center;
}
</style>
