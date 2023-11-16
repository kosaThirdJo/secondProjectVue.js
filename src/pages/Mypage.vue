<template>
  <div id="frame-all">
    <Sidebar></Sidebar>
    <router-view></router-view>
<!--    <Myprofile></Myprofile>-->
<!--    <router-view name="myprofile"/>
    <router-view name="mymeetinglist"/>-->
  </div>
</template>
<script setup>

import Sidebar from "../components/mypages/Sidebar.vue";
import Myprofile from "../components/mypages/myprofile.vue";
import MymeetingList from "../components/mypages/mymeetingList.vue";

const mypateRoutes = []
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