<script setup lang="ts">
import { type IProduct } from "../../types/products";
const id = useRoute().params.id;
const product = await $fetch<IProduct>(`/api/products/${id}`);
</script>

<template>
  <h1>Welcome to API Test</h1>
  <div>{{ id }}</div>
  <div class="card">
    <div class="title">{{ product.title }}</div>
    <div class="thumbnail">
      <img :src="product.image" alt="Product Image" />
    </div>
    <div class="description">{{ product.description }}</div>
    <div class="wrapper-meta">
      <span class="price">${{ product.price }}</span>
      <span class="rate">☆ {{ product.rating?.rate ?? "N/A" }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.thumbnail img {
  max-width: 100%;
  height: auto;
}
.description {
  margin-top: 8px;
  font-size: 14px;
}
.wrapper-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}
.price {
  font-size: 16px;
  color: #000;
}
.rate {
  font-size: 16px;
  color: #ffa500;
}
</style>
