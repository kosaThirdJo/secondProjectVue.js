<style src="../../assets/css/signup.css"></style>

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
                    class="signup-form-input-box-content-withbtn"
                    name="name"
                    placeholder="4~15자 이내로 입력해주세요."
                    type="text"
                    @blur="validateUsername"
                />
                <button class="signup-form-input-check-btn" type="button" @click="checkDuplicate('name')">중복 확인</button>
              </div>
              <div v-show="checkUsernameDuplicateTest || !!nameMessage" class="sign-up-form-input-check-alert">
                {{ nameMessage }}
              </div>
            </div>

            <!--  02-02-02 비밀번호  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title">비밀번호</span>
              <input
                  v-model="signupForm.password"
                  class="signup-form-input-box-content"
                  name="password"
                  placeholder="최소 6자 이상, 알파벳과 숫자로 입력해주세요."
                  type="password"
                  @blur="validatePassword"
              />
              <div class="sign-up-form-input-check-alert">{{ pwMessage }}</div>
            </div>

            <!--  02-02-03 이메일  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title">이메일</span>
              <input
                  v-model="signupForm.email"
                  class="signup-form-input-box-content"
                  name="email"
                  placeholder="honggildong@select.com"
                  type="email"
                  @blur="validateEmail"
              />
              <div class="sign-up-form-input-check-alert">{{ emailMessage }}</div>

            </div>

            <!--  02-02-04 닉네임  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title"><span>닉네임</span></span>
              <div class="signup-form-input-withbtn">
                <input
                    v-model="signupForm.nickname"
                    class="signup-form-input-box-content-withbtn"
                    name="nickname"
                    placeholder="닉네임을 20자 이하로 입력해주세요."
                    type="text"
                    @blur="validateNickname"
                />
                <button class="signup-form-input-check-btn" type="button" @click="checkDuplicate('nickname')">중복 확인
                </button>
              </div>
              <div v-show="checkNicknameDuplicateTest || !!nicknameMessage" class="sign-up-form-input-check-alert">
                {{ nicknameMessage }}
              </div>

            </div>

            <!--  02-02-05 지역  -->
            <div class="signup-form-input-box">
              <span class="signup-form-input-box-title"><span>지역</span></span>
              <div class="signup-form-input-withbtn">
                <input
                    id="locationInput"
                    v-model="userLocation"
                    class="signup-form-input-box-content-withbtn"
                    name="location1"
                    placeholder="현재 지역을 인증해주세요."
                    readonly
                    type="text"
                />
                <button class="signup-form-input-location-btn" type="button" @click="getLocation">지역 인증</button>
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
                    <button
                        class="signup-interest-lang-btn"
                        v-for="lang in languages"
                        :key="lang.id"
                        :class="{ selected: lang.isSelected }"
                        @click="toggleSelection(lang, languages)"
                        type="button"
                    >{{ lang.name }}
                    </button>
                    <!--                    <button class="signup-interest-lang-btn" type="button" value="1">Java</button>
                                        <button class="signup-interest-lang-btn" type="button" value="2">Python</button>
                                        <button class="signup-interest-lang-btn" type="button" value="3">C#</button>
                                        <button class="signup-interest-lang-btn" type="button" value="4">C++</button>
                                        <button class="signup-interest-lang-btn" type="button" value="5">JavaScript</button>
                                        <button class="signup-interest-lang-btn" type="button" value="6">Ruby</button>
                                        <button class="signup-interest-lang-btn" type="button" value="7">Swift</button>
                                        <button class="signup-interest-lang-btn" type="button" value="8">TypeScript</button>
                                        <button class="signup-interest-lang-btn" type="button" value="9">PHP</button>-->
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
import {ref, watch} from "vue";
import axios from "axios";

const signupForm = ref({
  username: '',
  password: '',
  email: '',
  nickname: '',
});

// message
const nameMessage = ref('');
const pwMessage = ref('');
const emailMessage = ref('');
const nicknameMessage = ref('');

// 중복검사
const checkUsernameDuplicateTest = ref(false);
const checkNicknameDuplicateTest = ref(false);

// 유효성 검사 조건
const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
const passwordRegex = /^[a-zA-Z0-9]{6}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,20}$/;

