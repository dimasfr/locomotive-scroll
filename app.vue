<template>
  <div class="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">My Portfolio</h1>
        <nav class="space-x-4">
          <NuxtLink to="#projects" class="hover:text-blue-500">Projects</NuxtLink>
          <NuxtLink to="#about" class="hover:text-blue-500">About</NuxtLink>
          <NuxtLink to="#contact" class="hover:text-blue-500">Contact</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-16 text-center">
      <h2 class="text-4xl font-bold mb-4">
        Hi, I'm <span class="text-blue-500">Dimas Fajar Ramadhan</span>
      </h2>
      <p class="text-lg mb-8 max-w-2xl mx-auto">
        I’m a web developer passionate about creating beautiful and functional websites. Here are some of my works.
      </p>
      <a href="#projects" class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
        View My Work
      </a>
    </section>

    <!-- Projects Grid -->
    <section id="projects" class="container mx-auto px-4 py-16">
      <h3 class="text-3xl font-bold mb-8 text-center">Projects</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index"
             class="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
          <div class="p-4">
            <h4 class="font-bold text-lg">{{ project.title }}</h4>
            <p class="text-gray-600">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-gray-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h3 class="text-3xl font-bold mb-4">About Me</h3>
        <p class="max-w-2xl mx-auto text-gray-700">
          I am a full-stack web developer with experience in building responsive and dynamic websites.
          My focus is on creating user-friendly designs and clean code.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container mx-auto px-4 py-16 text-center">
      <h3 class="text-3xl font-bold mb-4">Get in Touch</h3>
      <p class="mb-8 text-gray-700">Interested in working together? Let's connect!</p>
      <a href="mailto:you@example.com" class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
        Email Me
      </a>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white text-center py-6">
      <p>&copy; 2025 dimasfr. All rights reserved.</p>
    </footer>
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


<style>
html, body, [data-scroll-container] {
  height: 100%;
}
</style>
