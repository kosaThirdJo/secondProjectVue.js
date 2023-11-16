import {createRouter, createWebHistory} from "vue-router";
import home from "../pages/home.vue";
import meeting from "../pages/meeting/meeting.vue";
import meetingDetail from "../pages/meeting/meetingDetail.vue";
import login from "../pages/user/login.vue";
import signup from "../pages/user/signup.vue";
import myprofile from "../pages/mypages/Myprofile.vue";
import meetingFrom from "../pages/meetingForm.vue"

// 동적 매핑법 :변수
const router = createRouter({
    history: createWebHistory(),
    routes:
        [
            {path: '/', component: home},
            {path:'/login', component: login},
            {path:'/signup', component: signup},
            {path: '/meeting', component: meeting},
            {path: '/meeting/:post_id', component: meetingDetail},
            {path: '/users/profile/:user_id', component:myprofile},
            {path: '/meeting/write',component:meetingFrom}
        ]
})
export default router;