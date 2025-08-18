<template>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Left: Info -->
      <div>
        <h2 class="text-3xl font-bold mb-4">I'm a creative Web Developer</h2>
        <p class="text-gray-800 mb-6 leading-relaxed">
          With a strong foundation in both front-end and back-end technologies, I thrive
          on turning ideas into reality. My journey began by diving into the world of coding,
          and over the years, I've honed my skills in languages like JavaScript, PHP, and Python.
          From designing responsive and engaging user interfaces to architecting robust server systems,
          I take pride in delivering seamless and user-centric experiences.
        </p>

        <!-- Details -->
        <div class="space-y-3">
          <div class="flex justify-between border-b pb-2">
            <Label class="text-gray-800 py-1">Age</Label>
            <Label class="text-gray-800 py-1">{{ getAge() }} years</Label>
          </div>
          <div class="flex justify-between border-b pb-2">
            <Label class="text-gray-800 py-1">Location</Label>
            <Label class="text-gray-800 py-1">Jakarta, Indonesia</Label>
          </div>
          <div class="flex justify-between border-b pb-2">
            <Label class="text-gray-800 py-1">Phone</Label>
            <Label class="text-gray-800 py-1">(+62) 822 2941 9256</Label>
          </div>
          <div class="flex justify-between border-b pb-2">
            <Label class="text-gray-800 py-1">Mail</Label>
            <a href="mailto:dimasfr918@gmail.com" class="text-blue-500 hover:underline">
              dimasfr918@gmail.com
            </a>
          </div>
          <div class="flex justify-between items-center border-b pb-2">
            <Label class="text-gray-800 py-1">Socials</Label>
            <div class="flex space-x-2">
              <a 
                href="https://www.linkedin.com/in/dimas-fajar-ramadhan-62107620b/" 
                target="_blank"
                class="flex items-center bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                <i class="fab fa-linkedin mr-1" /> LinkedIn
              </a>
              <a 
                href="https://github.com/dimasfr" 
                target="_blank"
                class="flex items-center bg-gray-800 text-white px-3 py-1 rounded hover:bg-black text-sm">
                <i class="fab fa-github mr-1" /> Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Photo -->
      <div class="flex justify-center">
        <img 
          src="../public/profile/about-screen.jpg"
          alt="Profile photo"
          class="rounded-xl shadow-lg w-full max-w-md object-cover"
        >
      </div>

    </div>
  </div>
</template>

<script setup>
import Label from './ui/label/Label.vue';

function getAge() {
  const birthDate = new Date("1998-01-09");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
</style>
