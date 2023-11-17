<template>
  <div id="frame-all">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script setup>

import Sidebar from "../components/mypages/Sidebar.vue";

</script>

<style scoped>
  #frame-all{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1250px;
    margin: 10px;
    padding: 20px;
  }
  aside{
    width: 30%;
  }
  section{
    width: 90%;
  }
</style>