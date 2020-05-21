import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'

// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
const whiteList = ['/login', '/auth-redirect']

router.beforeEach((to, from, next) => {
  const hasToken = getToken()

  console.log('token:'+ hasToken)

  if(hasToken) {
    if(to.path === '/login'){
      next({ path: '/'})
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
  // 如果没token

  next()
})

// router.afterEach(() => {
//   NProgress.done()
// })