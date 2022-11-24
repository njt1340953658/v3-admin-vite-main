import type { RouteRecordRaw } from 'vue-router'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    meta: {
      hidden: true
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'dashboard',
          affix: true
        },
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/unocss',
    redirect: '/unocss/index',
    children: [
      {
        path: 'index',
        name: 'UnoCSS',
        meta: {
          title: 'unocss',
          icon: 'unocss'
        },
        component: () => import('@/views/unocss/index.vue')
      }
    ]
  },
  {
    path: '/menu',
    redirect: '/menu/menu1',
    name: 'Menu',
    meta: {
      title: '多级菜单',
      icon: 'menu'
    },
    children: [
      {
        path: 'menu1',
        redirect: '/menu/menu1/menu1-1',
        name: 'Menu1',
        meta: { title: 'menu1' },
        component: () => import('@/views/menu/menu1/index.vue'),
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            meta: { title: 'menu1-1' },
            component: () => import('@/views/menu/menu1/menu1-1/index.vue')
          },
          {
            path: 'menu1-2',
            redirect: '/menu/menu1/menu1-2/menu1-2-1',
            name: 'Menu1-2',
            meta: { title: 'menu1-2' },
            component: () => import('@/views/menu/menu1/menu1-2/index.vue'),
            children: [
              {
                path: 'menu1-2-1',
                name: 'Menu1-2-1',
                meta: { title: 'menu1-2-1' },
                component: () => import('@/views/menu/menu1/menu1-2/menu1-2-1/index.vue')
              },
              {
                path: 'menu1-2-2',
                name: 'Menu1-2-2',
                meta: { title: 'menu1-2-2' },
                component: () => import('@/views/menu/menu1/menu1-2/menu1-2-2/index.vue')
              }
            ]
          },
          {
            path: 'menu1-3',
            name: 'Menu1-3',
            meta: { title: 'menu1-3' },
            component: () => import('@/views/menu/menu1/menu1-3/index.vue')
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        meta: { title: 'menu2' },
        component: () => import('@/views/menu/menu2/index.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'ErrorPage',
    meta: {
      title: '错误页面',
      icon: '404',
      hidden: true
    },
    children: [
      {
        path: '403',
        name: '403',
        meta: {
          title: '403'
        },
        component: () => import('@/views/error-page/403.vue')
      },
      {
        path: '404',
        name: '404',
        meta: {
          title: '404'
        },
        component: () => import('@/views/error-page/404.vue')
      }
    ]
  }
]

export default constantRoutes
