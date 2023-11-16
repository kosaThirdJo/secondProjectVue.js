<template>
  <section class="frame-content">
  <div class="frame-content-title">
    <div class="content-title">
      <span class="content-title-text">이력 관리</span>
    </div>
  </div>
  <div class="frame-content-body">
      <input type="hidden" name="userId" v-model="myInfo.userId"/>
      <!-- 한줄 소개 -->
      <div class="frame-oneline">
        <span class="frame-oneline-titletext">나의 소개(한줄 소개)</span>
        <input
            class="input-oneline"
            type="text"
            name="aboutMe"
            v-model="myInfo.aboutMe"
            maxlength="30"
            placeholder="한줄로 간단하게 나를 소개해주세요" />
      </div>
      <!--이력관리-->
      <div class="frame-profilecontent">
        <span class="frame-profilecontent-titletext">이력관리</span>
        <textarea
            class="input-profilecontent"
            name="profileContent"
            v-model="myInfo.profileContent"
            placeholder="이력을 상세히 작성해주세요.&#13;&#10;작성예시&#13;&#10자격증/수료한 교육/프로젝트 경험">
        </textarea>
      </div>
      <div class="frame-bottom">
        <input @click="updateData()" id="submitbutton" class="button-submit"  value="수정하기"/>
      </div>
  </div>
  </section>
</template>

<script setup>
  import {onMounted, reactive, ref} from "vue";
  import axios from "axios";
  import {useRoute, useRouter} from "vue-router";
  import {api} from "../../common.js";

  const route = useRoute();//CompositionAPI 매칭된 라우트 (OptionAPI : this.$route)

  const getDataErr = reactive({});
  const myInfo = ref({
    "userId":"",
    "aboutMe" : "",
    "profileContent" : ""
  });

  function updateData(){
    api(
        "users/profile/"+route.params.user_id, "PATCH",
        {
          aboutMe: myInfo.value.aboutMe,
          profileContent: myInfo.value.profileContent
        })
        .then(response2 => {
          console.log(response2);
          alert("수정완료되었습니다.");
          window.location.reload();
          //this.$router.push("/users/profile/1");
        });
  }
 async function getData(){
    try {
      const response1 = await axios.get("http://localhost:8081/users/profile/"+route.params.user_id);
      myInfo.value = response1.data;
      console.log(myInfo.value);
    }catch (error){
      getDataErr.value =error;
      //console.log(getDataErr.value);
    }
  }
  onMounted(()=>{
    console.log("onmount");
    getData();
  });
</script>

<style src="../../assets/css/myprofile.css" scoped>

</style>