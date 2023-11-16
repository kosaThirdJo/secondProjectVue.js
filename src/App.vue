<style scoped src="./assets/css/home.css">
</style>

<template>
  <PageHeader></PageHeader>
  <router-view/>
  <PageFooter></PageFooter>
<!--  <router-link to="/">홈</router-link>
  <router-link to="/meeting"> 미팅 페이지 </router-link>
  <router-link to="/meeting/1"> 디테일 </router-link>
  <router-link to="/meeting/write"> 폼 테스트 </router-link>
  <router-link to="/meeting"> 테스트 </router-link>
  <router-link to="/users/profile/1">마이페이지</router-link>
  <router-view />-->
</template>

<script setup>
import PageHeader from "./components/TheHeader.vue";
import PageFooter from "./components/TheFooter.vue";
</script>

