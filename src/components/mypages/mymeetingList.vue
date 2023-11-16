<template>
  <section class="frame-content">
    <!-- 1. TITLE(내가 만든 모임) -->
    <div class="frame-mymeeting-title">
      <div class="mymeeting-title">
        <span class="mymeeting-title-text">내가 만든 모임</span>
      </div>
    </div>
    <!-- 2. CONTENT -->
    <div class="frame-mymeeting-body">
      <!-- 2.1. 카테고리(전체, 프로젝트, 스터디, 기타) 메뉴 -->
      <div class="search-filter">
        <ul class="search-categry">
          <li class="e-category">
            <button class="filter-button"
                    data-category="category"
                    value="all">전체</button>
          </li>
          <li class="e-category">
            <button class="filter-button"
                    data-category="category"
                    value="project">프로젝트</button>
          </li>
          <li class="e-category">
            <button class="filter-button"
                    data-category="category"
                    value="study">스터디</button>
          </li>
          <li class="e-category">
            <button class="filter-button"
                    data-category="category"
                    value="etc">기타</button>
          </li>
        </ul>
      </div><!-- 2.1.카테고리 메뉴 끝 -->
      <!-- 2.2. 목록 -->
      <div class="mymeeting-list-container">
        <!-- 2.2.1. 모집상태(전체, 모집중, 모집완료) 메뉴-->
        <div class="list-container-header">
          <ul class="search-filter-select">
            <li class="e-status">
              <button class="filter-button"
                      data-category="status"
                      value="all">전체</button>
            </li>
            <li class="e-status">
              <button class="filter-button"
                      data-category="status"
                      value="statusing">모집중</button>
            </li>
            <li class="e-status">
              <button class="filter-button"
                      data-category="status"
                      value="statused">모집완료</button>
            </li>
          </ul>
        </div>
        <!-- 2.2.2. 목록 -->
        <div class="list-container-body">
          <!-- 2.2.2.1. 조회 결과(meetingvoList)가 있을 경우 -->
          <mymeeting v-for="(data, idx) in resultList" :key="idx" :meetingone="data"></mymeeting>

          <!-- 2.2.2.2. 조회 결과(meetingvoList)가 없을 경우 -->

        </div><!-- 2.2.2. 목록 끝 -->
      </div><!-- 2.2. 목록 끝 -->
    </div><!--2.CONTENT 끝 -->
  </section>
</template>

<script setup>
import Mymeeting from "./mymeeting.vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute();
const resultList = ref([{
  "meetingId": "",
  "title": "",
  "category": "",
  "status": "",
  "applicationDeadline": "",
  "views": "",
  "recruitmentCount": "",
  "applicationCount": "",
  "location": "",
  "creationDate": "",
  "description": ""
}]);

//데이터 조회
async function getData(){
  try{
    const res = await axios.get("http://localhost:8081/users/mymeeting/"+route.params.user_id);
    resultList.value = res.data;
    console.log(resultList.value.length);
    //console.log(resultList.value[2].status);
  }catch (error){
    console.log(error);
  }
}
onMounted(()=>{
  console.log("mymeetingList onMount");
  getData();
})

</script>

<style src="../../assets/css/mymeetinglistView.css" scoped>

</style>