<template>
  <div v-if="!isLoading" id="profile" class="border border-dark">

  <section id="content_box">
    <div class="title-box">
      <span class="btn btn-primary" :style="{backgroundColor :(result.status===0) ? 'blue':'red'}" v-text="(result.status===0) ? '모집 중': '모집 완료'"></span>
      <h2 v-text="result.title" id="content_title" style="display: inline"> </h2>
      <button v-if="viewBtnApply&&(result.status===0)" class="btn btn-primary" id="show-modal" @click="showModal = true">신청 하기</button>
      <router-link v-if="viewBtnFix&&(result.status===0)" :to="'/meeting/fix/'+route.params.post_id" class="btn btn-primary" ><span>수정 하기
      </span></router-link>
      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false" :meeting-id="parseInt(route.params.post_id)">
          <template #header>
            <h3>custom header</h3>
          </template>
        </modal>
      </Teleport>

      <button v-if="viewBtnNowApplyInfo&&(result.status===0)" class="btn btn-primary" id="show-modal" @click="showValidModal = true">나의 신청 현황</button>
      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <apply-valid-modal :show="showValidModal" @close="showValidModal = false" :meeting-id="parseInt(route.params.post_id)" >
          <template #header>
            <h3>나의 신청 현황</h3>
          </template>
        </apply-valid-modal>
      </Teleport>
      <button v-if="viewBtnRemoveMeeting&&(result.status===0)" class="btn btn-primary" @click="removeMeeting()">삭제</button>
      <button v-if="viewBtnApplyCompleting&&(result.status===0)" class="btn btn-primary" @click="completeMeeting()">모집 완료</button>
      <button class="btn btn-primary" id="show-modal" @click="applicationStatus = true" v-if="viewBtnApplyList&&(result.status===0)">신청한 사람</button>
      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <apply-reason :show="applicationStatus" @close="applicationStatus = false" :meeting-id="parseInt(route.params.post_id)" >
          <template #header>
            <h3>신청한 사람</h3>
          </template>
        </apply-reason>
      </Teleport>
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
import {api, apiToken} from "@/common.js";
import Modal from '../../components/meeting/applyModal.vue'
import ApplyValidModal from "@/components/meeting/myApplyModal.vue";
import ApplyReason from "@/components/meeting/applyReasonModal.vue";


const viewBtnApplyCompleting = ref(true)
const viewBtnRemoveMeeting = ref(false)
const viewBtnApplyList = ref(false)
const viewBtnFix = ref(false)
const viewBtnApply = ref(false)
const viewBtnNowApplyInfo = ref(false)
const showModal = ref(false)
const showValidModal = ref(false)
const applicationStatus = ref(false)
const route = useRoute()
const router = useRouter()
const isLoading = ref(true);
const result = ref([])
const commentResult = ref([])


apiToken(
    "meeting/" +
    route.params.post_id,
    "GET", null,
    localStorage.getItem("jwtToken")
).then(response => {
  result.value = response
  isLoading.value = false;
  if (!localStorage.getItem("jwtToken")){
    return
  }
  if (response.loginId !== response.userId){
    // 신청 테이블 조회
    apiToken(
        "apply/check?meetingId=" + route.params.post_id,
        "GET",
        "",
        localStorage.getItem("jwtToken")
    ).catch(e => {
      console.log(e)
    }).then(response1 => {
          console.log(response1)
      if (response1){
        viewBtnNowApplyInfo.value = true
      } else {
        viewBtnApply.value = true
      }
        })


    return;
  }
  viewBtnRemoveMeeting.value = true
  viewBtnApplyList.value = true
  viewBtnFix.value = true
  console.log(response)

});
api(
    "comment/meeting/" +
    route.params.post_id,
    "GET", ""
).then(response => {
  commentResult.value = response.content
});
const commentInput = ref("")



function completeMeeting(){
  apiToken(
      "meeting",
      "PATCH", {
        "meetingId":route.params.post_id},
      localStorage.getItem("jwtToken")
  ).catch(() => {
        alert("모집 완료 실패")
        return
      }
  ).then(() => {
        alert("모집 완료 되었습니다.")
        router.go(-1)
      }
  )
}
function removeMeeting() {
  apiToken(
      "meeting/" + route.params.post_id,
      "DELETE",
      "",
      localStorage.getItem("jwtToken")
  ).catch( () => {
        alert("삭제 실패")
    return
      }
  ).then( () => {
        alert("삭제 되었습니다.")
        router.go(-1)
      }
  )

}
function writeComment(){
  if (!localStorage.getItem("jwtToken")){
    alert("로그인을 해 주세요")
    router.replace("/login")
    return ;
  }

  apiToken("comment/meeting/" + route.params.post_id,
      "POST",
      {
        meetingId:route.params.post_id,
        content: commentInput.value,
      },
      localStorage.getItem("jwtToken")
  )
  router.go(0)
}

// 신청한 사람 조회http://localhost:8081/apply/meeting?meetingId=30


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
