'use strict'
import _import from './lazyRouter'
const router = [
  {
    path: '/',
    redirect: { name: 'login' }
  }, {
    path: '/login',
    name: 'login',
    meta: { title: 'login', index: 0, keepAlive: true, requireAuth: false },
    component: _import('page/login/index')
  }, {
    path: '/home',
    name: 'home',
    meta: { title: '首页', index: 1, keepAlive: true, requireAuth: true },
    component: _import('page/home/index')
  }, {
    path: 'page',
    component: _import('layout/DefaultContent'),
    children: [
      {
        path: '/test',
        name: 'test',
        meta: { title: '首页', index: 1, keepAlive: true, requireAuth: true },
        component: _import('page/test/index')
      }
    ]
  }
]
export default router
