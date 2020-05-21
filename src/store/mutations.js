import { setToken, removeToken } from '@/utils/auth'

export default {
  SET_TOKEN (state, token) {
    state.token = token
    setToken(token)
  },
  SET_NAME (state, name) {
    state.name = name
  }
}