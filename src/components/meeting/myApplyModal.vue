<script setup>
import {api} from "@/common.js";
import router from "../../router/index.js";

import {ref, defineProps, onMounted} from "vue";

const props = defineProps({
  show: Boolean,
  userId: Number,
  meetingId: Number
})
const validObjApply = ref({
  reject: -1,
  reason: ""
});

function checkValidApply(){
  api(
      "apply/check?meetingId="
      + props.meetingId
      + "&userId="
      + "1",
  "GET",
      ""
      ).then(
          response =>{
            validObjApply.value = response;
            console.log(response)
            console.log(validObjApply.value.reason)
          }
  )
}
onMounted(() => {
  checkValidApply();
});
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot name="body" v-if="validObjApply.reject===undefined">
            <h3>아직 신청 안 하신 것 아닌가요?</h3>
          </slot>
          <slot name="body" v-else-if="validObjApply.reject===0">
            <h3>신청 대기중 입니다.</h3>
          </slot>
          <slot name="body" v-else>
            <h3 v-text="'거절 사유 :' + validObjApply.reason"></h3>
          </slot>


        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button
                class="modal-default-button"
                @click="$emit('close')"
            >닫기</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-input{
  width: 100%;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 500px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>