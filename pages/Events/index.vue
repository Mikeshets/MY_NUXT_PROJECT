<script setup>
const { $sayHello } = useNuxtApp()
console.log(useNuxtApp())
</script>

<template>
    <div>
        <p>This is events</p>
        {{ $sayHello('Mikesh') }}
        <!-- <img src="~/assets/1.jpg" alt="" srcset=""> -->
        <!-- <img src="@/assets/1.jpg" alt="" srcset=""> -->
    </div>
</template>
