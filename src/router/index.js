import {createRouter, createWebHistory} from "vue-router";
/*
import home from "../pages/home.vue"
import meeting from "../pages/meeting/meeting.vue";
import meetingDetail from "../pages/meeting/meetingDetail.vue";
import meetingFrom from "../pages/meetingForm.vue"
*/
import mypage from "../pages/Mypage.vue";
import myprofile from "../components/mypages/myprofile.vue";
import myinfo from "../components/mypages/myinfo.vue"
import mymeetingList from "../components/mypages/mymeetingList.vue"
import myapplyingList from "../components/mypages/myapplyingList.vue"
import meetingFix from "../pages/MeetingFix.vue";
// common
import home from "../pages/home.vue";
import login from "../pages/user/login.vue";
import signup from "../pages/user/signup.vue";
// meeting
import meeting from "../pages/meeting/meeting.vue";
import meetingDetail from "../pages/meeting/meetingDetail.vue";
import meetingFrom from "../pages/meeting/meetingForm.vue"


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
            {path: '/meeting/:post_id', name: 'meetingDetail', component: meetingDetail},
            {path: '/meeting/write', name: 'meetingForm', component:meetingFrom},
            {path: '/meeting/fix/:fix_id', name: 'meetingFix', component:meetingFix},
            // mypage
            {path: '/users/:user_id', name: 'mypage', component:mypage,
                children:[
                    {path:'myprofile', name:'myprofile', component: myprofile},
                    {path:'myinfo', name:'myinfo', component: myinfo},
                    {path: 'mymeeting', name: 'mymeetinglist',component:mymeetingList},
                    {path: 'myapplying', name: 'myapplyinglist',component:myapplyingList}
                ]
            }
        ]
})
export default router;