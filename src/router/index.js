import Vue from 'vue'
import Router from 'vue-router'
import { allRouter } from './router.config.js'

Vue.use(Router)

const routes = allRouter.map(function (item) {
    return item;
})

routes.push({
    path: '*',
    redirect: '/'
})

const router = new Router({
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    routes
})

export default router
