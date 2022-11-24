import type { RouteRecordRaw } from 'vue-router'

const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/permission',
    redirect: '/permission/page',
    name: 'Permission',
    meta: {
      title: '权限管理',
      icon: 'lock',
      roles: ['admin', 'editor'], // 可以在根路由中设置角色
      alwaysShow: true // 将始终显示根菜单
    },
    children: [
      {
        path: 'page',
        name: 'PagePermission',
        meta: {
          title: '页面权限',
          roles: ['admin'] // 或者在子导航中设置角色
        },
        component: () => import('@/views/permission/page.vue')
      },
      {
        path: 'directive',
        name: 'DirectivePermission',
        meta: {
          title: '指令权限' // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
        },
        component: () => import('@/views/permission/directive.vue')
      }
    ]
  }
]

export default asyncRoutes
