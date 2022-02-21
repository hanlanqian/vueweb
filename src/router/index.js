// 路由配置
import VueRouter from "vue-router";
import UserInfo from '../pages/UserInfo.vue'
import Home from "../pages/Home.vue"
import Upload from '../pages/Upload.vue'
import Login from '../pages/Login.vue'
// import  
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login,

        },
        {
            name: 'userInfo',
            path: '/UserInfo',
            component: UserInfo,
            meta: {
                requireAuth: true
            }
        },
        {
            name: 'home',
            path: '/Home',
            component: Home
        },
        {
            name: 'upload',
            path: '/Upload',
            component: Upload,
            meta: {
                requireAuth: true
            }
        },

    ]
})

// router.beforeEach((to, from, next) => {
//     console.log(this)
//     console.log(from)
//     if (to.meta.requireAuth) {
//         if (sessionStorage.getItem('accessToken')) {
//             next()
//         } else {
//             console.log(this)
//             console.log('test')
//             next("/login")
//         }
//     }
//     else {
//         next()
//     }
// })



export default router


