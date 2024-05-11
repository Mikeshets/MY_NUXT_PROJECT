<script setup>
const taskStore = useCountStore();
const increment = taskStore.increment;
const decrement = taskStore.decrement;
const reset = taskStore.reset;
</script>

<template>
  <div>This is Pinia</div>
  <h2>Count: {{ taskStore.task }}</h2>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <button @click="reset">Reset</button>
</template>
