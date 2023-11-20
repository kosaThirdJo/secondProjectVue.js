<template>
  <section>
    <div class="myinfoframe-content-title">
      <div class="myinfocontent-title">
        <span class="myinfocontent-title-text">개인정보 수정</span>
      </div>
    </div>
    <div class="myinfo-content">
      <div id="updateInfoForm">
        <input type="hidden" name="userId"/>
        <div class="myinfo-input">
          <!--  01-01 비밀번호  -->
          <div class="myinfo-password">
            <span class="myinfo-text017"><span>비밀번호</span></span>
            <input
                v-model="myInfo.password"
                type="password"
                name="password"
                placeholder="최소 6자 이상(알파벳, 숫자 필수)"
                class="myinfo-input2"
                minlength="6"
                required />
            <div class="sign-up-form-input-check-alert" id="checkPassword">
              <span></span>
            </div>
          </div>
          <!--  01-02 이메일  -->
          <div class="myinfo-email">
            <span class="myinfo-text017"><span>이메일</span></span>
            <input
                type="email"
                name="email"
                v-model="myInfo.email"
                placeholder="honggildong@select.com"
                class="myinfo-input3" />
            <div class="sign-up-form-input-check-alert" id="checkEmail">
              <span></span>
            </div>
          </div>
          <!--  01-03 닉네임  -->
          <div class="myinfo-nickname">
            <span class="myinfo-text017"><span>닉네임</span></span>
            <div class="myinfo-nickname-content">
              <input
                  id="inputNickname"
                  type="text"
                  name="nickname"
                  v-model="myInfo.nickname"
                  placeholder="닉네임을 알파벳, 한글, 숫자를 20자 이하로 입력해주세요."
                  class="myinfo-input4"
                  required />
              <div class="sign-up-form-input-check-alert" id="checkNickname">
                <span></span>
              </div>
            </div>
          </div>
          <div id="showResult"></div>
          <!--  01-04 지역1 -->
          <div class="myinfo-location">
            <span class="myinfo-text017"><span>지역1</span></span>
            <div class="myinfo-location-content">
              <input
                  v-model="myInfo.location1"
                  type="text" name="location1" placeholder="현재 지역을 인증해주세요."
                  class="myinfo-input5" id="locationInput1" readonly />
              <button @click.prevent="getLocation()" class="myinfo-location1btnbutton">
                <span class="myinfo-text025"><span>지역 인증</span></span>
              </button>
              <div class="sign-up-form-input-check-alert" id="checkLocation">
                <span></span>
              </div>
            </div>
          </div>
          <!--  01-05 지역 2  -->
          <div class="myinfo-location">
            <span class="myinfo-text017"><span>지역2</span></span>
            <div class="myinfo-location-content">
              <input
                  v-model="myInfo.location2"
                  type="text" name="location2" placeholder="현재 지역을 인증해주세요."
                  class="myinfo-input5" id="locationInput2" readonly />
              <button type="button" class="myinfo-location2btnbutton">
                <span class="myinfo-text025"><span>지역 인증</span></span>
              </button>
              <div class="sign-up-form-input-check-alert" id="checkLocation2">
                <span></span>
              </div>
            </div>
          </div>
          <!--  01-06 관심 분야  -->
          <div class="myinfo-form-input-box">
            <span class="myinfo-form-input-box-title"><span>관심 분야</span></span>
            <div class="myinfo-form-input-box-content" style="padding-bottom: 10px;">
              <!--  01-06-01 언어  -->
              <div class="myinfo-form-select-interest">
                <span class="myinfo-form-select-interest-title">Language</span>
                <div class="myinfo-form-select-interest-button">
                  <input type="hidden" name="interestLanguage" id="selected-interests-lang" >
                  <button type="button" class="myinfo-interest-lang-btn" value="1">Java</button>
                  <button type="button"  class="myinfo-interest-lang-btn" value="2">Python</button>
                  <button type="button"  class="myinfo-interest-lang-btn" value="3">C#</button>
                  <button type="button"  class="myinfo-interest-lang-btn" value="4">C++</button>
                  <button type="button"  class="myinfo-interest-lang-btn" value="5">JavaScript</button>
                  <button type="button"  class="myinfo-interest-lang-btn" value="6">Ruby</button>
                  <button type="button"  class="myinfo-interest-lang-btn" value="7">Swift</button>
                  <button type="button"  class="myinfo-interest-lang-btn" value="8">TypeScript</button>
                  <button type="button"  class="myinfo-interest-lang-btn" value="9">PHP</button>
                </div>
              </div>

              <!--  01-06-02 프레임워크  -->
              <div class="myinfo-form-select-interest">
                <span class="myinfo-form-select-interest-title">Framework</span>
                <div class="myinfo-form-select-interest-button">
                  <input type="hidden" name="interestFramework" id="selected-interests-fw" >
                  <button type="button" class="myinfo-interest-fw-btn" value="1">Spring</button>
                  <button type="button"  class="myinfo-interest-fw-btn" value="2">React</button>
                  <button type="button"  class="myinfo-interest-fw-btn" value="3">Angular</button>
                  <button type="button"  class="myinfo-interest-fw-btn" value="4">Vue.js</button>
                  <button type="button"  class="myinfo-interest-fw-btn" value="5">Express.js</button>
                  <button type="button"  class="myinfo-interest-fw-btn" value="6">Django</button>
                  <button type="button"  class="myinfo-interest-fw-btn" value="7">Ruby on Rails</button>
                  <button type="button"  class="myinfo-interest-fw-btn" value="8">Flask</button>
                  <button type="button"  class="myinfo-interest-fw-btn" value="9">Laravel</button>
                </div>
              </div>

              <!--  01-06-03 직무  -->
              <div class="myinfo-form-select-interest">
                <span class="myinfo-form-select-interest-title">Role</span>
                <div class="myinfo-form-select-interest-button">
                  <input type="hidden" name="interestJob" id="selected-interests-job">
                  <button type="button" class="myinfo-interest-job-btn" value="1">프론트엔드</button>
                  <button type="button"  class="myinfo-interest-job-btn" value="2">백엔드</button>
                  <button type="button"  class="myinfo-interest-job-btn" value="3">풀스택</button>
                  <button type="button"  class="myinfo-interest-job-btn" value="4">모바일 앱 개발</button>
                  <button type="button"  class="myinfo-interest-job-btn" value="5">게임 개발</button>
                  <button type="button"  class="myinfo-interest-job-btn" value="6">데이터베이스</button>
                  <button type="button"  class="myinfo-interest-job-btn" value="7">데브옵스</button>
                  <button type="button"  class="myinfo-interest-job-btn" value="8">디자이너</button>
                  <button type="button"  class="myinfo-interest-job-btn" value="9">기획자</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-bottom">
          <div class="myinfo-updatebtn"><a href="#" onclick="submitupdateInfoForm()">수정</a></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import axios from "axios";
  import {onMounted, reactive, ref, watch} from "vue";
  import {useRoute} from "vue-router";

  const route = useRoute();//CompositionAPI 매칭된 라우트 (OptionAPI : this.$route)
  const getDataErr = reactive({});
  const myInfo = ref({
    "userId" : "",
    "password" : "",
    "email" : "",
    "nickname" : "",
    "location1" : "",
    "location2" : "",
    "interestLanguage" : [],
    "interestFramework" : [],
    "interestJob" : []
  });
  //유효성 검사 msg
  const pwMessage = ref('');
  const emailMessage = ref('');
  const nicknameMessage = ref('');

  // 유효성 검사 조건
  const passwordRegex = /^[a-zA-Z0-9]{6}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,20}$/;

  //중복검사
  const checkNicknameDuplicateTest = ref(false);

  //유효성 검사(pw)
  const validatePassword = () => {
    if (!myInfo.value.password || !passwordRegex.test(myInfo.value.password)) {
      pwMessage.value = "비밀번호는 최소 6자 이상, 알파벳과 숫자로 입력해주세요.";
    } else {
      pwMessage.value = "";
    }
  };
  //유효성 검사(email)
  const validateEmail = () => {
    if (!myInfo.value.email || !emailRegex.test(myInfo.value.email)) {
      emailMessage.value = "올바른 이메일 주소를 입력해주세요.";
    } else {
      emailMessage.value = "";
    }
  };
  //유효성 검사(nickname)
  const validateNickname = () => {
    if (!myInfo.value.nickname || !nicknameRegex.test(myInfo.value.nickname)) {
      nicknameMessage.value = "닉네임는 최소 2자 이상, 20자 이하 알파벳과 숫자로 입력해주세요.";
    } else {
      nicknameMessage.value = "";
    }
  };
  watch(() => myInfo.password, validatePassword);
  watch(() => myInfo.email, validateEmail);
  watch(() => myInfo.nickname, validateNickname);




  async function getData(){
    try {
      const response1 = await axios.get("http://localhost:8081/users/setting/"+route.params.user_id);
      myInfo.value = response1.data;
      myInfo.value.password="";
      console.log(myInfo.value);
      const langarr = myInfo.value.interestLanguage.split("_");
      const fwarr = myInfo.value.interestFramework.split("_");
      const jobarr = myInfo.value.interestJob.split("_");
      console.log(langarr);
      console.log(fwarr);
      console.log(jobarr);
    }catch (error){
      getDataErr.value =error;
      //console.log(getDataErr.value);
    }
  }
  onMounted(()=>{
    console.log("myinfo onmount");
    //언어
    const interestLangButtons = document.querySelectorAll('.myinfo-interest-lang-btn');
    const selectedInterestsLangInput = document.getElementById('selected-interests-lang');
    getData();
  });
</script>

<style src="../../assets/css/myinfo.css" scoped>

</style>