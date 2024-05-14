<template>
  <h1>Products list</h1>
  <div 
    v-if="pending"
    class="spinner-wrapper"
  >
    <span class="loader"></span>
  </div>
  <div 
    v-else
    class="product-wrapper"
  >

  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp();

const {
    data: productsList,
    pending,
    error
  } = await $api.products.getProducts();
</script>
