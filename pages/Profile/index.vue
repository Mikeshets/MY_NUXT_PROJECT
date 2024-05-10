<script setup lang="ts">
definePageMeta({
    layout: "custom",
    middleware: "custom"
    // middleware: ['auth'] // If w want to add moer then one middleware
})
useSeoMeta({
    title: 'Profile',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: '/assets/1.jpg',
    twitterCard: 'summary_large_image',
})

// const { sayHello } = useUtils()
// sayHello()
</script>


<template>
    <div>
        <Alert />
        This is Profile Page
        <Profile />
        <!-- <img src="~/assets/1.jpg" alt="" srcset=""> -->
        <img src="@/assets/1.jpg" alt="" srcset="">
    </div>
</template>