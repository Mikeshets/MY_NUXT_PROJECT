<script setup>
const nuxt = useNuxtApp()
console.log(nuxt)
</script>

<template>
    <header>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/Events">Events</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/Profile">Profile</nuxt-link>
            </li>
        </ul>
    </header>
    <div>  
        This Home Page
    </div>
</template>