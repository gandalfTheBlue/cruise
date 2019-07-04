import axios from 'axios'
import { local, TOKEN } from 'src/utils/storage'
import md5 from 'crypto-js/md5'

const methods = ['get', 'head', 'post', 'put', 'delete', 'options', 'patch']
const paramsMethods = ['get', 'delete']
class Api {
	constructor() {
		methods.forEach(
			method =>
				(this[method] = (path, data = {}, headers = {}) =>
					new Promise((resolve, reject) => {
						let accessToken = local.getItem(TOKEN)
						// console.log('xxx',TOKEN)
						accessToken
							= '6m5qByCK1QbkWRrnnAv+UcuPG86EH3iOkll6PQsXbTREtCLywA7ZyGWcpOsrGerK'
						// accessToken = '9OhmAVlUXpWEdkhcOYaf7rsqy3nNwgxN78mtwvcwWDakJF3KBIPW7rDhATyIdwKB/HW4MTyY/h8pfmnbG9lSkJuQY9goJsii11bICkXeiLmIDeJzfmcFDDT8jVe0A39kc4N5iDE1usjgX1xRHS8j9pvv8Q52vlrnqp2UtEtzVw+ha++Ro4yI2XUpQWFGxAOywJy2zhwJx/jzxDik17DIJbYTwuE+Q7Eqw6Bc/hIfW3mE19uVXeH5m6gqTK8k7Qngn0noNbF4rcnlMAo/xDWPOLEdHLoYgIFjkOyUU5xfEV4gitaZsINSRxvVSlwdpQrr2OoEi1npIIQ8kWxSG8B2Dg==';
						// let bearer = token ? { 'Authorization': 'Bearer ' + token } : null
						// const obj = parse(data);
						const keys = Object.keys(data).sort()
						let str = `accessToken=${accessToken}&apiVersion=v1`
						for(let key of keys) {
							if(data[key]) {
								str += `&${key}=${data[key]}`
							}
						}
						str += `&uri=${path}&apiSecret=e4acec0aaa6f4ae28a51cec503cbb47d`
						const sign = md5(str)

						let config = {
							headers: {
								'Content-Type': 'application/json',
								apiVersion: 'v1',
								accessToken,
								sign,
								...headers,
							},
							//timeout: 300000,
						}
						data
							= paramsMethods.indexOf(method) !== -1
								? { params: data, ...config }
								: data
						let _path = `/api${path}`
						console.log(new Date().getTime())
						axios[method](_path, data, config)
							.then(({ data }) => {
								resolve(data)
							})
							.catch(error => {
								if(error.response) {
									if(error.response.status === 401) {
										//	登录过期 window.location.href = '/login'
									}else{
										reject(error.response.data)
									}
								}else{
									reject(error)
								}
							})
					})),
		)
	}
}

export default new Api()
