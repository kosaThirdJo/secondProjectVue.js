
<style scoped>
.container {
  display:flex;
  flex-flow: row wrap;
  gap: 5px;
}

</style>

<template>
  <router-link to="/">홈</router-link>
  <router-link to="/meeting"> 미팅 페이지 </router-link>
  <router-link to="/meeting/1"> 디테일 </router-link>
  <router-link to="/meeting"> 테스트 </router-link>
  <router-view />
</template>

<script setup>


</script>

