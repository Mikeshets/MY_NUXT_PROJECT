<script setup>
const route = useRoute();
// console.log( route.params.Id );
</script>

<template>
    <div>
        Profile Id: {{$route.params.Id}}
    </div>
</template>