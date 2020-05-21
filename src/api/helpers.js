import axios from 'axios'
const REQUEST_OK = 0
const REQUEST_FAIL = 1

export function get(url) {
  return function(params = {}) {
    return axios.get(url, {
      params
    }).then(res => {
      const {errno, data} = res.data
      if (errno === REQUEST_OK) {
        return data
      }
    }).catch(e=> {
      console.log(e)
    })
  }
}

export function post(url) {
  return function(params = {}) {
    return axios.post(url,params)
      .then(res => {
          return res
      }).catch(e=> {
        console.log(e)
      })
  }
}