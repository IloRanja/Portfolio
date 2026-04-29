<template>
    <div class="content m-6 p-6 bg-gray-200">
        <div class="flex flex-row gap-4 justify-center py-6">
            <div class="intro py-38">
                <p>
                    Bienvenue dans mon monde <br/>
                    Bonjour, Je m'appelle <strong>RAMAROSANDY Elisoa</strong><br/>
                    Développeur Logiciel – <strong>JavaScript, Typescript, React, Vue, Node.js</strong> Avec <strong>3+ ans d'expérience</strong><br/>
                    Diplômé en Génie logiciel & Base de données à l'<strong>École Nationale de l'Informatique</strong>.
                </p>
                <p>
                    Passionné par le développement web et la création de solutions logicielles. Motivé à apprendre, progresser et résoudre des problèmes réels.
                </p>
            </div>
            <div class="profil py-29">
                <img src="@/assets/profil.jpg" alt="RAMAROSANDY Elisoa" class="w-60 h-60 rounded-full object-cover border-2 border-blue-500" >
            </div>
            <!-- <div class="small-profil py-40">
                <img src="@/assets/profil.jpg" alt="RAMAROSANDY Elisoa" class="w-30 h-30 rounded-full object-cover border-2 border-blue-500" >
            </div> -->
        </div>
        <div class="flex flex-row gap-4 ps-90">
            <button class="bg-gray-300 hover:bg-gray-500 p-2 rounded-lg">Me contacter</button>
            <button class="bg-gray-300 hover:bg-gray-500 p-2 rounded-lg">
                <div class="flex items-center gap-2">
                    <Download class="w-4 h-4"/>
                    <span>Telecharger mon CV</span>
                </div> 
            </button>
        </div>
        <div class="text-center ">
            <button class="bg-gray-500 p-2 rounded-[90px]">|</button>
        </div>
    </div>
</template>

<script setup>
import { Home, User, Mail, Briefcase, Download } from 'lucide-vue-next'
</script>