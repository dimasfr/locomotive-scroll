<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-12">My Journey</h2>
    <div class="relative border-l border-gray-300">

      <div v-for="(exp, index) in experiences" :key="index" class="mb-12 ml-8" @click="exp.image ? openModal(exp.image) : null">
        <!-- Icon -->
        <div class="absolute w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full -left-5 shadow">
          <img :src="exp.icon" alt="icon" class="w-6 h-6 object-contain">
        </div>

        <!-- Content -->
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-gray-900">{{ exp.title }}</h3>
          <h4 class="text-gray-600 text-sm mb-2">{{ exp.subtitle }}</h4>
          <p class="text-gray-700 leading-relaxed">{{ exp.description }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      @click.self="closeModal"
    >
      <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-2xl w-full p-4 relative">
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300"
          @click="closeModal"
        >
          ✕
        </button>
        <img :src="selectedImage" alt="Bukti pengalaman" class="w-full rounded-lg object-contain">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const showModal = ref(false)
const selectedImage = ref("")

const openModal = (image) => {
  selectedImage.value = image
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedImage.value = ""
}

const experiences = [
  {
    title: "Move to Big City",
    subtitle: "BPJS Ketenagakerjaan (Via PT. Adi Data Informatika) • South Jakarta • Nov 2023 - Present",
    icon: "/icon/insurance.png",
    description: "Relocating to the capital opened a new chapter in my career, where I joined a major company to develop and maintain the Eprocurement and Vendor Management Systems.",
    image: "https://picsum.photos/800/400?random=1"
  },
  {
    title: "Promoted as Lead Engineer",
    subtitle: "PT. Sekawan Media Informatika • Malang • Sept 2022",
    icon: "/icon/leadership.png",
    description: "Leading a team of developers to maintain and develop new features of Manufacture Production and Quality Control System.",
    image: "/experience/exp-4.jpg"
  },
  {
    title: "From Dream to Doorstep",
    subtitle: "Co-Founder & Fullstack Developer • Bramara • Malang • Jun 2022",
    icon: "/icon/apitherapy.png",
    description: "Together with my team, we create diverse projects, including Unity-based games, Academic Information Systems, and Human Resource Information Management Systems (HRIS).",
    image: "/experience/exp-3.jpg"
  },
  {
    title: "Redefining Myself in a New Journey",
    subtitle: "Fullstack Developer • PT. Sekawan Media Informatika • Malang • Jan 2022",
    icon: "/icon/clover.png",
    description: "Joined Sekawan Media Informatika, where I took on the challenge of building and nurturing digital systems — from Clinic Management and Statistical Process Control to Fishing Vessel Recording, Manufacturing Production, and Quality Control.",
    image: "/experience/exp-2.jpg"
  },
  {
    title: "Graduated right before New Normal Era",
    subtitle: "Graduate • Institute Of Technology • Malang • Feb 2020",
    icon: "/icon/education.png",
    description: "Graduated with a Bachelor's degree in Informatic Engineering, specializing in software development and data management.",
    image: "https://picsum.photos/800/400?random=3"
  },
  {
    title: "From Campus to Career",
    subtitle: "Fullstack Developer • PT. Maestro Manajemen Nusantara • Malang • Oct 2019",
    icon: "/icon/back-to-school.png",
    description: "Scouted by Maestro, I began my journey as a newcomer, contributing to diverse projects such as the Hospital Management System and the Academic Information System.",
    image: "/experience/exp-1.jpg"
  },
  {
    title: "Start my college journey",
    subtitle: "Student • Institute Of Technology • Malang • Sept 2016",
    icon: "/icon/school-bag.png",
    description: "Actively involved in various student organizations and projects, enhancing my skills in software development and teamwork.",
    image: "https://picsum.photos/800/400?random=3"
  }
]
</script>
