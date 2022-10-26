import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入仓库
import store from '@/store'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/Home'),

            },
            {
                path: 'user',
                name: 'user',
                component: () => import('@/views/User'),

            },
            {
                path: 'goods',
                name: 'goods',
                component: () => import('@/views/Goods'),

            },
            {
                path: 'page1',
                name: 'page1',
                component: () => import('@/views/other/Page1'),

            },
            {
                path: 'page2',
                name: 'page2',
                component: () => import('@/views/other/Page2'),

            },
        ]

    },
    {
        path:'/login',
        name:'login',
        component:() => import('@/views/Login')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes

})
export default router

// router.beforeEach((to,from,next) => {
//     store.commit('getToken')
//     const token = store.state.user.token
//     if(!token && to.path !== '/login'){
//         next('/login')
//     }else{
//         next()
//     }

// })