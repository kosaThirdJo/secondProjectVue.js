<template>
  <div id="profile" class="border border-dark">
  </div>
  <section id="content_box">
    <div>
      <span class="badge bg-secondary">모집중</span>
      <h2 v-text="result.title" id="content_title" style="display: inline"> </h2>
      <span class="badge bg-secondary" style="float: right">신청하기</span>
    </div>
    <div>
      <span style="margin-left: 10px"></span>
      <span> 조회수 </span>
      <span>2</span>
    </div>
    <div v-text="'내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.' +
     ''" id="content_description" class="main-content-container">
    </div>
    <div id="end_date_line">
      <span>마감일 </span>
      <span>2</span>
    </div>
    <div id="location">
      <span v-text="location"></span>
    </div>
  </section>
  <section id="comment_box">
    <div>댓글 <span style="color: #1A4D2E"></span>
    </div>
    <div id="comment_input_line">
      <form onsubmit="return false" method=post>
        <input type="hidden" name="commentUserName">
        <input id="comment_input" type="text" name="commentContent" placeholder=" 댓글을 작성해 보세요" size=80% maxlength=8>
        <span id="comment_button" class="btn btn-primary">등록</span>
      </form>
    </div>
    <div class="main-content-container">
      <div id="comment_list">
        <div id="comment_title"></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </section>
</template>
<script setup>

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {api} from "../common.js";


const route = useRoute()
console.log(route.params.post_id)
const result = ref({
  "userNickname":"닉네임",
  "title":"제목입니다."
    }
)
api(
    "http://localhost:8081/meeting/" +
    route.params.post_id,
    "GET", ""
).then(response => {
  result.value = response
  console.log(result.value)
});

console.log(result.value.userNickname)


</script>



<style scoped>
body {
  padding-top: 75px;
  padding-bottom: 75px;
  /* 생략 */
}
font{
  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
}
.nanumgothic * {
  font-family: 'Nanum Gothic', sans-serif;
}
#profile{
  float: right;
  background-color: #FAF3E3;
  width: 300px;
  height: 200px;
  margin-right: 50px;
  margin-top: 50px;
}
#content_box {
  width: 800px;
  padding: 5px 5px 5px 5px;
}
#content_title{
  margin-top: 20px;
  margin-bottom: 20px;
}
#content_description{
  margin-top: 20px;
  margin-bottom: 20px;
}
#comment_box {
  background-color: #FAF3E3;
  width: 800px;
  padding: 20px 20px 20px 20px;
}
#comment_input_line{
  margin: 5px 5px 5px ;
}
#comment_input{
  text-align: left;
  width: 80%;
  outline: none;
  border-radius: 10px;
  border:none;
}

#comment_list{
  padding-top: 10px;
  padding-left: 10px;
  background-color: white;
  margin-bottom: 5px;
}
#comment_title{
  margin-top: 5px;
  margin-left: 5px;
}
article{
  margin-left: 200px;
}

header {
  background-color: green;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

</style>
<style src="../assets/css/meeting/meeting_home.css" scoped>
</style>
<style src="../assets/css/meeting/meeting_article.css" scoped>
</style>
<style src="../assets/css/home.css" scoped>
</style>