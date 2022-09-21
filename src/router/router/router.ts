/**
 * 动态路由
 * roles: ["admin", "editor"], // 可以在根路由中设置角色
 * alwaysShow: true // 将始终显示根菜单
 * */

import type { RouteRecordRaw } from "vue-router"

import asyncRoutes from "./asyncRoutes"
import constantRoutes from "./constantRoutes"

/**
 * 动态路由(权限控制)
 */
const asyncRoutesFrom: RouteRecordRaw[] = [...asyncRoutes]

/** 常驻路由 */
const constantRoutesFrom: RouteRecordRaw[] = [...constantRoutes]

export { asyncRoutesFrom, constantRoutesFrom }
