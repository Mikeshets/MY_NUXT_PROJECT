<script setup lang="ts">
const { $sayHello } = useNuxtApp()
// console.log(useNuxtApp())
definePageMeta({
    // middleware:"custom-test"
})

</script>

<template>
    <div>
        <p>This is events</p>
        <!-- {{ $sayHello('Mikesh') }} -->
        <!-- <img src="~/assets/1.jpg" alt="" srcset=""> -->
        <!-- <img src="@/assets/1.jpg" alt="" srcset=""> -->
    </div>
</template>
