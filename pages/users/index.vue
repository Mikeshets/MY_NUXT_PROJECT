<template>
  <div>
    <p>Users</p>
    <div v-for="user in usersList" :key="user.id">
      <p v-if="user"><strong>ID:</strong> {{ user.id }}</p>
      <p v-if="user"><strong>Email:</strong> {{ user.email }}</p>
      <p v-if="user"><strong>Username:</strong> {{ user.username }}</p>
      <p v-if="user"><strong>Password:</strong> {{ user.password }}</p>
      <p v-if="user">
        <strong>Name:</strong> {{ user.name.firstname }}
        {{ user.name.lastname }}
      </p>
      <p v-if="user">
        <strong>Address:</strong> {{ user.address.number }}
        {{ user.address.street }}, {{ user.address.city }},
        {{ user.address.zipcode }}
      </p>
      <p v-if="user">
        <strong>Geolocation:</strong> Lat: {{ user.address.geolocation.lat }},
        Long: {{ user.address.geolocation.long }}
      </p>
      <p v-if="user"><strong>Phone:</strong> {{ user.phone }}</p>
      <br />
    </div>
  </div>
</template>

<script setup>
const { $api } = useNuxtApp();

const { data: usersList, pending, error } = await $api.users.getUsers();

console.log(toRaw(pending.value));

// console.log(toRaw(usersList.value));
</script>
