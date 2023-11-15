<style scoped src="./assets/css/home.css">
</style>

<template>
  <PageHeader></PageHeader>
  <router-view/>
  <PageFooter></PageFooter>
</template>

<script setup>
import PageHeader from "./components/TheHeader.vue";
import PageFooter from "./components/TheFooter.vue";
</script>

