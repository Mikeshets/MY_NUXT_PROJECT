<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <div class="flex gap-2 my-4">
      <v-btn variant="outlined" @click="counter += 10"> Increment </v-btn>
      <v-btn variant="outlined" @click="counter -= 10"> Decrement </v-btn>
    </div>
  </div>
</template>
