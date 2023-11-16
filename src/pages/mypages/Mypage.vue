<template>
  <div id="frame-all">
    <Sidebar></Sidebar>
    <Myprofile></Myprofile>
  </div>
</template>
<script setup>

import Sidebar from "../../components/Sidebar.vue";
import Myprofile from "./Myprofile.vue";

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
  Sidebar{
    max-width: 100px;
  }
  Myprofile{
    width: 100%;
  }
</style>