import { get, post } from './helpers'
const url = 'http://localhost:8080/api/'


const login = post(url+'login')

export {
  login
}


