<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-12">Experience</h2>
    <div class="relative border-l border-gray-300">

      <div v-for="(exp, index) in experiences" :key="index" class="mb-12 ml-8">
        <!-- Icon -->
        <div class="absolute w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full -left-5 shadow">
          <img :src="exp.image" alt="icon" class="w-6 h-6 object-contain">
        </div>

        <!-- Content -->
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-gray-900">{{ exp.title }}</h3>
          <h4 class="text-gray-600 text-sm mb-2">{{ exp.subtitle }}</h4>
          <p class="text-gray-700 leading-relaxed">{{ exp.description }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const experiences = [
  {
    title: "Frontend Developer",
    subtitle: "Awesome Company • 2022 - Present",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description: "Developing and maintaining responsive web apps using Vue.js and Nuxt. Collaborating with designers and backend team to deliver high quality user experiences."
  },
  {
    title: "UI/UX Designer",
    subtitle: "Creative Studio • 2020 - 2022",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    description: "Designed user interfaces, built interactive prototypes, and conducted usability testing to improve customer satisfaction."
  },
  {
    title: "Intern Web Developer",
    subtitle: "Startup Hub • 2019 - 2020",
    image: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
    description: "Assisted in building internal tools using Node.js and Vue. Gained hands-on experience in full-stack development."
  }
]
</script>
