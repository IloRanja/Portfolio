<template>
    <div class="content m-1 p-1 bg-gray-200">
        <div class="flex flex-row gap-4 justify-center">
            <div class="intro py-38" style="margin-right:100px;">
                <p class="text-xl">
                    Bienvenue dans mon monde <br/>
                    Bonjour, Je me presente <strong>RAMAROSANDY Elisoa</strong><br/>
                    Développeur web – <strong>JavaScript, Typescript, Vue, Python, MySQL, PosteGreSQL</strong> Avec <strong>3+ ans d'expérience</strong><br/>
                    Diplômé en Electronique Informatique à l'<strong>Université d'Antananarivo</strong>.
                </p>
                <p>
                    Passionné par le développement et la création, motivé à apprendre, progresser et résoudre des problèmes réels.
                </p>
            </div>
            <div class="profil py-29">
                <DotLottieVue
                    style="height: 300px; width: 300px" autoplay loop src="/Developer.json"
                />
            </div>
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
        <div class="ps-250">
           <DotLottieVue class="m-0 p-0" style="height: 200px; width: 200px" autoplay loop src="/rotation.json" />
        </div>
    </div>
</template>

<script setup>
import { Home, User, Mail, Briefcase, Download } from 'lucide-vue-next'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>