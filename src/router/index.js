// 路由配置
import VueRouter from "vue-router";
import UserInfo from '../pages/UserInfo.vue'
import Home from "../pages/Home.vue"
import Upload from '../pages/Upload.vue'
// import  
export default new VueRouter({
    routes:[
        {
            path: '/UserInfo',
            component: UserInfo
        },
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/Upload',
            component: Upload
        }
    ]
})



