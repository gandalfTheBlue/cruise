import mockData from './mock-data'
import config from '../conf/config'
import hybridConsole from '../utils/hybrid-console'

class HybridApi {
	constructor(isMock) {
		this.isMock = isMock
	}

	request(opts) {
		return new Promise((resolve, reject) => {
			if(this.isMock) {
				let data = mockData[opts.url]
				if(data) {
					resolve(data)
					hybridConsole.log(data)
				}else{
					hybridConsole.log('没有mock数据')
					reject('没有mock数据')
				}
			}else{
				if(window.cefQuery) {
					window.cefQuery({
						request: opts.url,
						onSuccess: function(res) {
							hybridConsole.log(opts.url + ' 返回值：', res)
							resolve(res)
						},
						onFailure: function(err) {
							hybridConsole.error(opts.url + ' 产生错误：', err)
							reject(err)
						},
					})
				}else{
					console.error('window.cefQuery不存在')
					reject('window.cefQuery不存在')
				}
			}
		})
	}
}

export default new HybridApi(config.isMock)
