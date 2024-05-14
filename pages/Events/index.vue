<script setup lang="ts">
const sameState = useState("counter");
const { store } = useStore();
// const store = useState("store")

// const counter = useState('counter', () => "Lorem ipsum dolor sit amet")

const { $sayHello } = useNuxtApp();
// console.log(useNuxtApp())
definePageMeta({
  middleware:"custom"
});
</script>

<template>
  <div>
    <p>This is events</p>
    <p>Counter: {{ sameState }}</p>
    <p>Store: {{ store }}</p>
    <!-- <p>Counter: {{ counter }}</p> -->
    <!-- {{ $sayHello('Mikesh') }} -->
    <!-- <img src="~/assets/1.jpg" alt="" srcset=""> -->
    <!-- <img src="@/assets/1.jpg" alt="" srcset=""> -->
  </div>
</template>
