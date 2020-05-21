import Layout from '@/layout'

const routes  = [
  {
    path: '/login',
    component: () => import('@/view/login/index')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/view/dashboard/index')
      },
      {
        path: '/charts',
        component: () => import('@/view/charts/index')
      }
    ]
  }
]

export default routes