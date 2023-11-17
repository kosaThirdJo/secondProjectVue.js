import {createRouter, createWebHistory} from "vue-router";
// common
import home from "../pages/home.vue";
import login from "../pages/user/login.vue";
import signup from "../pages/user/signup.vue";
// meeting
import meeting from "../pages/meeting/meeting.vue";
import meetingDetail from "../pages/meeting/meetingDetail.vue";
import meetingFrom from "../pages/meeting/meetingForm.vue"
// mypage
import myprofile from "../pages/mypages/Myprofile.vue";

// 동적 매핑법 :변수
const router = createRouter({
    history: createWebHistory(),
    routes:
        [
            // common
            {path: '/', component: home},
            {path:'/login', component: login},
            {path:'/signup', component: signup},
            // meeting
            {path: '/meeting', name: 'meeting', component: meeting},
            {path: '/meeting/:post_id', component: meetingDetail},
            {path: '/meeting/write',component:meetingFrom},
            // mypage
            {path: '/users/profile/:user_id', component:myprofile},
        ]
})


export default router;