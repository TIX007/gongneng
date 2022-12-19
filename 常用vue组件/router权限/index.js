'use strict'
import Vue from 'vue'
import VueRouter from 'vue-router'
import page from './page'
import { SessionGroupGet } from '../util/SessionStorageUtil'

Vue.use(VueRouter)
/**
 * 路由信息
 * @type {}
 */
const routes = [
  {
    path: '*',
    name: '404',
    meta: { title: '404', keepAlive: true, requireAuth: false },
    component: () => import('@/views/page/error/404.vue')
  },
  ...page
]
/**
 * 获取原型对象上的push函数
 * @type {}
 */
const originalPush = VueRouter.prototype.push
/**
 * 修改原型对象中的push方法
 * @param location
 * @returns {Promise<Route>}
 */
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
/**
 * 配置滚动条的位置
 * @param to
 * @param from
 * @param savedPosition
 * @returns {{x: number, y: number}|*}
 */
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
/**
 * 路由配置
 * @type {VueRouter}
 */
const router = new VueRouter({
  // base: __dirname,
  likActiveClass: 'link-active',
  scrollBehavior,
  routes
})
/**
 *  修改网站title的值
 */
router.afterEach((transition) => {
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
})
/**
 * 路由拦截器
 * 1.判断该路由是否需要登录权限
 * 2.通过vuex state获取当前的token是否存在
 * 3.将跳转的路由path作为参数，登录成功后跳转到该路由
 */
router.beforeEach((to, from, next) => {
  const userInfo = SessionGroupGet('loginInfo')
  if (to.meta.requireAuth) {
    if (userInfo && userInfo.token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirectUrl: to.fullPath }
      })
    }
  } else {
    next()
  }
})
export default router
