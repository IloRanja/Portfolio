<template>
    <div class="bg-gray-100 m-6 p-6">
        <p class="text-center font-bold">
            Mes Etudes
        </p>
        <div class="relative max-w-4xl mx-auto p-1">
            <div class="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"></div>
            <div 
            v-for="(etude, index) in education"
            key="index"
            class="mb-4 flex items-center w-full">

                <div 
                class="w-1/2 pr-8 bg-white shadow p-3 rounded-lg mr-8"
                :class="index % 2 !== 0 ? 'invisible' : 'text-right'">
                    <p class="text-xs text-gray-500">
                        {{ etude.annee }}
                    </p>
                    <p class="font-semibold">
                        {{ etude.diplome }}
                    </p>
                    <span class="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {{ etude.nom }}
                    </span>
                </div>

                <div class="absolute left-1/2 -translate-x-1/2">
                    <div class="w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                </div>

                <div 
                class="w-1/2 pl-2 bg-white shadow p-3 rounded-lg"
                :class="index % 2 == 0 ? 'invisible' : 'text-right'">
                    <p class="text-xs text-gray-500">
                        {{ etude.annee }}
                    </p>
                    <p class="font-semibold">
                        {{ etude.diplome }}
                    </p>
                    <span class="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {{ etude.nom }}
                    </span>
                </div>
            </div>
        </div>

        

        <!-- <div 
        v-for="(etude, index) in education"
        key="index"
        class="flex flex-wrap gap-4">

            

            <div class="bg-white shadow p-4 rounded-lg">
                <p class="text-xs text-gray-500">
                    {{ etude.annee }}
                </p>
                <p class="font-semibold">
                    {{ etude.diplome }}
                </p>
                <span class="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {{ etude.nom }}
                </span>
            </div>
        </div> -->
        <!-- <div class="space-y-4">
            <div>
                <p class="font-semibold">Licence Informatique</p>
                <div class="w-full bg-gray-200 h-2 rounded">
                <div class="bg-blue-500 h-2 w-4/5 rounded"></div>
                </div>
            </div>

            <div>
                <p class="font-semibold">Bac Scientifique</p>
                <div class="w-full bg-gray-200 h-2 rounded">
                <div class="bg-green-500 h-2 w-full rounded"></div>
                </div>
            </div>

            </div> -->
        </div>
</template>

<script setup>
const education= [
    {
        annee:'2015',
        diplome:"Licence",
        nom: "Université d'Antananarivo"
    },
    {
        annee:'2015',
        diplome: "Electronique info",
        nom: "Université d'Antananarivo"
    },
    {
        annee:'2015',
        diplome: "Electronique info",
        nom: "Université d'Antananarivo"
    },
    {
        annee:'2015',
        diplome: "Electronique info",
        nom: "Université d'Antananarivo"
    },
    {
        annee:'2015',
        diplome: "Electronique info",
        nom: "Université d'Antananarivo"
    },
    {
        annee:'2015',
        diplome: "Electronique info",
        nom: "Université d'Antananarivo"
    },
    {
        annee:'2015',
        diplome: "Electronique info",
        nom: "Université d'Antananarivo"
    }
]
</script>