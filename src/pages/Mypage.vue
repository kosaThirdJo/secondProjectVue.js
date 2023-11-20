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
    width: 100%;
    margin: 10px;
    padding: 20px;

  }
  aside{
    width: 20%;
  }
  section{
    width: 80%;
  }
</style>