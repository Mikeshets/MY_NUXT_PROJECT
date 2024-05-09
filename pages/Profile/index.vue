<script setup>
definePageMeta({
    layout:"custom",
})

const { sayHello } = useUtils()
sayHello()
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