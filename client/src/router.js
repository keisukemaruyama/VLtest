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
                name: 'driver_list'
            }
        },
        {
            path: '/driver',
            name: 'driver',
            component: () => import('./layouts/dashboard.vue'),
            children: [
                {
                    path: '',
                    name: 'driver_list',
                    component: () => import('./views/driver/index.vue')
                },
                {
                    path: 'create',
                    name: 'driver_create',
                    component: () => import('./views/driver/create.vue')
                },
                {
                    path: 'update',
                    name: 'driver_update',
                    component: () => import('./views/driver/update.vue')
                }
            ]
        },
        {
            path: '/vehicle',
            name: 'vehicle',
            component: () => import('./layouts/dashboard.vue'),
            children: [
                {
                    path: '',
                    name: 'vehicle_list',
                    component: () => import('./views/vehicle/index.vue')
                },
                {
                    path: 'create',
                    name: 'vehicle_create',
                    component: () => import('./views/vehicle/create.vue')
                },
                {
                    path: 'update',
                    name: 'vehicle_update',
                    component: () => import('./views/vehicle/update.vue')
                }
            ]
        }
    ]
})

export default router
