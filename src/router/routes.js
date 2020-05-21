
const routes  = [
  {
    path: '/',
    component: () => import('@/view/login/index')
  },
  {
    path: '/dashboard',
    component: () => import('@/view/dashboard/index')
  }
]

export default routes