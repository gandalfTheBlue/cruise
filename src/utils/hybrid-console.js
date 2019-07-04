import config from '../conf/config'

class HybridConsole {
	constructor(isHybridConsole) {
		this.isHybridConsole = isHybridConsole
		if(this.isHybridConsole) {
			this.$body = document.querySelector('body')
			this.$console = document.createElement('textarea')
			this.$console.col = '60'
			this.$console.className = 'hybrid-console'
			this.$console.value = '我是控制台'
			this.$body.appendChild(this.$console)
		}
	}

	log() {
		if(this.isHybridConsole) {
			this.$console.value += '\r\n \r\n'
			this.$console.value
				+= '[HybridConsole-log]:' + JSON.stringify(arguments)
		}else{
			console.log('[HybridConsole-log]:' + JSON.stringify(arguments))
		}
	}

	error() {
		if(this.isHybridConsole) {
			this.$console.value += '\r\n \r\n'
			this.$console.value
				+= '[HybridConsole-error]:' + JSON.stringify(arguments)
		}else{
			console.error('[HybridConsole-log]:' + JSON.stringify(arguments))
		}
	}
}

export default new HybridConsole(config.isHybridConsole)
