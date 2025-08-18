<template>
  <div class="container mx-auto px-4 py-16">
    <h3 class="text-3xl font-bold mb-8 text-center">Projects</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
      v-for="(project, index) in projects" 
      :key="index"
      class="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
      <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
      <div class="p-4">
          <h4 class="font-bold text-lg">{{ project.title }}</h4>
          <p class="text-gray-600">{{ project.description }}</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio built with Nuxt.js and Tailwind CSS.',
    image: 'https://via.placeholder.com/600x400'
  },
  {
    title: 'E-commerce App',
    description: 'Full-featured online store with cart and payment gateway.',
    image: 'https://via.placeholder.com/600x400'
  },
  {
    title: 'Blog Platform',
    description: 'Content management and blogging platform.',
    image: 'https://via.placeholder.com/600x400'
  }
]
</script>