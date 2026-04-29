<template>
    <div class="competence m-6 p-6 bg-gray-100">
        <p class="text-center">
            Competences Technique
        </p>
        <div class="flex flex-col gap-4 justify-center items-center mt-4">
            <div class="flex flex-row gap-6">  
                <div class="p-2 bg-white me-2 w-50 rounded shadow-lg w-100">
                    <div class="flex items-center gap-2">
                        <AppWindow class="w-6 h-6" />
                        <span>Frontend</span>
                    </div>
                    <p>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">Vue.js</button>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">Javascript</button>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">HTML/CSS</button>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">Vue.js</button>
                    </p>
                </div>
                <div class="p-2 bg-white me-2 w-50 rounded shadow-lg w-100">
                    <div class="flex items-center gap-2">
                        <Code class="w-6 h-6" />
                        <span>Backend</span>
                    </div>
                    <p>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">Python</button>
                    </p>
                </div>
            </div>
            <div class="flex flex-row gap-6 ">  
                <div class="p-2 bg-white me-2 w-50 rounded shadow-lg w-100">
                    <div class="flex items-center gap-2">
                        <Database class="w-6 h-6" />
                        <span>Base de données</span>
                    </div>
                    <p>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">MySQL</button>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">PosteGreSQL</button>
                    </p>
                    
                </div>
                <div class="p-2 bg-white me-2 w-50 rounded shadow-lg w-100">
                    <div class="flex items-center gap-2">
                        <Palette class="w-6 h-6" />
                        <span>Design</span>
                    </div>
                    <p>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">Photoshop</button>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">Illustrator</button>
                    </p>
                </div>
            </div>
            <div class="flex flex-row gap-6">  
                <div class="p-2 bg-white me-2 w-50 rounded shadow-lg w-100">
                    <div class="flex items-center gap-2">
                        <Workflow class="w-6 h-6" />
                        <span>Methodologies</span>
                    </div>
                    <p>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">Agile</button>
                    </p>
                </div>
                <div class="p-2 bg-white me-2 w-50 rounded shadow-lg w-100">
                    <div class="flex items-center gap-2">
                        <Wrench class="w-6 h-6" />
                        <span>Outils</span>
                    </div>
                    <p>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">VS Code</button>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">PyCharme</button>
                        <button class="rounded bg-gray-500 p-1 me-4 text-white">Git/Github/GitLab</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { AppWindow, Code, Database, Palette, Workflow, Wrench } from 'lucide-vue-next'
</script>