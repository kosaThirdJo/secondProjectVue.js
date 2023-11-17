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
        <li class="page-item"><span class="page-link" href="#">이전</span></li>
        <li class="page-item"  v-for="(content,idx) in page">
          <span class="page-link" v-text="content" @click="changePage(idx)"></span>
        </li>
        <li class="page-item"><span class="page-link" href="#">다음</span></li>
      </ul>
    </nav>
  </div>

  <div>

  </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import Card from "./card.vue";
import {api} from "../../common.js";
import {onBeforeRouteUpdate, useRoute} from "vue-router";

const req = ref({
  page:(useRoute().query.page!== undefined) ? useRoute().query.page: 0,
  size:(useRoute().query.size!== undefined) ? useRoute().query.size: 9,
  order:(useRoute().query.order!== undefined) ? useRoute().query.order: "desc",
  category: (useRoute().query.category!== undefined) ? useRoute().query.category: null,
  criteria:(useRoute().query.criteria!== undefined) ? useRoute().query.criteria: "creationDate"
})
getPage()

const route = useRoute();
watch(() => route.query.category, (newCategory) => {
  req.value.page = 0;
  req.value.category = newCategory;
  getPage()
})

const result = ref({});
const page = ref(0);
function changePage(newPage) {
  req.value.page = newPage;
  getPage()
}

async function getPage() {
  console.log(req.value.page)
  console.log("meeting?" +
      "page=" + req.value.page + "&" +
      "size=" + req.value.size + "&" +
      "order=" + req.value.order + "&" +  // '=' 추가
      "criteria=" + req.value.criteria
      + ((req.value.category) ? "&category=" + req.value.category : ""))
   api(
      "meeting?" +
      "page=" + req.value.page + "&" +
      "size=" + req.value.size + "&" +
      "order=" + req.value.order + "&" +  // '=' 추가
      "criteria=" + req.value.criteria
      + ((req.value.category) ? "&category=" + req.value.category : ""),
      "GET", null
  ).then(response => {

    console.log(response)
     result.value = response.content
    return response.totalPages;
  }).then(totalPage =>{
     page.value = totalPage;
   });
}

</script>
