<template>
  <div class="frame-mymeeting-title">
    <div class="mymeeting-title">
      <span class="mymeeting-title-text">내가 만든 모임</span>
    </div>
  </div>
  <div class="frame-mymeeting-body">
    <!-- 카테고리(전체, 프로젝트, 스터디, 기타)    메뉴 -->
    <div class="search-filter">
      <ul class="search-categry">
        <li class="e-category">
          <button class="filter-button"
                  data-category="category"
                  value="all">전체</button>
        </li>
        <li class="e-category">
          <button class="filter-button"
                  data-category="category"
                  value="project">프로젝트</button>
        </li>
        <li class="e-category">
          <button class="filter-button"
                  data-category="category"
                  value="study">스터디</button>
        </li>
        <li class="e-category">
          <button class="filter-button"
                  data-category="category"
                  value="etc">기타</button>
        </li>
      </ul>
    </div>
    <!-- 목록 -->
    <div class="mymeeting-list-container">
      <!-- 모집상태(전체, 모집중, 모집완료) 메뉴-->
      <div class="list-container-header">
        <ul class="search-filter-select">
          <li class="e-status">
            <button class="filter-button"
                    data-category="status"
                    value="all">전체</button>
          </li>
          <li class="e-status">
            <button class="filter-button"
                    data-category="status"
                    value="statusing">모집중</button>
          </li>
          <li class="e-status">
            <button class="filter-button"
                    data-category="status"
                    value="statused">모집완료</button>
          </li>
        </ul>
      </div>
      <!-- 목록 -->
      <div class="list-container-body">
        <!-- 조회 결과(meetingvoList)가 있을 경우 -->
        <div>
          <ul class="mymeeting-list">
            <li class="mymeeting-container" >
              <a class="click-meetingpost">
                <div class="meetinginfo">
                  <!-- 게시글 항목 status & title-->
                  <div class="meeting-title">
                    <div class="meeting-status" >
                      <div class="meeting-status-text-ing" >모집중</div>
                    </div>
                    <div class="meeting-category">
                      <div class="meeting-category-text">스터디</div>
                    </div>
                    <div class="meeting-title-div">
                      <div class="meeting-title-text">글제목</div>
                    </div>
                  </div>
                  <!--게시글 항목 내용-->
                  <div class="meeting-body">
                    <p class="meeting-body-content" >내용</p>
                  </div>
                  <!--게시글 항목 하단-->
                  <div class="meeting-footer">
                    <div class="meeting-cratedata">
                      <span class="meeting-footer-text">작성일</span>
                      <span class="meeting-footer-content-text">  </span>
                    </div>
                    <div class="meeing-location">
                      <span class="meeting-footer-text">장소</span>
                      <span class="meeting-footer-content-text"></span>
                    </div>
                    <div class="meeting-count">
                      <span class="meeting-footer-text">신청인원</span>
                      <span class="meeting-footer-content-text"></span>
                    </div>
                    <div class="meeting-deadline">
                      <span class="meeting-footer-text">모집마감일</span>
                      <span class="meeting-footer-content-text"></span>
                    </div>
                    <div class="meeting-view">
                      <span class="meeting-footer-text">조회수</span>
                      <span class="meeting-footer-content-text"></span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style src="../../assets/css/mymeetinglistView.css" scoped>

</style>