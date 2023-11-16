<style scoped>
.container {
  display:flex;
  flex-flow: row wrap;
  gap: 5px;
}
</style>
<template>
  <div class="container">
    <card v-for="(resOne, i) in result" :key="i" :resOne="resOne"></card>
  </div>
  <a href="/meeting/write" class="btn btn-primary" style="background-color: #FF9F29; color: white; margin-top: 30px;"> 새 글 작성</a>
  <div class="container mt-5">
    <nav aria-label="Page navigation example" style="margin: auto">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">이전</a></li>
        <li class="page-item"  v-for="(content,idx) in page">
          <a class="page-link" href="#" v-text="content"></a>
        </li>
        <li class="page-item"><a class="page-link" href="#">다음</a></li>
      </ul>
    </nav>
  </div>

  <div>

  </div>
</template>

<script setup>

import { ref } from 'vue'
import Card from "./card.vue";
import {api} from "../common.js";
const url = "/meeting";
const req = {
  page:1,
  size:9,
  order:"desc",
  category: 1,
  criteria:"creationDate"
}
const result = ref([]);
const page = ref(0);
api(
    "http://localhost:8081/meeting?" +
    "page=" + req.page + "&" +
    "size=" + req.size + "&" +
    "order=" + req.order + "&" +  // '=' 추가
    "criteria=" + req.criteria
    + ((req.category) ? "&category=" + req.category : ""),
    "GET", null
).then(response => {
  page.value = response.totalPages;
  result.value = response.content;
});
defineProps({

})
</script>
