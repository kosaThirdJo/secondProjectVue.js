<template>

<!--회원 이력 조회 router-link 추가-->
                <a >
<!--회원 프로필 이미지 추가-->
<!--                  <th:block th:if="${encodeImgList[userStat.index]} != null">-->
<!--                    <img class="search-user-profile-photo"-->
<!--                         th:src="@{'data:image/png;base64,' + ${encodeImgList[userStat.index]}}" alt="Image">-->
<!--                  </th:block>-->
<!--                  <th:block th:if="${encodeImgList[userStat.index]} == null">-->
<!--                    <img class="search-user-profile-photo"-->
<!--                         th:src="@{/image/global/userdefaultimg.png}"/>-->
<!--                  </th:block>-->
                  <div class="search-nickname-info-name">{{ nickname }}</div>
                  <div class="search-nickname-info-about" style="min-height: 100px">{{ aboutMe }}</div>
                </a>
</template>

<script setup>
import {ref, toRef} from 'vue'
import { defineProps } from 'vue';

let p = defineProps( {
  resOne : Object,
});

let pp = toRef(p,"resOne");
const nickname = ref(pp.value.nickname);
const aboutMe = ref(pp.value.aboutMe);
</script>


