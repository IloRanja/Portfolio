<template>
    <div class="projet bg-gray-100 m-6 p-6">
        <p class="text-center font-bold">
            Mes projets
        </p>
        <div>
            <div class="grid md:grid-cols-3 gap-3">
                <div 
                v-for="(projet, index) in projects"
                key="index"
                class="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                    <h3>
                        {{ projet.title }}
                    </h3>
                    <p>
                        {{ projet.description }}
                    </p>
                    <p>
                        {{ projet.tech }}
                    </p>
                    <p>
                        {{ projet.link }}
                    </p>
                    <a
                    :href="projet.link"
                    class="block text-right text-blue-500 hover:underline"
                    >
                        Voir le projet →
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
  {
    title: "Portfolio Vue",
    description: "Création d'un site portfolio moderne",
    tech: "Vue.js, Tailwind",
    link: "#"
  },
  {
    title: "Module Odoo",
    description: "Développement d’un module personnalisé",
    tech: "Odoo, Python, PostgreSQL",
    link: "#"
  },
  {
    title: "App Web",
    description: "Application de gestion",
    tech: "Vue, API REST",
    link: "#"
  },
  {
    title: "App Web",
    description: "Application de gestion",
    tech: "Vue, API REST",
    link: "#"
  },
  {
    title: "App Web",
    description: "Application de gestion",
    tech: "Vue, API REST",
    link: "#"
  },
  {
    title: "App Web",
    description: "Application de gestion",
    tech: "Vue, API REST",
    link: "#"
  }
]
</script>