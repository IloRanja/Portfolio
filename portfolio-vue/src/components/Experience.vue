<template>
    <div class="experience bg-gray-100 m-6 p-6">
        <p class="text-center">
            Mes experiences
        </p>
        <div class="relative max-w-4xl mx-auto p-6">

            <!-- Ligne centrale -->
            <div class="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"></div>

            <div
            v-for="(item, index) in experiences"
            :key="index"
            class="mb-4 flex items-center w-full"
            >

            <!-- Gauche -->
            <div
                class="w-1/2 pr-8"
                :class="index % 2 !== 0 ? 'invisible' : 'text-right'"
            >
                <div class="bg-white p-4 rounded-lg shadow">
                <p class="text-sm text-gray-500">{{ item.date }}</p>
                <h3 class="font-bold">{{ item.title }}</h3>
                <p class="text-gray-600">{{ item.description }}</p>
                </div>
            </div>

            <!-- 🔵 POINT SUR LA LIGNE -->
            <div class="absolute left-1/2 -translate-x-1/2">
                <div class="w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
            </div>

            <!-- Droite -->
            <div
                class="w-1/2 pl-8"
                :class="index % 2 === 0 ? 'invisible' : ''"
            >
                <div class="bg-white p-4 rounded-lg shadow">
                <p class="text-sm text-gray-500">{{ item.date }}</p>
                <h3 class="font-bold">{{ item.title }}</h3>
                <p class="text-gray-600">{{ item.description }}</p>
                </div>
            </div>

            </div>

        </div>
    </div>    
</template>

<script setup>
const experiences = [
  {
    date: "2024",
    title: "Développeur Odoo",
    description: "Création de modules Odoo et automatisation"
  },
  {
    date: "2023",
    title: "Stage Développement",
    description: "Création d'applications web"
  },
  {
    date: "2022",
    title: "Études Informatique",
    description: "Formation en développement"
  }
]
</script>