import type { RouteRecordRaw } from "vue-router"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

import { asyncRoutesFrom, constantRoutesFrom } from "./router/router"

/**
 * 动态路由(权限控制)
 */
const asyncRoutes: RouteRecordRaw[] = [...asyncRoutesFrom]

/** 常驻路由 */
const constantRoutes: RouteRecordRaw[] = [...constantRoutesFrom]

export { asyncRoutes, constantRoutes }

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === "hash"
      ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
      : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes
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
