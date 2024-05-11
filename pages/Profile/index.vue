<script setup lang="ts">
definePageMeta({
    layout: "custom",
    middleware: "custom"
    // middleware: ['auth'] // If w want to add moer then one middleware
})

// const { sayHello } = useUtils()
// sayHello()

const { updateStore } = useStore()
</script>


<template>
    <div>
        <Alert />
        This is Profile Page
        <Profile />

        <button @click="updateStore('Hello World')">Update Store</button>
        <!-- <img src="~/assets/1.jpg" alt="" srcset=""> -->
        <img src="@/assets/1.jpg" alt="" srcset="">
    </div>
</template>