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
                    @click="chkCateSts()"
                    value="all"
                    :class="{activeCate: ischkC['all']}">전체</button>
          </li>
          <li class="e-category">
            <button class="filter-button"
                    data-category="category"
                    @click="chkCateSts()"
                    value="project"
                    :class="{activeCate: ischkC['project']}">프로젝트</button>
          </li>
          <li class="e-category">
            <button class="filter-button"
                    data-category="category"
                    @click="chkCateSts()"
                    value="study"
                    :class="{activeCate: ischkC['study']}">스터디</button>
          </li>
          <li class="e-category">
            <button class="filter-button"
                    data-category="category"
                    @click="chkCateSts()"
                    value="etc"
                    :class="{activeCate: ischkC['etc']}">기타</button>
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
                      @click="chkCateSts()"
                      value="all"
                      :class="{activeCate: ischkS['all']}">전체</button>
            </li>
            <li class="e-status">
              <button class="filter-button"
                      data-category="status"
                      @click="chkCateSts()"
                      value="statusing"
                      :class="{activeCate: ischkS['statusing']}">모집중</button>
            </li>
            <li class="e-status">
              <button class="filter-button"
                      data-category="status"
                      @click="chkCateSts()"
                      value="statused"
                      :class="{activeCate: ischkS['statused']}">모집완료</button>
            </li>
          </ul>
        </div>
        <!-- 2.2.2. 목록 -->
        <div class="list-container-body">
          <!-- 2.2.2.1. 조회 결과(meetingvoList)가 있을 경우 -->
          <div v-if="resultList.length>0">
            <mymeeting v-for="(data, idx) in resultList" :key="idx" :meetingone="data"></mymeeting>
          </div>
          <!-- 2.2.2.2. 조회 결과(meetingvoList)가 없을 경우 -->
          <div class="frame-errormsg" v-else> {{errorMsg}}</div>
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
import {api, apiToken} from "../../common.js";

const route = useRoute();
const resultList = ref([]);
//조건별 조회
const selectedFilters = ref({category: "all", status: "all"});
//조건별 조회(클래스 스타일 바인딩 )
const ischkC = ref({ all: false, project: false, study: false, etc: false });
const ischkS = ref({all: false, statusing: false, statused: false});
const errorMsg = ref("");
const token = localStorage.getItem("jwtToken");

function chkCateSts(){
  let targetBtn = event.target;
  let dataCategory = targetBtn.getAttribute("data-category");
  let dataValue = targetBtn.getAttribute("value");

  let computedstyle = window.getComputedStyle(targetBtn);
  let btnCss = computedstyle.color;

  if(dataCategory==="category"){
    selectedFilters.value.category = dataValue;
    for(let c in ischkC.value){
      ischkC.value[c] = false;
    }
    ischkC.value[dataValue] = true;
  }

  if(dataCategory !== selectedFilters.value.category){
    selectedFilters.value.status = "all";
    for(let s in ischkS.value){
      ischkS.value[s] = false;
    }
    ischkS.value['all'] = true;
  }
  if(dataCategory === "status"){
    selectedFilters.value.status = dataValue;
    for(let s in ischkS.value){
      ischkS.value[s] = false;
    }
    ischkS.value[dataValue] = true;
  }

  console.log(selectedFilters.value);
  apiToken(
      "users/mymeetingfilter?category="+selectedFilters.value.category+
      "&status="+selectedFilters.value.status, "GET", null, token)
      .then(response => {
        if(response instanceof Error){
          let errorRes = response;
          //에러처리
          //console.log(errorRes.response.data.message);
          errorMsg.value = errorRes.response.data.message;
          resultList.value = [];
        }else {
          //console.log(response);
          resultList.value = response;
        }
      });
}

//데이터 조회
async function getData(){
  try{
    const res = await axios.get("http://localhost:8081/users/mymeeting", {
      headers : {
        Authorization: token
      }
    });
    resultList.value = res.data;
    selectedFilters.value.category = 'all';
    selectedFilters.value.status = 'all';
  }catch (error){
    console.log(error);
    //console.log(error.response);
    errorMsg.value = error.response.data.message;
  }
}
onMounted(()=>{
  console.log("mymeetingList onMount");
  getData();
  /*
  apiToken("users/mymeeting", "GET", null, token)
      .then(res =>{
        if(res instanceof Error){
          console.log(res);
          let error = res;
          //console.log(error.response);
          errorMsg.value = error.response.data.message;
        }else{
          console.log(res);
          resultList.value = res.data;
          selectedFilters.value.category = 'all';
          selectedFilters.value.status = 'all';
        }
      })
  */
})
</script>

<style src="../../assets/css/mymeetinglistView.css" scoped>
.activeCate{
  color: #FF9F29;
}
</style>