// 중복 확인 (유효성 검사 후 중복 검사)
const checkDuplicate = async (type) => {
  const value = type === 'name' ? signupForm.value.username : signupForm.value.nickname;
  if (type === 'name') { // 아이디
    if (!signupForm.value.username || !usernameRegex.test(signupForm.value.username)) {
      nameMessage.value = "아이디를 4자 이상, 15자 이하의 알파벳과 숫자로 입력해주세요.";
    } else {
      try {
        const response = await axios.get(`http://localhost:8081/checkDuplicate?type=name&value=${value}`);
        checkUsernameDuplicateTest.value = false;
        nameMessage.value = response.data;
      } catch (error) {
        checkUsernameDuplicateTest.value = true;
        nameMessage.value = error.response.data;
      }
    }
  } else {  // 닉네임
    if (!signupForm.value.nickname || !nicknameRegex.test(signupForm.value.nickname)) {
      nicknameMessage.value = "닉네임은 20자 이하로 입력해주세요.";
    } else {
      try {
        const response = await axios.get(`http://localhost:8081/checkDuplicate?type=nickname&value=${value}`);
        checkNicknameDuplicateTest.value = false;
        nicknameMessage.value = response.data;
      } catch (error) {
        checkNicknameDuplicateTest.value = true;
        nicknameMessage.value = error.response.data;
      }
    }
  }
};

// 유효성 검사
const validateUsername = () => {
  if (!signupForm.value.username || !usernameRegex.test(signupForm.value.username)) {
    nameMessage.value = "아이디를 4자 이상, 15자 이하의 알파벳과 숫자로 입력해주세요.";
  } else {
    nameMessage.value = "";
  }
};
const validatePassword = () => {
  if (!signupForm.value.password || !passwordRegex.test(signupForm.value.password)) {
    pwMessage.value = "비밀번호는 최소 6자 이상, 알파벳과 숫자로 입력해주세요.";
  } else {
    pwMessage.value = "";
  }
};
const validateEmail = () => {
  if (!signupForm.value.email || !emailRegex.test(signupForm.value.email)) {
    emailMessage.value = "올바른 이메일 주소를 입력해주세요.";
  } else {
    emailMessage.value = "";
  }
};
const validateNickname = () => {
  if (!signupForm.value.nickname || !nicknameRegex.test(signupForm.value.nickname)) {
    nicknameMessage.value = "닉네임는 최소 2자 이상, 20자 이하 알파벳과 숫자로 입력해주세요.";
  } else {
    nicknameMessage.value = "";
  }
};

watch(() => signupForm.username, validateUsername);
watch(() => signupForm.password, validatePassword);
watch(() => signupForm.email, validateEmail);
watch(() => signupForm.nickname, validateNickname);

// 지역 인증
const userLocation = ref('');
const getLocation = async () => {
  // apiKey 가져오기
  const apiResponse = await axios.get(`http://localhost:8081/apiKey`);
  const apiKey = apiResponse.data;
  // geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const x = position.coords.longitude;
      const y = position.coords.latitude;
      if (x && y) {
        // kakaoapi
        const response = await axios.get(
            `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`,
            {headers: {Authorization: `KakaoAK ${apiKey}`}}
        );
        userLocation.value = response.data.documents[0].region_1depth_name;
      }
    });
  } else {
    alert('브라우저가 위치 정보를 지원하지 않습니다.');
  }
};

// 관심분야
const selectedInterestsLang = ref([]);
const selectedInterestsFw = ref([]);
const selectedInterestsJob = ref([]);

const languages = [
  { id: 1, name: "Java", isSelected: false },
  { id: 2, name: "Python" },
  { id: 3, name: "C#" },
  { id: 4, name: "C++" },
  { id: 5, name: "JavaScript" },
  { id: 6, name: "Ruby" },
  { id: 7, name: "Swift" },
  { id: 8, name: "TypeScript" },
  { id: 9, name: "PHP" },
]
const frameworks = [
  { id: 1, name: "Spring" },
  { id: 2, name: "React" },
  { id: 3, name: "Angular" },
  { id: 4, name: "Vue.js" },
  { id: 5, name: "Express.js" },
  { id: 6, name: "Django" },
  { id: 7, name: "Ruby on Rails" },
  { id: 8, name: "Flask" },
  { id: 9, name: "Laravel" },
]
const roles = [
  { id: 1, name: "프론트엔드" },
  { id: 2, name: "백엔드" },
  { id: 3, name: "풀스택" },
  { id: 4, name: "모바일 앱 개발" },
  { id: 5, name: "게임 개발" },
  { id: 6, name: "데이터베이스" },
  { id: 7, name: "데브옵스" },
  { id: 8, name: "디자이너" },
  { id: 9, name: "기획자" },
]

const toggleSelection = (item, type) => {
  console.log(item);
  console.log(type);
  const selectedArray = type === 'languages' ? selectedInterestsLang : [];
  const index = selectedArray.indexOf(item.id);

  if (index === -1) {
    selectedArray.push(item.id);  // 선택되지 않은 경우 추가
  } else {
    selectedArray.splice(index, 1);  // 이미 선택된 경우 제거
  }
  console.log(selectedArray);
  item.isSelected = !item.isSelected;  // 토클
};

</script>