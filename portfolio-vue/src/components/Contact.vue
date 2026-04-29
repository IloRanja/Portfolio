<template>
    <div class="contact bg-gray-100 m-6 p-6">
        <p class="text-center">
            Me Contactez
        </p>
        <div class="flex flex-row gap-4 justify-center">
            <div class="justify-center item-center">
                <div>
                    RAMAROSANDY Elisoa<br/>
                    Développeur Web<br/>
                    N'hésitez pas à me contacter pour discuter de vos projets, ou autre je suis ouverte a tous les proposition<br/>
                    Me contacter par<br/>
                </div>
                <div class="flex items-center gap-2">
                    <PhoneCall class="w-6 h-6" />
                    <span>+261 32 21 385 95</span>
                </div>
                <div class="flex items-center gap-2">
                    <Mail class="w-6 h-6" />
                    <span>ramaruusou@gmail.com</span>
                </div>
                Whatsapp :+261 32 21 385 95<br/>
                Me suivre sur<br/>
            </div>
            <div>
                <div class="flex flex-col gap-2">
                    <label>Nom:</label>
                    <textarea class="border-2 border-black h-10 w-90"></textarea>
                </div>
                <div class="flex flex-col gap-2">
                    <label>E-mail:</label>
                    <textarea class="border-2 border-black h-10 w-90"></textarea>
                </div>
                <div class="flex flex-col gap-2">
                    <label>Sujet:</label>
                    <textarea class="border-2 border-black h-10 w-90"></textarea>
                </div>
                <div class="flex flex-col gap-2">
                    <label>Message:</label>
                    <textarea class="border-2 border-black h-30 w-90"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Home, User, Mail, Briefcase, PhoneCall } from 'lucide-vue-next'
</script>