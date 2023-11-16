<style scoped src="../../assets/css/signup.css"></style>

<template>
  <div class="signup-container">
    <div class="signup-content">
      <!--      01 상단 텍스트 : 로고, 설명 -->
      <div class="signup-top">
        <router-link class="signup-top-logo" to="/">
          <span class="signup-top-logo-text">
              SELECT <span class="signup-top-logo-text-star">*</span>
          </span>
        </router-link>
        <span class="signup-top-intro1">
          <span>SELECT*에 오신것을 환영합니다.</span>
        </span>
        <span class="signup-top-intro2">
          <span>SELECT*는 개발자를 위한 모임 커뮤니티입니다.</span>
        </span>
      </div>

      <!--       02 입력 폼-->
      <div class="signup-form">
        <form id="signupForm" action="/signup" method="post">
          <div class="signup-form-input">
            <!--  02-02-01 아이디  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title">아이디</span>
              <div class="signup-form-input-withbtn">
                <input
                    v-model="signupForm.username"
                    type="text"
                    name="name"
                    placeholder="4~15자 이내로 입력해주세요."
                    class="signup-form-input-box-content-withbtn"
                    @blur="validateUsername"
                />
                <button class="signup-form-input-check-btn" @click="checkDuplicate('name')" type="button">중복 확인</button>
              </div>
              <div class="sign-up-form-input-check-alert">{{ usernameValidationMessage }}</div>
            </div>

            <!--  02-02-02 비밀번호  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title">비밀번호</span>
              <input
                  v-model="signupForm.password"
                  type="password"
                  name="password"
                  placeholder="최소 6자 이상, 알파벳과 숫자로 입력해주세요."
                  class="signup-form-input-box-content"
                  @blur="validatePassword"
              />
              <div class="sign-up-form-input-check-alert">{{ passwordValidationMessage }}</div>
            </div>

            <!--  02-02-03 이메일  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title">이메일</span>
              <input
                  class="signup-form-input-box-content"
                  name="email"
                  placeholder="honggildong@select.com"
                  type="email"
              />
              <div id="checkEmail" class="sign-up-form-input-check-alert">
                <span></span>
              </div>
            </div>

            <!--  02-02-04 닉네임  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title"><span>닉네임</span></span>
              <div class="signup-form-input-withbtn">
                <input
                    class="signup-form-input-box-content-withbtn"
                    name="nickname"
                    placeholder="닉네임을 20자 이하로 입력해주세요."
                    type="text"
                />
                <button class="signup-form-input-check-btn" onclick="checkDuplicate('nickname')" type="button">중복 확인
                </button>
              </div>
              <div id="checkNickname" class="sign-up-form-input-check-alert">
                <span></span>
              </div>
            </div>

            <!--  02-02-05 지역  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title"><span>지역</span></span>
              <div class="signup-form-input-withbtn">
                <input
                    id="locationInput" class="signup-form-input-box-content-withbtn" name="location1"
                    placeholder="현재 지역을 인증해주세요." readonly type="text"
                />
                <button class="signup-form-input-location-btn" type="button">지역 인증</button>
              </div>
              <div id="checkLocation" class="sign-up-form-input-check-alert">
                <span></span>
              </div>
            </div>


            <!--  02-02-06 관심 분야  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title"><span>관심 분야</span></span>
              <div class="signup-form-input-box-content" style="padding-bottom: 10px;">
                <!--  02-02-06-01 언어  -->
                <div class="signup-form-select-interest">
                  <span class="signup-form-select-interest-title">Language</span>
                  <div class="signup-form-select-interest-button">
                    <input id="selected-interests-lang" name="interest_language" type="hidden" value="">
                    <button class="signup-interest-lang-btn" type="button" value="1">Java</button>
                    <button class="signup-interest-lang-btn" type="button" value="2">Python</button>
                    <button class="signup-interest-lang-btn" type="button" value="3">C#</button>
                    <button class="signup-interest-lang-btn" type="button" value="4">C++</button>
                    <button class="signup-interest-lang-btn" type="button" value="5">JavaScript</button>
                    <button class="signup-interest-lang-btn" type="button" value="6">Ruby</button>
                    <button class="signup-interest-lang-btn" type="button" value="7">Swift</button>
                    <button class="signup-interest-lang-btn" type="button" value="8">TypeScript</button>
                    <button class="signup-interest-lang-btn" type="button" value="9">PHP</button>
                  </div>
                </div>

                <!--  02-02-06-02 프레임워크  -->
                <div class="signup-form-select-interest">
                  <span class="signup-form-select-interest-title">Framework</span>
                  <div class="signup-form-select-interest-button">
                    <input id="selected-interests-fw" name="interest_framework" type="hidden" value="">
                    <button class="signup-interest-fw-btn" type="button" value="1">Spring</button>
                    <button class="signup-interest-fw-btn" type="button" value="2">React</button>
                    <button class="signup-interest-fw-btn" type="button" value="3">Angular</button>
                    <button class="signup-interest-fw-btn" type="button" value="4">Vue.js</button>
                    <button class="signup-interest-fw-btn" type="button" value="5">Express.js</button>
                    <button class="signup-interest-fw-btn" type="button" value="6">Django</button>
                    <button class="signup-interest-fw-btn" type="button" value="7">Ruby on Rails</button>
                    <button class="signup-interest-fw-btn" type="button" value="8">Flask</button>
                    <button class="signup-interest-fw-btn" type="button" value="9">Laravel</button>
                  </div>
                </div>

                <!--  02-02-06-01 직무  -->
                <div class="signup-form-select-interest">
                  <span class="signup-form-select-interest-title">Role</span>
                  <div class="signup-form-select-interest-button">
                    <input id="selected-interests-job" name="interest_job" type="hidden" value="">
                    <button class="signup-interest-job-btn" type="button" value="1">프론트엔드</button>
                    <button class="signup-interest-job-btn" type="button" value="2">백엔드</button>
                    <button class="signup-interest-job-btn" type="button" value="3">풀스택</button>
                    <button class="signup-interest-job-btn" type="button" value="4">모바일 앱 개발</button>
                    <button class="signup-interest-job-btn" type="button" value="5">게임 개발</button>
                    <button class="signup-interest-job-btn" type="button" value="6">데이터베이스</button>
                    <button class="signup-interest-job-btn" type="button" value="7">데브옵스</button>
                    <button class="signup-interest-job-btn" type="button" value="8">디자이너</button>
                    <button class="signup-interest-job-btn" type="button" value="9">기획자</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <!--  02-02-08 회원 가입 버튼  -->
        <div class="signup-signupbtn"><a href="#"></a></div>

        <!--03 로그인 페이지 이동-->
        <div class="signup-movetoLogin">
          <span>이미 회원이신가요?</span>
          <router-link class="signup-movetoLogin-loginPg" to="/login">로그인</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";

const signupForm = ref({
  username: '',
  password: '',
  email: '',
});

const usernameValidationMessage = ref('');
const passwordValidationMessage = ref('');
const emailValidationMessage = ref('');
const nicknameValidationMessage = ref('');

// 유효성 검사
  // 아이디 : 4자 이상, 15자 이하, 알파벳과 숫자만 허용
  const validateUsername = () => {
    const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
    if (!signupForm.value.username || !usernameRegex.test(signupForm.value.username)) {
      usernameValidationMessage.value = "아이디를 4자 이상, 15자 이하의 알파벳과 숫자로 입력해주세요.";
    } else {
      usernameValidationMessage.value = "";
    }
  };

  // 비밀번호
  const validatePassword = () => {
    const validatepw = signupForm.value.password;
    console.log(validatepw);
  }

watch(() => signupForm.username, validateUsername);
watch(() => signupForm.password, validatePassword);
</script>