<template>
  <div>
    <h1>Welcome to Test</h1>
    <div v-for="product in productsList" :key="product.id" class="card">
      <div class="title">{{ product.title }}</div>
      <div class="thumbnail"><img :src="product.image" /></div>
      <div class="description">{{ product.description }}</div>
      <div class="wrapper-meta">
        <span class="price">${{ product.price }}</span>
        <span class="rate">☆ {{ product.rating.rate }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp();

const {
  data: productsList,
  pending,
  error,
} = await $api.products.getProducts();

// console.log(toRaw(productsList.value));
</script>
