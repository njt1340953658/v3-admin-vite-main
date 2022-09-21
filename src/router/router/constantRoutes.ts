import type { RouteRecordRaw } from 'vue-router'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/unocss',
    redirect: '/unocss/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/unocss/index.vue'),
        name: 'UnoCSS',
        meta: {
          title: 'unocss',
          icon: 'unocss'
        }
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
        component: () => import('@/views/menu/menu1/index.vue'),
        redirect: '/menu/menu1/menu1-1',
        name: 'Menu1',
        meta: { title: 'menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/menu/menu1/menu1-1/index.vue'),
            name: 'Menu1-1',
            meta: { title: 'menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/menu/menu1/menu1-2/index.vue'),
            redirect: '/menu/menu1/menu1-2/menu1-2-1',
            name: 'Menu1-2',
            meta: { title: 'menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/menu/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'Menu1-2-1',
                meta: { title: 'menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/menu/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'Menu1-2-2',
                meta: { title: 'menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/menu/menu1/menu1-3/index.vue'),
            name: 'Menu1-3',
            meta: { title: 'menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/menu/menu2/index.vue'),
        name: 'Menu2',
        meta: { title: 'menu2' }
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
        component: () => import('@/views/error-page/403.vue'),
        name: '403',
        meta: {
          title: '403'
        }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        name: '404',
        meta: {
          title: '404'
        }
      }
    ]
  }
]

export default constantRoutes
