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
import mypage from "../pages/Mypage.vue";
import myprofile from "../components/mypages/myprofile.vue";
import myinfo from "../components/mypages/myinfo.vue"
import mymeetingList from "../components/mypages/mymeetingList.vue"
import myapplyingList from "../components/mypages/myapplyingList.vue"

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
            {path: '/meeting/write',component:meetingFrom},
            // mypage
            {path: '/users/profile/:user_id', component:myprofile},
            {path: '/users/:user_id', name: 'mypage', component:mypage,
                children:[
                    {path:'myprofile', name:'myprofile', component: myprofile},
                    {path:'myinfo', name:'myinfo', component: myinfo},
                    {path: 'mymeeting', name: 'mymeetinglist',component:mymeetingList},
                    {path: 'myapplying', name: 'myapplyinglist',component:myapplyingList}
                ]},

        ]
})

export default router;