<template>
  <aside>
    <div class="frame-profileinfo">
      <div class="frame-profile">
        <img class="profile-img"
              :src="myInfo.profilePhoto"
             alt="Image"/><br/>
        <span class="text-nickname" v-text="myInfo.nickname"></span>
        <span class="text-email" v-text="myInfo.email"></span>
        <div class="frame-img-button">
          <label class="input-file-button" for="inputImgFile">사진 변경</label>
          <input
              type="file"
              id="inputImgFile"
              name="profilePhoto"
              accept=".jpg, .png"
              @change="previewImg"
              required/>
          <input
              id="updateimg"
              class="input-submit"
              type="button"
              @click="uploadProfileImg()"
              value="변경 저장"/>
        </div>
      </div>
    </div>
    <div class="frame-sidemenu">
      <div class="frame-sidemenu-home">
        <span class="frame-sidemenu-title">내 정보 관리</span>
        <div>
          <ul>
            <li class="side-menu-li">
              <router-link class="sidemenu-a" to="/users/profile/1">이력 관리</router-link>
            </li>
            <li class="side-menu-li">
              <router-link class="sidemenu-a" to="">개인 정보 수정</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="frame-sidemenu-meeting">
        <span class="frame-sidemenu-title">모임</span>
        <div>
          <ul>
            <li class="side-menu-li">
              <router-link class="sidemenu-a" to="">내가 만든 모임</router-link>
            </li>
            <li class="side-menu-li">
              <router-link class="sidemenu-a" to="">내가 참여한 모임</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue';
import axios from "axios";
import {useRoute} from "vue-router";

const route = useRoute();//CompositionAPI 매칭된 라우트 (OptionAPI : this.$route)

const getDataErr = reactive({});
const myInfo = ref({
  "userId":"",
  "aboutMe" : "",
  "nickname" : "",
  "email" : "",
  "profilePhoto" : ""
});

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
  console.log("sidebar onmount");
  getData();
});
let encodeImg = ref(null);

const previewImg = (event) => {
  let input = event.target;
  let reader = new FileReader();

  reader.onload = () => {
    encodeImg.value = reader.result;
    document.getElementById('updateimg').style.display='block';
  };
  reader.readAsDataURL(input.files[0]);
};
  // 프로필 이미지 업로드
  function uploadProfileImg(){
    
  }

</script>

<style src="../assets/css/sidebar.css" scoped>

</style>