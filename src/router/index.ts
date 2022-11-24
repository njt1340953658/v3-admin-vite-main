/**
 * 动态路由
 * title?: string
 * icon?: string
 * hidden?: boolean // 是否在侧边栏显示，默认false
 * roles?: string[] // 权限码
 * roles: ["admin", "editor"], // 可以在根路由中设置角色
 * alwaysShow: true // 将始终显示根菜单
 */
import asyncRoute from './router/asyncRoutes'
import constantRoute from './router/constantRoutes'
import { type RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 没有权限基础页面
export const constantRoutes: RouteRecordRaw[] = [...constantRoute]

// 动态路由(权限控制)
export const asyncRoutes: RouteRecordRaw[] = [...asyncRoute]

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === 'hash'
      ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
      : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [...constantRoutes, ...asyncRoutes]
})

/** 重置路由
 *  注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
 */
export function resetRouter() {
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    window.location.reload()
  }
}

export default router
