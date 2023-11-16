import {createRouter, createWebHistory} from "vue-router";
import home from "../pages/Home.vue";
import meeting from "../pages/Meeting.vue";
import myprofile from "../pages/mypages/Myprofile.vue";
import meetingDetail from "../pages/meetingDetail.vue";
import meetingFrom from "../pages/meetingForm.vue"

// 동적 매핑법 :변수
const router = createRouter({
    history: createWebHistory(),
    routes:
        [
            {path: '/', component: home},
            {path: '/meeting', component: meeting},
            {path: '/meeting/:post_id', component: meetingDetail},
            {path: '/users/profile/:user_id', component:myprofile},
            {path: '/meeting/write',component:meetingFrom}
        ]
})
export default router;