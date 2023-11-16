import {createRouter, createWebHistory} from "vue-router";
import home from "../pages/Home.vue";
import meeting from "../pages/Meeting.vue";
import meetingDetail from "../pages/meetingDetail.vue";
import meetingFrom from "../pages/meetingForm.vue"
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
            {path: '/', component: home},
            {path: '/meeting', component: meeting},
            {path: '/meeting/:post_id', component: meetingDetail},
            {path: '/meeting/write',component:meetingFrom},
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