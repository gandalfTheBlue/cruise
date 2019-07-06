import axios from 'axios'

const host = 'http://localhost:3001'

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

export function httpGet(resource) {
  return axios(httpURL(resource), httpRequestParas('GET'))
}

export function httpPut(resource, putData) {
  return axios.put(httpURL(resource), putData, httpRequestParas('PUT'))
}

function httpRequestParas(method) {
  return {
    headers: headers,
    method: method
  }
}

export function httpURL(resourceLocation) {
  return host + resourceLocation
}
