import  { createRouter, createWebHistory} from "vue-router";

import meeting from "../pages/Meeting.vue";
import meetingDetail from "../pages/meetingDetail.vue";


const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/meeting', component: meeting },
        //동적 매핑
        {path: '/meeting/:post_id', component: meetingDetail}
    ]
})

export default router;