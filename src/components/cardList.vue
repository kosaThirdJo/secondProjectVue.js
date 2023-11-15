<template>
  <div class="container">
    <card v-for="(resOne, i) in result" :key="i" :resOne="resOne"></card>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import Card from "./card.vue";
import {api} from "../common.js";

const req = {
  page:1,
  size:9,
  order:"desc",
  category:1,
  criteria:"creationDate"
}
const result = ref([]);
api(
    "http://localhost:8080/meeting?" +
    "page=" + req.page + "&" +
    "size=" + req.size + "&" +
    "order=" + req.order + "&" +  // '=' 추가
    "category=" + req.category + "&" +  // '=' 추가
    "criteria=" + req.criteria,
    "GET", ""
).then(response => {
  console.log(response)
  result.value = response.content;
});
defineProps({

})
</script>
