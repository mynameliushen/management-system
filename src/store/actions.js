import { login } from 'api'
const REQUEST_OK = 0

export default {
  login({ commit }, userInfo) {
    login(userInfo).then(res => {
      const { errno, token, data} = res.data
      if (errno === REQUEST_OK){
        commit('SET_TOKEN', token)
        commit('SET_NAME', data.name)
      }
    }).catch(e => {
      console.log(e)
    })
  }
}