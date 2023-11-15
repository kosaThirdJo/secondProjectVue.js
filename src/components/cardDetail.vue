<script setup>

</script>

<template>
  <div id="profile" class="border border-dark">
  </div>
  <section id="content_box">
    <div>
      <span class="badge bg-secondary">모집중</span>
      <h2 id="content_title" style="display: inline"> </h2>
      <span class="badge bg-secondary" style="float: right">신청하기 세션확인!</span>
    </div>
    <div>
      <span style="margin-left: 10px"></span>
      <span> 조회수 </span>
      <span></span>
    </div>
    <div id="content_description" class="main-content-container">
    </div>
    <div id="end_date_line">
      <span>마감일</span>
      <span></span>
    </div>
    <div id="location">
      <span>모집장소</span>
    </div>
  </section>
  <section id="comment_box">
    <div>댓글 <span style="color: #1A4D2E"></span>
    </div>
    <div id="comment_input_line">
      <form onsubmit="return false" method=post>
        <input type="hidden" name="commentUserName">
        <input id="comment_input" type="text" name="commentContent" placeholder=" 댓글을 작성해 보세요 버튼 주황색 글씨 흰색" size=80% maxlength=8>
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

<style scoped>

</style>