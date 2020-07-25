import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: {
                name: 'home'
            }
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/home.vue')
        }
    ]
})

export default router
