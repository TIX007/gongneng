'use strict'

export function SessionSet (key = '', val = {}) {
  if (val) sessionStorage.setItem(key, JSON.stringify(val))
}
export function SessionGet (key = '') {
  const val = sessionStorage.getItem(key)
  if (val) return JSON.parse(val)
  else return {}
}
export function SessionDel (key = '') {
  sessionStorage.removeItem(key)
}
// 储存  SessionGroupSet('loginInfo', toke)  toke是对象且有
export function SessionGroupSet (key, val, parentKey = null) {
  parentKey = (parentKey === null) ? window.location.host + window.location.pathname : parentKey
  let obj = SessionGet(parentKey)
  if (!obj) {
    obj = {}
  }
  obj[key] = val
  SessionSet(parentKey, obj)
}
// 获取拿到  SessionGroupGet('loginInfo')
//router.beforeEach((to, from, next) => {
//  const userInfo = SessionGroupGet('loginInfo')
//  if (to.meta.requireAuth) {
//    if (userInfo && userInfo.token) {
//      next()
//    } else {
//      next({
//        path: '/login',
//        query: { redirectUrl: to.fullPath }
//      })
//    }
//  } else {
//    next()
//  }
//})

export function SessionGroupGet (key, parentKey = null) {
  parentKey = (parentKey === null) ? window.location.host + window.location.pathname : parentKey
  const obj = SessionGet(parentKey)
  return (obj) ? obj[key] : ''
}
export function SessionGroupDel (key, parentKey = null) {
  parentKey = (parentKey === null) ? window.location.host + window.location.pathname : parentKey
  const obj = SessionGet(parentKey)
  if (obj) {
    delete obj[key]
    SessionSet(parentKey, obj)
  }
}
