<template>
  <div v-if="!isLoading" id="profile" class="border border-dark">

  <section id="content_box">
    <div class="title-box">
      <span class="btn btn-primary">모집중</span>
      <h2 v-text="result.title" id="content_title" style="display: inline"> </h2>
      <span class="btn btn-primary" style="float: right">신청하기</span>
    </div>
    <div class="view-box">
      <span></span>
      <span> 조회수 </span>
      <span v-text="result.views"></span>
    </div>
    <div v-text="result.description" id="content_description" class="main-content-box">
    </div>
    <div id="end_date_line">
      <span>마감일 </span>
      <span v-text="result.applicationDeadline"></span>
    </div>
    <div id="location">
      <span> 위치 </span>
      <span v-text="result.location"></span>
    </div>
  </section>
  <section id="comment_box">
    <div>댓글 <span v-text="commentResult.length" style="color: #1A4D2E"></span>
    </div>
    <div id="comment_input_line">
      <input id="comment_input" v-model="commentInput" @keyup.enter="writeComment()" class="mt-2 mb-2" type="text" name="commentContent" placeholder=" 댓글을 작성해 보세요">
      <span id="comment_button" class="btn btn-primary mr-3" @click="writeComment()">등록</span>
      </div>
    <div class="main-content-container">
      <div class="comment_list" v-for="(commentEle,commentIdx) in commentResult">
        <div id="comment_title" v-text="commentEle.userNickName"></div>
        <div v-text="commentEle.content"></div>
        <div v-text="commentEle.creationDate"></div>
      </div>
    </div>
  </section>
  </div>
    <div v-else>
    <!-- 로딩 중에 표시할 스피너나 메시지를 추가할 수 있습니다 -->
    로딩 중...
  </div>
</template>
<script setup>

import { ref, watch } from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {api} from "../../common.js";


const route = useRoute()
const router = useRouter()
const isLoading = ref(true);
const result = ref([])
const commentResult = ref([])
api(
    "meeting/" +
    route.params.post_id,
    "GET", null
).then(response => {
  result.value = response
  isLoading.value = false;

});
api(
    "comment/meeting/" +
    route.params.post_id,
    "GET", ""
).then(response => {
  commentResult.value = response.content
  isLoading.value = false;
  console.log(commentResult)
});
const commentInput = ref("")

function writeComment(){

  api("comment/meeting/" + route.params.post_id,
      "POST",
      {
        userId:1,
        meetingId:route.params.post_id,
        content: commentInput.value
      }
  )
  router.go(0)
}


</script>



<style scoped>
  section{
    text-align: left;
    margin: 10px;
  }

  #comment_button{
    float: right;
  }
  #comment_input{
    width: 90%;
  }
  .comment_list{
    background-color: antiquewhite;
    margin-bottom: 10px;
  }

</style>
<!--
<style src="../css/meeting/meeting_home.css" scoped>
<style src="../assets/css/meeting/meeting_home.css" scoped>
</style>
<style src="../../assets/css/meeting/meeting_article.css" scoped>
</style>
<style src="../../assets/css/home.css" scoped>
</style>
<style src="../css/home.css" scoped>
</style>-->
