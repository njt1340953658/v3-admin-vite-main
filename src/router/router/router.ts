/**
 * 动态路由
 * title?: string
 * icon?: string
 * hidden?: boolean // 是否在侧边栏显示，默认false
 * roles?: string[] // 权限码
 * roles: ["admin", "editor"], // 可以在根路由中设置角色
 * alwaysShow: true // 将始终显示根菜单
 */

import type { RouteRecordRaw } from 'vue-router'

import asyncRoutes from './asyncRoutes'
import constantRoutes from './constantRoutes'

/**
 * 动态路由(权限控制)
 */
const asyncRoutesFrom: RouteRecordRaw[] = [...asyncRoutes]

/** 常驻路由 */
const constantRoutesFrom: RouteRecordRaw[] = [...constantRoutes]

export { asyncRoutesFrom, constantRoutesFrom }
