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

router.beforeEach((to, from, next) => {
    if (to.path !== '/') {
        window.$VUEStore.dispatch('login/changeHomeButStatus', { homeBut: true })
    } else {
        // 荷载形式分发
        window.$VUEStore.dispatch('login/changeHomeButStatus', { homeBut: false })
        // 对象形式分发
        // window.$VUEStore.dispatch({ type: 'login/changeHomeButStatus', homeBut: false })
    }
    next();
})

export default router
