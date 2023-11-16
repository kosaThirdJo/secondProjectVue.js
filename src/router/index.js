import {createRouter, createWebHistory} from "vue-router";
import home from "../pages/home.vue";
import meeting from "../pages/meeting/meeting.vue";
import meetingDetail from "../pages/meeting/meetingDetail.vue";
import login from "../pages/user/login.vue";
import signup from "../pages/user/signup.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:
        [
            {path: '/', component: home},
            {path:'/login', component: login},
            {path:'/signup', component: signup},
            {path: '/meeting', component: meeting},
            //동적 매핑
            {path: '/meeting/:post_id', component: meetingDetail}
        ]
})
export default router;